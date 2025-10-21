import type { KnipConfig } from "knip";

const config: KnipConfig = {
  ignore: [
    "components/index.ts",
    "src/components/ui/sidebar.tsx",
    "src/components/ui/sheet.tsx",
    "src/components/ui/card.tsx",
  ],
  ignoreDependencies: [
    "@hookform/resolvers",
    "next-auth",
    "react-hook-form",
    "tw-animate-css",
    "zod",
    "zustand",
    "autoprefixer",
    "lint-staged",
    "tailwindcss",
  ],
};

export default config;
