import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Nuno 'Riley' Moura — Full Stack Developer",
  author: "Nuno 'Riley' Moura",
  description:
    "Self-taught and detail-oriented full stack developer with 3+ years of experience building scalable applications using Laravel, Node.js, and Vue.js. Adept at designing APIs, optimizing databases, and integrating microservices.",
  lang: "en",
  siteLogo: "/1731376687740.jpeg", // You may want to update this image
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Email", href: "mailto:nmoura49@gmail.com" },
    { text: "LinkedIn", href: "https://linkedin.com/in/rileymoura" },
    { text: "Github", href: "https://github.com/rileymoura" }, // Update if you have a GitHub
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://nunomouradev.pt",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Nuno 'Riley' Moura",
    specialty:
      "Full Stack Developer – Laravel, Node.js, Vue.js, MySQL, MongoDB, Redis",
    summary:
      "Self-taught and detail-oriented full stack developer with 3+ years of experience building scalable applications using Laravel, Node.js, and Vue.js.",
    email: "nmoura49@gmail.com",
  },
  experience: [
    {
      company: "Fujitsu",
      position: "Full Stack Developer",
      startDate: "Jan 2025",
      endDate: "Present",
      summary: [
        "Collaborated on enterprise-scale projects",
        "Supported service infrastructure and features",
      ],
    },
    {
      company: "Armilustrium",
      position: "Back End Developer",
      startDate: "Apr 2023",
      endDate: "Dec 2024",
      summary: [
        "Developed back-end services with Laravel and Node.js",
        "Scalable architecture with SQL/NoSQL",
      ],
    },
    {
      company: "Hello Blossom",
      position: "Full Stack Developer",
      startDate: "Dec 2022",
      endDate: "Mar 2023",
      summary: [
        "Built SaaS platform using Laravel, AWS, MongoDB",
        "Microservices, Redis, API integrations",
      ],
    },
    {
      company: "Pontopay",
      position: "Junior Full Stack Developer",
      startDate: "Jul 2022",
      endDate: "Nov 2022",
      summary: [
        "Contributed to full stack features using Laravel",
        "Improved core platform with MVC design",
      ],
    },
    {
      company: "Pontopay",
      position: "Web Dev Intern",
      startDate: "Mar 2022",
      endDate: "Jul 2022",
      summary: [
        "Built real estate and car dealer websites",
        "Supported platform redesign and on-site tech",
      ],
    },
  ],
  about: {
    description: `
      <p>Full Stack Developer with 3+ years of experience building scalable applications using Laravel, Node.js, and Vue.js.</p></br>
      <p><strong>Key Strengths:</strong></p>
      <ul>
        <li>Designing APIs</li>
        <li>Optimizing databases</li>
        <li>Integrating microservices</li>
        <li>Building SaaS platforms and scalable architectures</li>
        <li>Working with both SQL and NoSQL databases</li>
      </ul></br>
      <p><strong>Technical Skills</strong></p>
      <ul>
        <li><strong>Languages:</strong> PHP, JavaScript, TypeScript, SQL</li>
        <li><strong>Frameworks:</strong> Laravel, Vue.js, Node.js, Express</li>
        <li><strong>Databases:</strong> MySQL, MongoDB, Redis, SQL Server</li>
        <li><strong>Tools:</strong> Jenkins, Docker, RabbitMQ, AWS, Git, CI/CD pipelines</li>
      </ul></br>
      <p><strong>Languages</strong></p>
      <ul>
        <li>Portuguese (Native)</li>
        <li>English (Fluent)</li>
        <li>Spanish (Intermediate)</li>
      </ul>
    `,
    image: "/1731376687740.jpeg", // You may want to update this image
  },
};

// #5755ff
