import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkGemoji from "remark-gemoji";
import remarkGfm from "remark-gfm";
import rehypeShiki from "@shikijs/rehype";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkGemoji)
    .use(remarkRehype)
    .use(rehypeFormat)
    // .use(rehypeHighlight)
    .use(rehypeShiki as any, {
      inline: "tailing-curly-colon", // or other options

      themes: {
        light: "one-light",
        dark: "vitesse-dark",
      },
    })
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
