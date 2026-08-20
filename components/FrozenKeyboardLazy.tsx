"use client";

import { useEffect, useState, type ComponentType } from "react";
import { probeWebGL } from "@/lib/webgl";

/**
 * Keeps three.js / drei out of the first homepage compile and out of the
 * client bundle on GPUs that cannot create a WebGL2 context (Intel HD 3000).
 */
export default function FrozenKeyboardLazy({
  mobile = false,
}: {
  mobile?: boolean;
}) {
  const [Scene, setScene] = useState<ComponentType<{
    mobile?: boolean;
  }> | null>(null);

  useEffect(() => {
    if (!probeWebGL().ok) return;
    let cancelled = false;
    void import("./FrozenKeyboard").then((mod) => {
      if (!cancelled) setScene(() => mod.default);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!Scene) return null;
  return <Scene mobile={mobile} />;
}
