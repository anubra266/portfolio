"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export const Comments = () => {
  const { theme } = useTheme();

  const themes = {
    light: "light",
    dark: "transparent_dark",
  };

  return (
    <Giscus
      repo="anubra266/portfolio"
      repoId="R_kgDOLZBwKQ"
      category="Announcements"
      category-id="DIC_kwDOLZBwKc4CkFk2"
      mapping="pathname"
      strict="1"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={themes[theme as keyof typeof themes]}
      lang="en"
    />
  );
};
