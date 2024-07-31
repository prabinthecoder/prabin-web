import { Icons } from "@/components/icons";
import { Bug, HomeIcon, NotebookIcon, LockKeyhole } from "lucide-react";

export const DATA = {
  name: "Prabin Jaishi",
  initials: "DV",
  url: "https://dillion.io",
  location: "Kathmandu Nepal, NP",
  locationLink: "https://www.google.com/maps/place/kathmandu",
  description:
    "Cyber Security turned Entrepreneur. I love building things and helping people. Very active on Twitter and YouTube.",
  summary:
    "I am a passionate learner with a big goal to become a cybersecurity expert. With 2 year of experience in [Web Development](#/), I am dedicated to mastering the intricacies of cybersecurity, aiming to safeguard digital environments and mitigate risks through proactive measures. [I actively participate in hackathons and cybersecurity competitions](/hackathon) to apply my skills in real-world scenarios, fostering innovative solutions and staying abreast of industry trends.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Java",
    "C",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/hackathon", icon: Bug, label: "Hackathon" },
    { href: "/admin", icon: LockKeyhole, label: "Admin" },
  ],
  contact: {
    email: "prabinthecoder@gmail.com",
    tel: "+9779704512912",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/prabinthecoder",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/prabinthecoder",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/prabinthecoder",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@prabinjaishi",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        
        navbar: false,
      },
    },
  },
  image: [
    {
      imageUrl: "/image/01.JPG",
      idx: "Prabin 01",
    },
    {
      imageUrl: "/image/02.jpg",
      idx: "Prabin 02",
    },
    {
      imageUrl: "/image/03.jpg",
      idx: "Prabin 03",
    },
    {
      imageUrl: "/image/04.JPG",
      idx: "Prabin 04",
    },
    {
      imageUrl: "/image/05.JPG",
      idx: "Prabin 05",
    },
    {
      imageUrl: "/image/06.JPG",
      idx: "Prabin 06",
    },
    {
      imageUrl: "/image/07.jpg",
      idx: "Prabin 07",
    },
    {
      imageUrl: "/image/08.jpg",
      idx: "Prabin 08",
    },
    {
      imageUrl: "/image/09.JPG",
      idx: "Prabin 09",
    },
  ],
  work: [
    {
      company: "Black Sheep",
      href: "https://blacksheep.com.np",
      badges: [],
      location: "Remote",
      title: "Junior Web Developer",
      logoUrl: "/black_sheep.png",
      start: "May 2022",
      end: "Dec 2022",
      description:
        "As a Junior Web Developer, I contribute to the design, coding, and maintenance of websites, gaining hands-on experience in front-end and back-end technologies while supporting team objectives with a passion for continuous learning and growth.",
    },
    {
      company: "Chhito Connect",
      badges: [],
      href: "https://chhitoconnect.com",
      location: "Remote",
      title: "Junior Database Manager",
      logoUrl: "/chitto_connect.png",
      start: "Jan 2023",
      end: "Apr 2024",
      description:
        "Junior Database Manager with strong skills in database design, maintenance, and query optimization. Dedicated to ensuring data integrity and efficiency while supporting organizational goals through effective database management practices.",
    },
  ],
  education: [
    {
      school: "Advance Academy",
      href: "https://www.facebook.com/p/Advance-Academy-100068567634793",
      degree: "High School Degree",
      logoUrl: "/advance.png",
      start: "2014",
      end: "2020",
    },
    {
      school: "Sudur Paschimanchal Secondary School",
      href: "https://spa.edu.np",
      degree: "National Examinations Board (NEB)",
      logoUrl: "/spa.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "Wright State University",
      href: "https://www.wright.edu",
      degree: "Bachelor's Degree of Computer Science",
      logoUrl: "/wright.png",
      start: "2025",
      end: "2029",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
