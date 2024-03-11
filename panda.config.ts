import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // hash: true,
  // minify: true,
  preflight: true,
  include: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          bg: {
            canvas: {
              value: { base: "{colors.white}", _dark: "#2a2a2a" },
            },
            default: {
              value: { base: "{colors.white}", _dark: "#222222" },
            },
            subtle: {
              value: { base: "#f5f5f5", _dark: "#333333" },
            },
          },
          fg: {
            default: {
              value: { base: "{colors.black}", _dark: "{colors.white}" },
            },
            subtle: {
              value: { base: "{colors.black/60}", _dark: "{colors.white/60}" },
            },
            muted: {
              value: { base: "{colors.black/70}", _dark: "{colors.white/60}" },
            },
          },
        },
      },
    },
  },
  globalCss: {
    body: {
      bg: "bg.canvas",
      color: "fg.default",
    },
  },
  outdir: "styled-system",
  strictTokens: true,
  jsxFramework: "react",
});
