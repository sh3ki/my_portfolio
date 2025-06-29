import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Jedidia Shekainah",
  lastName: "Garcia",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Aspiring Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "shekaigarcia@gmail.com",
  location: "Asia/Manila", // Timezone identifier for Philippines
  locationDisplay: "Philippines/Laguna", // Display text for location
  languages: ["English", "Filipino"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),     
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/jedidiashekainah.garcia.92",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/sh3ki",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sh3ki",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "+639565934460",
    icon: "phone",
    link: "tel:+639565934460",
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Let’s Build,   What’s Next</>,
  featured: {
    display: true,
    title: <>Latest project: <strong className="ml-4">Fredo's Grilling</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      {/* Hi, I'm {person.firstName}, an aspiring software engineer and passionate full-stack developer. 
      <br />
      I craft robust web, mobile, and software solutions for clients worldwide—transforming visions into scalable, high-impact products. 
      <br /> */}
      From intuitive user interfaces to powerful backend architectures, I build with precision, performance, and purpose. 
      <br />
      Ready to build your boldest idea into reality.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.locationDisplay}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I'm {person.firstName}, an aspiring software engineer and passionate full-stack developer. 
        I craft robust web, mobile, and software solutions for clients worldwide—transforming visions into scalable, high-impact products. 
        With a focus on performance, usability, and clean code, I bring both creativity and technical expertise to every project.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Projects & Achievements",
    projects: [
      {
        title: "Personal Portfolio Website",
        timeframe: "2024",
        description: (
          <>
            Designed and developed a personal portfolio using Next.js and Once UI to showcase my skills, projects, and achievements.
          </>
        ),
        technologies: ["Next.js", "React", "Once UI"],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Portfolio Website Screenshot",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Open Source Contributor",
        timeframe: "2023",
        description: (
          <>
            Contributed bug fixes and new features to several open-source projects on GitHub, collaborating with developers worldwide.
          </>
        ),
        technologies: ["JavaScript", "GitHub"],
        images: [],
      },
      {
        title: "Hackathon Finalist",
        timeframe: "2022",
        description: (
          <>
            Built a real-time chat application during a 48-hour hackathon, reaching the finals among 100+ teams.
          </>
        ),
        technologies: ["Node.js", "Socket.io", "React"],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
