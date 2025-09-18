import { getAllPosts } from "~/lib/api";

export async function GET() {
  const posts = getAllPosts();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Abraham's mind</title>
    <description>Software engineer passionate about UI, accessibility and DX.</description>
    <link>https://anubra266.com</link>
    <atom:link href="https://anubra266.com/feed.xml" rel="self" type="application/rss+xml"/>
    <language>en-US</language>
    <managingEditor>abraham@anubra266.dev (Abraham A. Aremu)</managingEditor>
    <webMaster>abraham@anubra266.dev (Abraham A. Aremu)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <ttl>60</ttl>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>https://anubra266.com/posts/${post.slug}</link>
      <guid>https://anubra266.com/posts/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>abraham@anubra266.dev (Abraham A. Aremu)</author>
      ${post.tags.map((tag) => `<category>${tag}</category>`).join("\n      ")}
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600", // Cache for 1 hour
    },
  });
}
