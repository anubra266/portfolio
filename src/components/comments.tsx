"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export const Comments = () => {
  const { theme } = useTheme();

  const themes = {
    light: "light",
    dark: "transparent_dark",
  };

  const styles = `https://www.anubra266.dev/css/comments.${themes[theme as keyof typeof themes]}.css`;

  return (
    <Giscus
      repo="anubra266/portfolio"
      repoId="R_kgDOLZBwKQ"
      category="Announcements"
      category-id="DIC_kwDOLZBwKc4CkFk2"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={styles}
      lang="en"
    />
  );
};
