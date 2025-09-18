import type { Metadata } from "next";
import { ReachOut } from "~/app/about/reach-out";
import { FunFacts } from "./fun-facts";
import { Hero } from "./hero";

export const metadata: Metadata = {
  title: "About Abraham A. Aremu",
  description:
    "Learn more about Abraham A. Aremu (anubra266), a passionate software engineer focused on UI, accessibility, and developer experience. Creator of Panda CSS and maintainer of Zag.js.",
  openGraph: {
    title: "About Abraham A. Aremu",
    description:
      "Learn more about Abraham A. Aremu (anubra266), a passionate software engineer focused on UI, accessibility, and developer experience.",
    type: "website",
    url: "https://anubra266.com/about",
  },
  twitter: {
    title: "About Abraham A. Aremu",
    description:
      "Learn more about Abraham A. Aremu (anubra266), a passionate software engineer focused on UI, accessibility, and developer experience.",
  },
  alternates: {
    canonical: "https://anubra266.com/about",
  },
};

export default function Index() {
  return (
    <>
      <Hero />
      {/* <FunFacts /> */}
      <ReachOut />
    </>
  );
}
