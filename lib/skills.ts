import icons from "./skill-icons.json";

export type SkillIcon = {
  title: string;
  slug: string;
  path: string;
  hex: string;
};

// 3×5 grid — consumed by the 3D keyboard (one icon per keycap) and, on mobile,
// by the flat list below for the static skills grid that replaces the
// hover-driven keyboard interaction. Taglines live in the i18n dictionary
// under `keyboard.taglines.<slug>`.
//
// Icon SVG paths live in skill-icons.json (extracted from simple-icons).
// Webpack cannot parse simple-icons' giant ESM bundle (treated as binary).
export const SKILLS_GRID: readonly (readonly SkillIcon[])[] = [
  [
    icons.siJavascript,
    icons.siTypescript,
    icons.siReact,
    icons.siNextdotjs,
    icons.siTailwindcss,
  ],
  [
    icons.siNodedotjs,
    icons.siExpress,
    icons.siNestjs,
    icons.siFlutter,
    icons.siSolidity,
  ],
  [
    icons.siPostgresql,
    icons.siMongodb,
    icons.siEthereum,
    icons.siDocker,
    icons.siGit,
  ],
] as const;

export const SKILLS_FLAT: readonly SkillIcon[] = SKILLS_GRID.flat();
