"use client";

export type WebGLCaps = {
  /** True only when Three.js can actually start (WebGL2). */
  ok: boolean;
  webgl2: boolean;
  /** Old GPUs that choke on env maps + MSAA even if WebGL2 exists. */
  lowEnd: boolean;
};

const FAIL: WebGLCaps = { ok: false, webgl2: false, lowEnd: true };

const LOW_END_GPU =
  /Direct3D9|HD Graphics [123]\d{3}\b|Intel\(R\) HD Graphics [234]000|SwiftShader|llvmpipe|Microsoft Basic Render/i;

/**
 * GPUs that cannot create a WebGL2 context. Three.js r163+ only uses
 * `webgl2`, so calling getContext("webgl2") here would only spam Chrome's
 * `BindToCurrentSequence failed` log on Intel HD 3000 / ANGLE D3D9.
 */
const NO_WEBGL2_GPU =
  /Direct3D9|HD Graphics [23]000\b|Intel\(R\) HD Graphics [23]000|SwiftShader|llvmpipe|Microsoft Basic Render/i;

const CTX_ATTRS: WebGLContextAttributes = {
  alpha: true,
  antialias: false,
  depth: true,
  stencil: false,
  failIfMajorPerformanceCaveat: false,
  powerPreference: "default",
};

let cached: WebGLCaps | null = null;

function lose(gl: WebGLRenderingContext | WebGL2RenderingContext | null) {
  try {
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
  } catch {
    // Ignore — some drivers throw if the context is already lost.
  }
}

function rendererName(gl: WebGLRenderingContext): string {
  try {
    const info = gl.getExtension("WEBGL_debug_renderer_info");
    if (info) {
      return String(gl.getParameter(info.UNMASKED_RENDERER_WEBGL) ?? "");
    }
  } catch {
    // WEBGL_debug_renderer_info is optional and blocked in some browsers.
  }
  return "";
}

/**
 * Cheap, one-shot capability check. Releases the probe context immediately
 * so we don't burn one of the browser's ~8 WebGL context slots.
 *
 * Three.js 0.184's WebGLRenderer only creates a WebGL2 context. WebGL1
 * succeeding (Intel HD 3000 / D3D9) is not enough — mounting <Canvas>
 * would throw `Error creating WebGL context` as an unhandled rejection.
 */
export function probeWebGL(): WebGLCaps {
  if (cached) return cached;
  if (typeof document === "undefined") return FAIL;

  const canvas = document.createElement("canvas");
  let gl: WebGLRenderingContext | null = null;
  try {
    gl = (canvas.getContext("webgl", CTX_ATTRS) ||
      canvas.getContext("experimental-webgl", CTX_ATTRS)) as WebGLRenderingContext | null;
  } catch {
    gl = null;
  }

  if (!gl) {
    cached = FAIL;
    return cached;
  }

  const renderer = rendererName(gl);
  const gpuLowEnd = LOW_END_GPU.test(renderer);
  const cannotWebgl2 = NO_WEBGL2_GPU.test(renderer);
  lose(gl);

  if (cannotWebgl2) {
    cached = FAIL;
    return cached;
  }

  let webgl2 = false;
  const c2 = document.createElement("canvas");
  try {
    const gl2 = c2.getContext("webgl2", CTX_ATTRS);
    webgl2 = !!gl2;
    lose(gl2);
  } catch {
    webgl2 = false;
  }

  cached = {
    ok: webgl2,
    webgl2,
    lowEnd: gpuLowEnd || !webgl2,
  };
  return cached;
}
