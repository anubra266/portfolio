export function PersonStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abraham A. Aremu",
    alternateName: "anubra266",
    url: "https://anubra266.com",
    image: "https://avatars.githubusercontent.com/u/30869823?s=400&v=4",
    description:
      "Software engineer passionate about UI, accessibility, and developer experience. Creator of Panda CSS, maintainer of Zag.js.",
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Open Source Community",
    },
    sameAs: [
      "https://github.com/anubra266",
      "https://twitter.com/anubra266",
      "https://linkedin.com/in/anubra266",
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Frontend Development",
      "UI Engineering",
      "Accessibility",
      "Developer Experience",
      "CSS-in-JS",
      "Design Systems",
      "Open Source Development",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      occupationLocation: {
        "@type": "Place",
        name: "Remote",
      },
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "CSS",
        "HTML",
        "Node.js",
        "Frontend Architecture",
        "Design Systems",
        "Accessibility",
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "anubra266",
    alternateName: "Abraham A. Aremu Portfolio",
    url: "https://anubra266.com",
    description:
      "Software engineer passionate about UI, accessibility, and developer experience. Creator of Panda CSS, maintainer of Zag.js.",
    author: {
      "@type": "Person",
      name: "Abraham A. Aremu",
      alternateName: "anubra266",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://anubra266.com/posts?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

export function BlogStructuredData({ post }: { post: any }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://anubra266.com${post.coverImage}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Abraham A. Aremu",
      alternateName: "anubra266",
      url: "https://anubra266.com",
    },
    publisher: {
      "@type": "Person",
      name: "Abraham A. Aremu",
      alternateName: "anubra266",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://anubra266.com/posts/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection: "Technology",
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}


