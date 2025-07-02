"use client";
import React, { useState } from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Meta, Schema, Icon, SmartLink } from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL, routes } from "@/resources";
import { Mailchimp, ProjectCard } from "@/components";

export default function Home() {
  // Carousel projects data (mimic Projects style)
  const carouselProjects = [
    {
      slug: "fredos-grilling-main",
      metadata: {
        images: [
          "/images/SS/Fredos_Grilling/1.png",
          "/images/SS/Fredos_Grilling/6.png",
          "/images/SS/Fredos_Grilling/2.png",
          "/images/SS/PUP_AACCUP/1.png",
          "/images/SS/Luxe_Haven/1.png",
          "/images/SS/VaxGuard_Pro/5.png",
          "/images/SS/Ronalds_Cuisine/1.png",
          "/images/SS/Protech/3.png",
          "/images/SS/Appoint2Day/2.png",
          "/images/SS/Pokedex/1.png",
          "/images/SS/EcoTrack_Vision/2.png",
          "/images/SS/Premio/2.png",
          "/images/SS/EduManage/2.png",
          "/images/SS/SecureAuth/3.png",
          "/images/SS/SmileCare/2.png",
        ],
        title: "My Sample Projects",
        summary: "A showcase of creative layouts, design systems, and visual branding developed across various brands and initiatives. These samples reflect my design thinking, attention to detail, and ability to bring ideas to life through thoughtful execution.",
        team: [],
        link: "/work", // <-- set the link to /work
        publishedAt: "2024-01-01",
      },
      content: "",
    },
  ];
  const [currentProject, setCurrentProject] = useState(0);

  const prevProject = () => setCurrentProject((prev) => (prev === 0 ? carouselProjects.length - 1 : prev - 1));
  const nextProject = () => setCurrentProject((prev) => (prev === carouselProjects.length - 1 ? 0 : prev + 1));

  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      {/* Add global style for icon animation */}
      <style jsx global>{`
        .animated-icon {
          animation: icon-float 2.5s ease-in-out infinite alternate;
          will-change: transform;
        }
        @keyframes icon-float {
          0% {
            transform: translateY(0) scale(1);
            filter: drop-shadow(0 2px 8px rgba(0,0,0,0.04));
          }
          50% {
            transform: translateY(-8px) scale(1.05);
            filter: drop-shadow(0 8px 16px rgba(0,0,0,0.08));
          }
          100% {
            transform: translateY(0) scale(1);
            filter: drop-shadow(0 2px 8px rgba(0,0,0,0.04));
          }
        }
      `}</style>
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          {home.featured.display && (
          <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
            <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
              href={home.featured.href}>
              <Row paddingY="2">{home.featured.title}</Row>
            </Badge>
          </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      {/* Display ProjectCards below the about button */}
      <Column fillWidth gap="20">
          <Heading as="h2" variant="display-strong-m" align="center" style={{ letterSpacing: "-0.01em" }}>
            Project Highlights 
          </Heading>
        {carouselProjects.map((project, idx) => (
          <ProjectCard
            priority={idx === 0}
            key={project.slug}
            href={`work/${project.slug}`}
            images={project.metadata.images}
            title={project.metadata.title}
            description={project.metadata.summary}
            content={project.content}
            avatars={project.metadata.team?.map((member) => ({ src: member.avatar })) || []}
            link={project.metadata.link || "/work"}
          />
        ))}
      </Column>
      {/* What I Do Section */}
      <RevealFx translateY="24" delay={0.7}>
        <Column gap="l" align="center" fillWidth style={{ background: "var(--surface-alpha-weak)", borderRadius: "1.5rem" }}>
          <Heading as="h2" variant="display-strong-m" align="center" style={{ letterSpacing: "-0.01em" }}>
            Services Offered | Capabilities
          </Heading>
          <Flex horizontal="center">
            <Text align="center" variant="body-default-m" onBackground="neutral-medium" style={{ maxWidth: 480 }}>
              Comprehensive development services covering frontend, backend, design, and deployment.
            </Text>
          </Flex>
          <Flex gap="40" wrap horizontal="center" style={{ width: "100%", flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* Web Applications */}
            <Column align="center" gap="s" style={{ minWidth: 180, maxWidth: 220, flex: '1 1 30%' }}>
              <Flex horizontal="center">
                <Icon name="web" size="xl" color="accent" className="animated-icon" style={{ background: "rgba(60, 137, 238, 0.12)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
              </Flex>
              <Heading as="h3" variant="heading-strong-s" align="center">Web Applications</Heading>
              <Text align="center" variant="body-default-m" onBackground="neutral-medium">
                Modern, scalable, and performant web apps tailored to your business needs.
              </Text>
            </Column>
            {/* Mobile Applications */}
            <Column align="center" gap="s" style={{ minWidth: 180, maxWidth: 220, flex: '1 1 30%' }}>
              <Flex horizontal="center">
                <Icon name="mobile" size="xl" color="success" className="animated-icon" style={{ background: "rgba(255, 80, 180, 0.12)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
              </Flex>
              <Heading as="h3" variant="heading-strong-s" align="center">Mobile Applications</Heading>
              <Text align="center" variant="body-default-m" onBackground="neutral-medium">
                Cross-platform mobile apps with seamless user experiences and native performance.
              </Text>
            </Column>
            {/* API Development */}
            <Column align="center" gap="s" style={{ minWidth: 180, maxWidth: 220, flex: '1 1 30%' }}>
              <Flex horizontal="center">
                <Icon name="chain" size="xl" color="warning" className="animated-icon" style={{ background: "rgba(255, 180, 60, 0.12)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
              </Flex>
              <Heading as="h3" variant="heading-strong-s" align="center">API Development</Heading>
              <Text align="center" variant="body-default-m" onBackground="neutral-medium">
                Robust, secure, and scalable APIs to power your applications and integrations.
              </Text>
            </Column>
            </Flex>
            <Flex gap="40" wrap horizontal="center" style={{ width: "100%", flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* UI/UX Design */}
            <Column align="center" gap="s" style={{ minWidth: 180, maxWidth: 220, flex: '1 1 30%' }}>
              <Flex horizontal="center">
                <Icon name="brush" size="xl" color="danger" className="animated-icon" style={{ background: "rgba(243, 73, 73, 0.14)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
              </Flex>
              <Heading as="h3" variant="heading-strong-s" align="center">UI/UX Design</Heading>
              <Text align="center" variant="body-default-m" onBackground="neutral-medium">
                Intuitive, beautiful interfaces focused on usability and delightful experiences.
              </Text>
            </Column>
            {/* Database Design & Management */}
            <Column align="center" gap="s" style={{ minWidth: 180, maxWidth: 220, flex: '1 1 30%' }}>
              <Flex horizontal="center">
                <Icon
                  name="storage"
                  size="xl"
                  color="info"
                  className="animated-icon"
                  style={{ background: "rgba(0, 200, 120, 0.12)", borderRadius: 12, padding: 12, marginBottom: 8 }}
                />
              </Flex>
              <Heading as="h3" variant="heading-strong-s" align="center">Database Design & Management</Heading>
              <Text align="center" variant="body-default-m" onBackground="neutral-medium">
                Efficient, reliable data models and management for scalable applications.
              </Text>
            </Column>
            {/* DevOps & Deployment */}
            <Column align="center" gap="s" style={{ minWidth: 180, maxWidth: 220, flex: '1 1 30%' }}>
              <Flex horizontal="center">
                <Icon
                  name="cloud"
                  size="xl"
                  color="success"
                  className="animated-icon"
                  style={{ background: "rgba(120, 80, 255, 0.14)", borderRadius: 12, padding: 12, marginBottom: 8 }}
                />
              </Flex>
              <Heading as="h3" variant="heading-strong-s" align="center">DevOps & Deployment</Heading>
              <Text align="center" variant="body-default-m" onBackground="neutral-medium">
                Automated CI/CD, cloud deployment, and infrastructure for reliable delivery.
              </Text>
            </Column>
          </Flex>
          {/* Add right-aligned Services Offered link */}
          <Flex fillWidth horizontal="end" paddingRight="xl">
            <SmartLink
              suffixIcon="arrowRight"
              style={{ margin: "0", width: "fit-content" }}
              href="/blog"
            >
              <Text variant="body-default-s">Services Offered </Text>
            </SmartLink>
          </Flex>
        </Column>
      </RevealFx>
      {/* --- Tools & Technologies Section --- */}
      <RevealFx translateY="24" delay={0.8}>
        <Column gap="l" align="center" fillWidth style={{ background: "var(--surface-alpha-weak)", borderRadius: "1.5rem" }}>
          <Heading as="h2" variant="display-strong-m" align="center" style={{ letterSpacing: "-0.01em" }}>
            Tools & Technologies | Expertise
          </Heading>
          <Flex horizontal="center">
            <Text align="center" variant="body-default-m" onBackground="neutral-medium" style={{ maxWidth: 480 }}>
              Equipped with the latest tools to build innovative, efficient, and scalable applications.
            </Text>
          </Flex>
          <Flex fillWidth horizontal="center" style={{ width: "100%" }}>
            <Column fillWidth>
              <Flex
                as="ul"
                wrap
                gap="40"
                horizontal="center"
                style={{
                  width: "100%",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  padding: "24px 0 8px 0",
                  listStyle: "none",
                }}
              >
                {/* Frontend */}
                <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                  <Flex horizontal="center">
                    <Icon name="react" size="xl" color="info" className="animated-icon" style={{ background: "rgba(0, 200, 255, 0.18)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                  </Flex>
                  <Heading as="h3" variant="heading-strong-s" align="center">React.js</Heading>
                </Column>
                <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                  <Flex horizontal="center">
                    <Icon
                      name="nextjs"
                      size="xl"
                      color="neutral"
                      className="animated-icon"
                      style={{ background: "rgba(160, 120, 255, 0.18)", borderRadius: 12, padding: 12, marginBottom: 8 }}
                    />
                  </Flex>
                  <Heading as="h3" variant="heading-strong-s" align="center">Next.js</Heading>
                </Column>
                <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                  <Flex horizontal="center">
                    <Icon name="html5" size="xl" color="warning" className="animated-icon" style={{ background: "rgba(255, 120, 60, 0.16)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                  </Flex>
                  <Heading as="h3" variant="heading-strong-s" align="center">HTML5</Heading>
                </Column>
                <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                  <Flex horizontal="center">
                    <Icon name="css3" size="xl" color="info" className="animated-icon" style={{ background: "rgba(60, 137, 238, 0.18)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                  </Flex>
                  <Heading as="h3" variant="heading-strong-s" align="center">CSS3</Heading>
                </Column>
                {/* Backend */}
                <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                  <Flex horizontal="center">
                    <Icon name="django" size="xl" color="success" className="animated-icon" style={{ background: "rgba(0, 180, 120, 0.16)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                  </Flex>
                  <Heading as="h3" variant="heading-strong-s" align="center">Django</Heading>
                </Column>
                <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                  <Flex horizontal="center">
                    <Icon name="laravel" size="xl" color="danger" className="animated-icon" style={{ background: "rgba(243, 73, 73, 0.18)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                  </Flex>
                  <Heading as="h3" variant="heading-strong-s" align="center">Laravel</Heading>
                </Column>
                <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                  <Flex horizontal="center">
                    <Icon name="nodejs" size="xl" color="success" className="animated-icon" style={{ background: "rgba(120, 200, 80, 0.16)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                  </Flex>
                  <Heading as="h3" variant="heading-strong-s" align="center">Node.js</Heading>
                </Column>
                <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                  <Flex horizontal="center">
                    <Icon name="python" size="xl" color="info" className="animated-icon" style={{ background: "rgba(0, 120, 255, 0.16)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                  </Flex>
                  <Heading as="h3" variant="heading-strong-s" align="center">Python</Heading>
                </Column>
                {/* Database */}
                <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                  <Flex horizontal="center">
                    <Icon name="mysql" size="xl" color="warning" className="animated-icon" style={{ background: "rgba(255, 210, 60, 0.16)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                  </Flex>
                  <Heading as="h3" variant="heading-strong-s" align="center">MySQL</Heading>
                </Column>
                <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                  <Flex horizontal="center">
                    <Icon name="postgresql" size="xl" color="info" className="animated-icon" style={{ background: "rgba(60, 80, 238, 0.16)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                  </Flex>
                  <Heading as="h3" variant="heading-strong-s" align="center">PostgreSQL</Heading>
                </Column>
                <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                  <Flex horizontal="center">
                    <Icon name="mongodb" size="xl" color="success" className="animated-icon" style={{ background: "rgba(0, 200, 80, 0.16)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                  </Flex>
                  <Heading as="h3" variant="heading-strong-s" align="center">MongoDB</Heading>
                </Column>
                <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                  <Flex horizontal="center">
                    <Icon name="sqlite" size="xl" color="neutral" className="animated-icon" style={{ background: "rgba(120, 120, 120, 0.16)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                  </Flex>
                  <Heading as="h3" variant="heading-strong-s" align="center">Sqlite</Heading>
                </Column>
              </Flex>
            </Column>
          </Flex>
          <Flex fillWidth horizontal="end" paddingRight="xl">
            <SmartLink
              suffixIcon="arrowRight"
              style={{ margin: "0", width: "fit-content" }}
              href="/tech-stack"
            >
              <Text variant="body-default-s">View all technologies </Text>
            </SmartLink>
          </Flex>
        </Column>
      </RevealFx>
      {/* --- End Tools & Technologies Section --- */}
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          {/* Remove or replace this block: */}
          {/* <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex> */}
        </Flex>
      )}
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}