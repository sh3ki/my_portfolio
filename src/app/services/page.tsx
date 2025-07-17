import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Posts } from "@/components/services/Posts";
import { baseURL, services, person, newsletter } from "@/resources";
import ServiceCard from "@/components/services/ServiceCard";

export async function generateMetadata() {
  return Meta.generate({
    title: services.title,
    description: services.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(services.title)}`,
    path: services.path,
  });
}

export default function Services() {
  return (
    <Column maxWidth="m">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={services.title}
        description={services.description}
        path={services.path}
        image={`/api/og/generate?title=${encodeURIComponent(services.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/services`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <h1 style={{ margin: 0, fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>
          Services Offered
        </h1>
        <p style={{ margin: 0, fontSize: "1.25rem", color: "#666" }}>
          Whether you need a custom web system, a mobile app, or an IoT solution, <br /> I offer end-to-end development tailored to your needs.
        </p>
      </div>
      {/* Service Cards Grid */}
      <div style={{ display: "grid", justifyContent: "center", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2.5rem", marginBottom: "3rem" }}>
        <ServiceCard
          icon="web"
          title="Web Application Development"
          subtitle="Custom web apps tailored to your business."
          description="I build scalable, responsive web applications from scratch—handling both frontend and backend. Expect clean code, modern UI, and robust functionality."
          features={["Full-stack development (React, Next.js, Node.js)", "Admin dashboards, portals, and business systems", "E-commerce & booking systems", "Progressive Web Apps (PWAs)"]}
        />
        <ServiceCard
          icon="mobile"
          title="Mobile Application Development"
          subtitle="Cross-platform mobile apps for Android & iOS."
          description="Using React Native and other tools, I build mobile apps with smooth performance, elegant interfaces, and real-world usability."
          features={["Native-like performance", "Offline support & local data storage", "API-driven features", "App store deployment"]}
        />
        <ServiceCard
          icon="chain"
          title="API Development & Integration"
          subtitle="Connect your systems with secure, scalable APIs."
          description="Whether you're integrating third-party services or building internal tools, I develop reliable APIs and integrate complex systems smoothly."
          features={["RESTful API development", "Payment gateways (Stripe, PayPal)", "Messaging services (Email, SMS)", "External platform integration (Firebase, Twilio)", "Chatbot APIs (Dialogflow, GPT-based bots)"]}
        />
        <ServiceCard
          icon="cpu"
          title="AI & Computer Vision Systems"
          subtitle="Automate tasks and gain insights through smart systems."
          description="With experience in OpenCV and AI libraries, I develop systems that 'see,' interpret, and act—adding intelligence to your software."
          features={["Image/object detection", "OCR (optical character recognition)", "Facial recognition systems", "Custom ML model integrations"]}
        />
        <ServiceCard
          icon="cloud"
          title="Arduino & Internet of Things (IoT) Projects"
          subtitle="Smart systems powered by microcontrollers."
          description="From sensor-based automation to wireless control systems, I build custom IoT and embedded projects using Arduino, ESP32, NodeMCU, and more."
          features={["Sensor and actuator integration (temp, motion, etc.)", "Home automation systems", "Wireless control via Bluetooth/WiFi", "ESP32 web servers and dashboards", "IoT projects with real-time cloud data"]}
        />
        <ServiceCard
          icon="brush"
          title="UI & UX Designs and Prototypes"
          subtitle="Beautiful, intuitive interfaces designed for real users."
          description="Design is a key part of product success. I create clean, user-friendly interfaces that align with both user goals and business needs."
          features={["Wireframes & mockups", "Responsive layouts", "Design systems & component libraries", "Usability-focused redesigns"]}
        />
        <ServiceCard
          icon="storage"
          title="Database Design & Management"
          subtitle="Reliable, optimized data storage solutions."
          description="I design and manage databases that scale with your app, whether you're using SQL or NoSQL solutions."
          features={["Schema design & optimization", "MySQL, PostgreSQL, MongoDB, Firebase", "Cloud data solutions", "Data security best practices"]}
        />
        <ServiceCard
          icon="rocket"
          title="DevOps & Deployment Solutions"
          subtitle="Get your system live—reliably and securely."
          description="I handle everything from codebase to production, using modern tools to ensure your app is easy to deploy and maintain."
          features={["CI/CD pipeline setup", "Dockerized environments", "Cloud deployment (Heroku, Vercel, AWS)", "GitHub Actions & version control", "SSL, domain, and DNS setup"]}
        />
        <ServiceCard
          icon="bug"
          title="Code Review, Debugging & Maintenance"
          subtitle="Keep your codebase healthy and without errors."
          description="Whether you need help tracking down a bug, refactoring messy code, or reviewing a feature—I'm here to help."
          features={["Code reviews with best practices", "Debugging and performance tuning", "Adding new system features", "Refactoring legacy systems"]}
        />
        <ServiceCard
          icon="speed"
          title="System Performance Optimization"
          subtitle="Make your system or app faster, smoother, better."
          description="Slow apps frustrate users and hurt conversions. I analyze your frontend, backend, and database then optimize them for speed, responsiveness, and performance."
          features={[
            "Frontend performance audits (Lighthouse, Web Vitals)",
            "Lazy loading & code splitting",
            "Backend query and API optimization",
            "Database indexing & query tuning",
            "Asset compression & caching strategies",
          ]}
        />
        <ServiceCard
          icon="book"
          title="Capstone & Thesis System Development"
          subtitle="Get support for academic systems and research projects."
          description="I build custom systems for thesis, capstone, or academic research—ensuring functionality, clarity, and presentation-readiness."
          features={["Custom system development (web, mobile, IoT)", "Full documentation", "Presentation materials & walk-throughs", "Technical guidance throughout the process"]}
        />
        <ServiceCard
          icon="service"
          title="Custom Projects & Consultation"
          subtitle="Have a unique idea or a problem to solve? Let's talk."
          description="From one-off tools to full systems, I love collaborating on creative and challenging projects. If you're unsure what tech you need, I can help guide the process."
            features={[
            "Brainstorming and technical planning sessions",
            "Custom tool and system development",
            "Feasibility analysis and prototyping",
            "Tech stack recommendations",
            "Ongoing consultation and support",
          ]}
        />
      </div>
      <Column fillWidth gap="l" flex={1}>
        
      </Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
      <ScrollToTopButton />
    </Column>
  );
}
