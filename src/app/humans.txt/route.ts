export async function GET() {
  const content = `/* TEAM */
Name: Abraham A. Aremu
Role: Software Engineer & Open Source Maintainer
Contact: abraham [at] anubra266.dev
Twitter: @anubra266
GitHub: https://github.com/anubra266
Location: Nigeria

/* THANKS */
Next.js team for the amazing framework
Vercel for hosting
The open source community for continuous inspiration

/* SITE */
Last update: ${new Date().toISOString().split("T")[0]}
Language: English
Doctype: HTML5
IDE: VS Code
Framework: Next.js 14
Styling: Panda CSS
Deployment: Vercel`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}


