import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abraham A. Aremu (anubra266) - Software Engineer",
    short_name: "anubra266",
    description:
      "Software engineer passionate about UI, accessibility, and developer experience. Creator of Panda CSS, maintainer of Zag.js.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "https://avatars.githubusercontent.com/u/30869823?s=192&v=4",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://avatars.githubusercontent.com/u/30869823?s=512&v=4",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}


