import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
}

// Editable array of 14 projects, each with multiple images and a fixed link
const editableProjects = [
  {
    title: "Fredo's Grilling | POS System",
    description: "Developing a comprehensive point-of-sale solution tailored for a grilled fish business, enabling seamless order processing, inventory tracking, real-time reporting, online and cash payments, and full integration with a cash register and receipt printer, with staff using tablets and admins accessing the system on multiple devices.",
    images: [
      "/images/SS/Fredos_Grilling/1.png",
      "/images/SS/Fredos_Grilling/2.png",
      "/images/SS/Fredos_Grilling/3.png",
      "/images/SS/Fredos_Grilling/4.png",
      "/images/SS/Fredos_Grilling/5.png",
      "/images/SS/Fredos_Grilling/6.png",
      "/images/SS/Fredos_Grilling/7.png",
      "/images/SS/Fredos_Grilling/8.png",
      "/images/SS/Fredos_Grilling/9.png",
      "/images/SS/Fredos_Grilling/10.png",
      "/images/SS/Fredos_Grilling/11.png",
      "/images/SS/Fredos_Grilling/12.png",
    ],
    slug: "project-1",
    content: "",
    avatars: [],
    link: "/projects/Fredo's_Grilling",
  },
  {
    title: "Protech | Face Recognition Attendance System",
    description: "A cutting-edge attendance system for schools, Protech uses facial recognition and live video feed to accurately detect student arrivals in real time. It automatically sends SMS and email notifications to parents, confirming their child’s entry. With multi-device admin access and remote management, Protech enhances school security, streamlines attendance, and improves parent communication.",
    images: [
      "/images/SS/Protech/1.png",
      "/images/SS/Protech/2.png",
      "/images/SS/Protech/3.png",
      "/images/SS/Protech/4.png",
      "/images/SS/Protech/5.png",
      "/images/SS/Protech/6.png",
      "/images/SS/Protech/7.png",
      "/images/SS/Protech/8.png",
      "/images/SS/Protech/9.png",
      "/images/SS/Protech/10.png",
      "/images/SS/Protech/11.png",
      "/images/SS/Protech/12.png",
    ],
    slug: "project-2",
    content: "",
    avatars: [],
    link: "/projects/Protech",
  },
  {
    title: "PUP Accreditation System",
    description: "Centralized web-based accreditation system for PUP, enabling teachers to upload required documents and admins to review, organize, and track submissions per accreditation area, with real-time progress monitoring, secure file storage, and role-based access through a responsive platform accessible on multiple devices.",
    images: [
      "/images/SS/PUP_AACCUP/1.png",
      "/images/SS/PUP_AACCUP/2.png",
      "/images/SS/PUP_AACCUP/3.png",
      "/images/SS/PUP_AACCUP/4.png",
      "/images/SS/PUP_AACCUP/5.png",
      "/images/SS/PUP_AACCUP/6.png",
      "/images/SS/PUP_AACCUP/7.png",
      "/images/SS/PUP_AACCUP/8.png",
      "/images/SS/PUP_AACCUP/9.png",
      "/images/SS/PUP_AACCUP/10.png",
    ],
    slug: "project-3",
    content: "",
    avatars: [],
    link: "/projects/PUP_Accreditation",
  },
  {
    title: "Pokedex Trading System",
    description: "Web-based Pokedex trading system designed for Pokémon enthusiasts to collect, trade, and manage their Pokémon digitally. The platform features a comprehensive, searchable database, real-time trading between users, secure login with user profiles, and a responsive interface optimized for both desktop and mobile use, creating an engaging and interactive trading experience.",
    images: [
      "/images/SS/Pokedex/1.png",
      "/images/SS/Pokedex/2.png",
      "/images/SS/Pokedex/3.png",
      "/images/SS/Pokedex/4.png",
      "/images/SS/Pokedex/5.png",
      "/images/SS/Pokedex/6.png",
      "/images/SS/Pokedex/7.png",
      "/images/SS/Pokedex/8.png",
    ],
    slug: "project-4",
    content: "",
    avatars: [],
    link: "/projects/Pokedex",
  },
  {
    title: "VaxGuard Pro | Vaccination Management System",
    description: "Streamlined vaccination management system that allows users to book vaccination appointments online while enabling admins to monitor, manage, and track vaccination records in real time. VaxGuard Pro features a user-friendly interface, secure data handling, and responsive access across devices to ensure efficient scheduling and oversight of vaccination efforts.",
    images: [
      "/images/SS/VaxGuard_Pro/1.png",
      "/images/SS/VaxGuard_Pro/2.png",
      "/images/SS/VaxGuard_Pro/3.png",
      "/images/SS/VaxGuard_Pro/4.png",
      "/images/SS/VaxGuard_Pro/5.png",
      "/images/SS/VaxGuard_Pro/6.png",
      "/images/SS/VaxGuard_Pro/7.png",
    ],
    slug: "project-5",
    content: "",
    avatars: [],
    link: "/projects/VaxGuard_Pro",
  },
  {
    title: "Appoint2Day | Appointment Scheduling System",
    description: "Online appointment scheduling system designed for students to book consultations and class appointments with teachers or online tutors. Appoint2Day allows flexible time slot selection, real-time booking updates, and admin monitoring of all scheduled sessions, offering a streamlined, user-friendly experience across desktop and mobile devices.",
    images: [
      "/images/SS/Appoint2Day/1.png",
      "/images/SS/Appoint2Day/2.png",
      "/images/SS/Appoint2Day/3.png",
      "/images/SS/Appoint2Day/4.png",
    ],
    slug: "project-6",
    content: "",
    avatars: [],
    link: "/projects/Appoint2Day",
  },
  {
    title: "SmileCare | Dental Clinic Management System",
    description: "Comprehensive dental clinic management system with dedicated portals for patients, dentists, receptionists, and admins. SmileCare enables easy booking of dental checkups, tracks patient dental records, and streamlines clinic operations through real-time appointment management, health monitoring, and secure multi-role access across all devices.",
    images: [
      "/images/SS/SmileCare/1.png",
      "/images/SS/SmileCare/2.png",
      "/images/SS/SmileCare/3.png",
      "/images/SS/SmileCare/4.png",
      "/images/SS/SmileCare/5.png",
    ],
    slug: "project-7",
    content: "",
    avatars: [],
    link: "/projects/SmileCare",
  },
  {
    title: "EduManage | School Management System",
    description: "School management system with dedicated portals for students, teachers, principals, and admins. EduManage streamlines enrollment, grading, class scheduling, and announcements, while allowing teachers to manage lessons and track performance. Admins and principals can oversee operations, manage users, and access reports through a responsive, multi-device platform.",
    images: [
      "/images/SS/EduManage/1.png",
      "/images/SS/EduManage/2.png",
      "/images/SS/EduManage/3.png",
      "/images/SS/EduManage/4.png",
      "/images/SS/EduManage/5.png",
    ],
    slug: "project-8",
    content: "",
    avatars: [],
    link: "/projects/EduManage",
  },
  {
    title: "SecureAuth | Secured Authentication System",
    description: "Robust security-focused authentication system featuring two-factor authentication (2FA), CSRF protection, password hashing, and secure session management. SecureAuth delivers strong user verification and data protection across web applications, ensuring safe and seamless access on multiple devices.",
    images: [
      "/images/SS/SecureAuth/1.png",
      "/images/SS/SecureAuth/2.png",
      "/images/SS/SecureAuth/3.png",
      "/images/SS/SecureAuth/4.png",
      "/images/SS/SecureAuth/5.png",
      "/images/SS/SecureAuth/6.png",
    ],
    slug: "project-9",
    content: "",
    avatars: [],
    link: "/projects/SecureAuth",
  },
  {
    title: "Ronald's Cuisine | Restaurant Management System",
    description: "A restaurant management system that allows customers to browse the menu, place orders for dine-in or delivery, and track their orders in real time. Ronald's Cuisine streamlines order processing, manages delivery logistics, and provides admins and staff with tools to oversee operations—all accessible on multiple devices for smooth, efficient service.",
    images: [
      "/images/SS/Ronalds_Cuisine/1.png",
      "/images/SS/Ronalds_Cuisine/2.png",
      "/images/SS/Ronalds_Cuisine/3.png",
    ],
    slug: "project-10",
    content: "",
    avatars: [],
    link: "/projects/Ronalds_Cuisine",
  },
  {
    title: "Premio | Online Motor Loan Application",
    description: "Automated online motor loan application system that enables users to easily apply for vehicle loans through a secure, user-friendly platform. Premio streamlines loan processing with automated document submission, status tracking, and admin management tools, providing seamless access across devices for both applicants and loan officers.",
    images: [
      "/images/SS/Premio/1.png",
      "/images/SS/Premio/2.png",
      "/images/SS/Premio/3.png",
      "/images/SS/Premio/4.png",
      "/images/SS/Premio/5.png",
      "/images/SS/Premio/6.png",
      "/images/SS/Premio/7.png",
      "/images/SS/Premio/8.png",
    ],
    slug: "project-11",
    content: "",
    avatars: [],
    link: "/projects/Premio",
  },
  {
    title: "Luxe Haven | Hotel Booking Management System",
    description: "Hotel booking management system that allows guests to browse room availability, make reservations online, and manage bookings with ease. Luxe Haven offers real-time booking updates, payment processing, and admin tools for managing rooms, guests, and services—all accessible on multiple devices for a seamless hospitality experience.",
    images: [
      "/images/SS/Luxe_Haven/1.png",
      "/images/SS/Luxe_Haven/2.png",
      "/images/SS/Luxe_Haven/3.png",
      "/images/SS/Luxe_Haven/4.png",
    ],
    slug: "project-12",
    content: "",
    avatars: [],
    link: "/projects/Luxe_Haven",
  },
  {
    title: "EcoTrack Vision | Environmental Monitoring System",
    description: "Environmental monitoring system designed to track waste bins, temperature, and other environmental factors in real time. EcoTrack Vision provides automated alerts, data logging, and analytics through a user-friendly platform accessible on multiple devices, helping organizations improve sustainability and operational efficiency.",
    images: [
      "/images/SS/EcoTrack_Vision/1.png",
      "/images/SS/EcoTrack_Vision/2.png",
    ],
    slug: "project-13",
    content: "",
    avatars: [],
    link: "/projects/EcoTrack_Vision",
  },
  {
    title: "Barangay Funding System",
    description: "Designed for barangay treasurers, captains, and admins, this system tracks and monitors barangay funds, including income and expenses. It offers real-time updates, transparent reporting, and easy access to financial data, helping ensure efficient and accountable management of public resources across multiple devices.",
    images: [
      "/images/SS/Funding_System/1.png",
      "/images/SS/Funding_System/2.png",
      "/images/SS/Funding_System/3.png",
      "/images/SS/Funding_System/4.png",
    ],
    slug: "project-14",
    content: "",
    avatars: [],
    link: "/projects/Funding_System",
  },
];

export function Projects({ range }: ProjectsProps) {
  // You can edit the title, description, and images for each card in the editableProjects array above
  return (
    <Column fillWidth gap="xl" marginBottom="12" paddingX="l">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ margin: 0, fontSize: "2.5rem", fontWeight: 700 }}>
          Projects Overview
        </h1>
        <p style={{ margin: 0, fontSize: "1.25rem", color: "#666" }}>
          From concept to deployment, these projects reflect my commitment <br />
          to clean architecture, performance, and seamless UI/UX.
        </p>
      </div>
      {editableProjects.map((project, index) => (
        <ProjectCard
          priority={index < 2}
          key={project.slug}
          href={"/projects"}
          images={project.images}
          title={project.title}
          description={project.description}
          content={project.content}
          avatars={project.avatars}
          link={project.link}
        />
      ))}
    </Column>
  );
}
