import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Jedidia Shekainah",
  lastName: "Garcia",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer",
  avatar: "/images/avatar.jpg",
  email: "shekaigarcia@gmail.com",
  location: "Asia/Manila", // Timezone identifier for Philippines
  locationDisplay: "Philippines/Laguna", // Display text for location
  languages: ["English", "Filipino"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: "Let’s Build Something Great Together",
  description:
    "Have an idea, project, or business you want to bring to life? I’d love to hear about it. Reach out and let’s turn your vision into reality.",
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
    href: "/projects/Fredo's_Grilling",
  },
  subline: (
    <>
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
        Hi, I'm {person.firstName}, a passionate full-stack software developer. <br></br>
        I craft robust web, mobile, and software solutions for clients worldwide—transforming visions into scalable, high-impact products. 
        With a focus on performance, usability, and clean code, I bring both creativity and technical expertise to every project.
      </>
    ),
  },
  coreStrengths: {
    display: true,
    title: "Core Strengths",
    description: "",
    items: [
      {
        icon: "BsLayers",
        title: "Full-Stack Versatility",
        description:
          "Comfortable across the stack — from responsive frontend interfaces to robust backend services and database design.",
      },
      {
        icon: "layoutGridAdd",
        title: "Component-Driven Frontend Development",
        description:
          "I build reusable, maintainable components using modern frameworks like React and Next.js.",
      },
      {
        icon: "HiOutlineLink",
        title: "Clean, Scalable APIs",
        description:
          "I design and build RESTful and modular APIs that are easy to consume and built for future growth.",
      },
      {
        icon: "PiFoldersDuotone",
        title: "Database Architecture",
        description:
          "I design relational and NoSQL database schemas that optimize performance and maintain data integrity.",
      },
      {
        icon: "FaRocket",
        title: "DevOps-Ready Mindset",
        description:
          "From CI/CD pipelines to containerized deployments, I can take projects from local to live smoothly.",
      },
      {
        icon: "bug",
        title: "Debugging & Problem Solving",
        description:
          "I don’t just fix bugs—I trace root causes, refactor with intention, and future-proof the solution.",
      },
      {
        icon: "TbDeviceMobileCode",
        title: "Cross-Platform Thinking",
        description:
          "I build with the awareness that users could be on any screen, and ensure seamless experiences across devices.",
      },
      {
        icon: "beaker",
        title: "Test-Driven Development",
        description:
          "I write code with reliability in mind—using unit, integration, and end-to-end tests to ensure features work as intended and regressions are caught early.",
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Polytechnic University of the Philippines",
        description: <>Studied Bachelor of Science in Information Technology.<br></br> Consistent President's Lister.</>,
      },
      {
        name: "Manila Science High School",
        description: <>Studied Junior and Senior High School - STEM track. <br></br> Graduated with High Honors.</>,
      },
      {
        name: "Hen. Pio del Pilar Elementary School",
        description: <>Studied Elementary School. <br></br> Graduated Salutatorian.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Behind the Screens",
    skills: [
      {
        description:  <>A sneak peek into my workspace where ideas take shape and code comes to life. <br></br> This is where I create, debug, and build the solutions that power your projects.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/BTS/1.jpg",
            alt: "image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/BTS/2.jpg",
            alt: "image",
            width: 16,
            height: 9,
          },{
            src: "/images/BTS/3.jpg",
            alt: "image",
            width: 16,
            height: 9,
          },{
            src: "/images/BTS/4.jpg",
            alt: "image",
            width: 16,
            height: 9,
          },{
            src: "/images/BTS/5.jpg",
            alt: "image",
            width: 16,
            height: 9,
          },{
            src: "/images/BTS/6.jpg",
            alt: "image",
            width: 16,
            height: 9,
          },{
            src: "/images/BTS/7.jpg",
            alt: "image",
            width: 16,
            height: 9,
          },{
            src: "/images/BTS/8.jpg",
            alt: "image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const services = {
  path: "/services",
  label: "Services",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new service posts by adding a new .mdx file to app/services/posts
  // All posts will be listed on the /services route
};

const projects = {
  path: "/projects",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/projects/projects
  // All projects will be listed on the /home and /projects routes
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

export { person, social, newsletter, home, about, services, projects, gallery };
