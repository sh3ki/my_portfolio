
"use client";
  import React, { useState, useRef, useEffect } from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Meta, Schema, Icon, SmartLink, Carousel, AvatarGroup } from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL, routes } from "@/resources";
import { Mailchimp, AutoCarousel } from "@/components";
import styles from "@/components/HomeTechGrid.module.scss";

import ScrollToTopButton from "@/components/ScrollToTopButton";
// --- Add useInView hook ---
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

// --- Add InViewAnimate wrapper ---
function InViewAnimate({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref as any}
      className={inView ? "entrance-float" : ""}
      style={inView ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}

// --- Fix InViewShow: always render children, only animate and show when in view ---
function InViewShow({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref as any}
      className={inView ? "entrance-float" : ""}
      style={{
        visibility: inView ? "visible" : "hidden",
        animationDelay: inView ? `${delay}s` : undefined,
      }}
    >
      {children}
    </div>
  );
}

// --- Fix: type for carouselProjects team ---
// Carousel projects data (mimic Projects style)
const carouselProjects = [
  {
    slug: "fredos-grilling-main",
    metadata: {
      images: [
        "/images/SS/Fredos_Grilling/6.png",
        "/images/SS/Fredos_Grilling/1.png",
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
      team: [] as { avatar: string }[], // <-- typecast to fix TS error
      link: "/projects", // <-- set the link to /projects
      publishedAt: "2024-01-01",
    },
    content: "",
  },
];
export default function Home() {
  const [currentProject, setCurrentProject] = useState(0);

  const prevProject = () => setCurrentProject((prev) => (prev === 0 ? carouselProjects.length - 1 : prev - 1));
  const nextProject = () => setCurrentProject((prev) => (prev === carouselProjects.length - 1 ? 0 : prev + 1));

  return (
    <Column maxWidth="m" gap="xl" paddingY="xl" horizontal="center">
      {/* Add global style for icon and entrance animation */}
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
        .entrance-float {
          opacity: 0;
          transform: translateY(32px) scale(0.98);
          animation: entrance-float-fade 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes entrance-float-fade {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .stat-card {
          background: var(--surface-alpha-weak);
          border-radius: 1.25rem;
          box-shadow: 0 2px 16px 0 rgba(60,137,238,0.06);
          transition: transform 0.18s cubic-bezier(.4,1,.7,1), box-shadow 0.18s cubic-bezier(.4,1,.7,1);
          cursor: pointer;
          border: 1.5px solid var(--neutral-alpha-weak);
          will-change: transform, box-shadow;
        }
        .stat-card:hover, .stat-card:focus-visible {
          transform: translateY(-6px) scale(1.035);
          box-shadow: 0 8px 32px 0 rgba(60,137,238,0.13);
          border-color: var(--brand-alpha-weak);
        }
        .stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--brand-alpha-weak);
          width: 3.5rem;
          height: 3.5rem;
          margin-bottom: 0.5rem;
        }
        .stat-value {
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--brand-on-background-strong);
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .stat-label {
          font-size: 1rem;
          color: var(--neutral-on-background-medium);
          margin-top: 0.25rem;
          font-weight: 500;
          letter-spacing: 0.01em;
        }

        /* --- New hover effect for quick stats cards --- */
        .stat-card-rect {
          transition: transform 0.18s cubic-bezier(.4,1,.7,1);
        }
        .stat-card-rect:hover,
        .stat-card-rect:focus-visible {
          transform: scale(1.06);
          z-index: 1;
        }

        /* --- About button permanent styling with zoom hover --- */
        .about-button {
          border: 1.5px solid var(--brand-alpha-medium) !important;
          box-shadow: 0 4px 16px 0 rgba(60,137,238,0.12) !important;
          background: var(--brand-alpha-weak) !important;
          transition: transform 0.2s cubic-bezier(.4,1,.7,1) !important;
        }
        .about-button:hover,
        .about-button:focus-visible {
          transform: scale(1.08) !important;
          box-shadow: 0 6px 24px 0 rgba(60,137,238,0.18) !important;
        }
        /* --- Make arrow icon always visible --- */
        .about-button .arrow-icon {
          opacity: 1 !important;
          visibility: visible !important;
          display: inline-flex !important;
        }
      `}</style>
      {/* --- Animate and only display when in view --- */}
      <InViewShow>
        <Column fillWidth paddingY="24" gap="m">
          <Column maxWidth="s">
            {home.featured.display && (
              <InViewShow>
                <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
                  <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
                    href={home.featured.href}>
                    <Row paddingY="2">{home.featured.title}</Row>
                  </Badge>
                </RevealFx>
              </InViewShow>
            )}
            <InViewShow delay={0.05}>
              <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
                <Heading wrap="balance" variant="display-strong-l">
                  {home.headline}
                </Heading>
              </RevealFx>
            </InViewShow>
            <InViewShow delay={0.1}>
              <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
                <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
                  {home.subline}
                </Text>
              </RevealFx>
            </InViewShow>
            <InViewShow delay={0.15}>
              <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
                <Button
                  id="about"
                  data-border="rounded"
                  href={about.path}
                  variant="secondary"
                  size="m"
                  weight="default"
                  arrowIcon
                  className="about-button"
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
            </InViewShow>
          </Column>
        </Column>
      </InViewShow>
      {/* --- Project Highlights Section --- */}
      <InViewShow delay={0.18}>
        <RevealFx translateY="8" delay={0} fillWidth horizontal="center" paddingBottom="0">
          <Column fillWidth gap="20">
            <InViewShow>
              <Heading
                as="h2"
                variant="display-strong-m"
                align="center"
                style={{ letterSpacing: "-0.01em" }}
              >
                Project Highlights 
              </Heading>
            </InViewShow>
            {carouselProjects.map((project, idx) => (
              <InViewShow key={project.slug} delay={0.1 + idx * 0.1}>
                {/* --- Begin inlined ProjectCard --- */}
                <Column fillWidth gap="m">
                  <AutoCarousel
                    sizes="(max-width: 960px) 100vw, 960px"
                    items={project.metadata.images.map((image) => ({
                      slide: image,
                      alt: project.metadata.title,
                    }))}
                    autoSlideInterval={2000}
                  />
                  <Flex
                    mobileDirection="column"
                    fillWidth
                    paddingX="s"
                    paddingTop="12"
                    paddingBottom="24"
                    gap="l"
                  >
                    {project.metadata.title && (
                      <Flex flex={5}>
                        <Heading as="h2" wrap="balance" variant="heading-strong-xl">
                          {project.metadata.title}
                        </Heading>
                      </Flex>
                    )}
                    {(project.metadata.team?.length > 0 || project.metadata.summary?.trim() || project.content?.trim()) && (
                      <Column flex={7} gap="16">
                        {project.metadata.team?.length > 0 && (
                          <AvatarGroup avatars={project.metadata.team.map((member) => ({ src: member.avatar }))} size="m" reverse />
                        )}
                        {project.metadata.summary?.trim() && (
                          <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                            {project.metadata.summary}
                          </Text>
                        )}
                        <Flex gap="24" wrap>
                          {project.content?.trim() && (
                            <SmartLink
                              suffixIcon="arrowRight"
                              style={{ margin: "0", width: "fit-content" }}
                              href={`work/${project.slug}`}
                            >
                              <Text variant="body-default-s"></Text>
                            </SmartLink>
                          )}
                          {project.metadata.link && (
                            <SmartLink
                              suffixIcon="arrowRight"
                              style={{ margin: "0", width: "fit-content" }}
                              href={project.metadata.link}
                            >
                              <Text variant="body-default-s">View all projects</Text>
                            </SmartLink>
                          )}
                        </Flex>
                      </Column>
                    )}
                  </Flex>
                </Column>
                {/* --- End inlined ProjectCard --- */}
              </InViewShow>
            ))}
          </Column>
        </RevealFx>
      </InViewShow>
      {/* --- Quick Stats Section --- */}
      <InViewShow>
        <Flex
          gap="32"
          horizontal="center"
          wrap
          fillWidth
          style={{
            margin: "32px 0 0 0",
            justifyContent: "center",
          }}
        >
          {/* Shared stat card style for all cards */}
          <InViewShow delay={0.01}>
            <div
              className="stat-card-rect entrance-float"
              tabIndex={0}
              style={{
                background: "linear-gradient(90deg, #e0e7ff 0%, #f0f7ff 100%)",
                border: "1.5px solid #b6c3e6",
                minWidth: 220,
                maxWidth: 300,
                padding: "1.5rem 2rem",
                display: "flex",
                alignItems: "center",
                boxShadow: "0 2px 16px 0 rgba(60,137,238,0.08)",
                borderRadius: "1.25rem",
                margin: "0.5rem 0",
                flex: "1 1 0",
                height: 120,
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #6366f1 60%, #60a5fa 100%)",
                  borderRadius: "1rem",
                  width: 64,
                  height: 64,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 24,
                  boxShadow: "0 4px 16px 0 rgba(99,102,241,0.12)",
                }}
              >
                <Icon name="experience" size="l" color="neutralOnBrand" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: "2.2rem", color: "#3730a3", letterSpacing: "-0.02em" }}>2+</div>
                <div style={{ fontWeight: 600, fontSize: "1.1rem", color: "#6366f1", marginTop: 2 }}>Years Experience</div>
              </div>
            </div>
          </InViewShow>
          <InViewShow delay={0.06}>
            <div
              className="stat-card-rect entrance-float"
              tabIndex={0}
              style={{
                background: "linear-gradient(90deg, #fef9c3 0%, #fce7f3 100%)",
                border: "1.5px solid #fcd34d",
                minWidth: 220,
                maxWidth: 300,
                padding: "1.5rem 2rem",
                display: "flex",
                alignItems: "center",
                boxShadow: "0 2px 16px 0 rgba(253,224,71,0.08)",
                borderRadius: "1.25rem",
                margin: "0.5rem 0",
                flex: "1 1 0",
                height: 120,
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #f59e42 60%, #fbbf24 100%)",
                  borderRadius: "1rem",
                  width: 64,
                  height: 64,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 24,
                  boxShadow: "0 4px 16px 0 rgba(251,191,36,0.12)",
                }}
              >
                <Icon name="projects" size="l" color="neutralOnBrand" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: "2.2rem", color: "#b45309", letterSpacing: "-0.02em" }}>30+</div>
                <div style={{ fontWeight: 600, fontSize: "1.1rem", color: "#f59e42", marginTop: 2 }}>Completed Projects</div>
              </div>
            </div>
          </InViewShow>
          <InViewShow delay={0.11}>
            <div
              className="stat-card-rect entrance-float"
              tabIndex={0}
              style={{
                background: "linear-gradient(90deg, #d1fae5 0%, #e0f2fe 100%)",
                border: "1.5px solid #6ee7b7",
                minWidth: 220,
                maxWidth: 300,
                padding: "1.5rem 2rem",
                display: "flex",
                alignItems: "center",
                boxShadow: "0 2px 16px 0 rgba(16,185,129,0.08)",
                borderRadius: "1.25rem",
                margin: "0.5rem 0",
                flex: "1 1 0",
                height: 120,
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #10b981 60%, #38bdf8 100%)",
                  borderRadius: "1rem",
                  width: 64,
                  height: 64,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 24,
                  boxShadow: "0 4px 16px 0 rgba(16,185,129,0.12)",
                }}
              >
                <Icon name="tools" size="l" color="neutralOnBrand" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: "2.2rem", color: "#047857", letterSpacing: "-0.02em" }}>40+</div>
                <div style={{ fontWeight: 600, fontSize: "1.1rem", color: "#10b981", marginTop: 2 }}>Tools & Technologies</div>
              </div>
            </div>
          </InViewShow>
        </Flex>
      </InViewShow>
      {/* --- End Quick Stats Section --- */}
      {/* --- What I Do Section --- */}
      <InViewShow>
        <RevealFx translateY="24" delay={0.7}>
          <Column gap="l" align="center" fillWidth style={{ background: "var(--surface-alpha-weak)", borderRadius: "1.5rem" }}>
            <InViewShow>
              <Heading as="h2" variant="display-strong-m" align="center" style={{ letterSpacing: "-0.01em" }}>
                Services Offered | Capabilities
              </Heading>
            </InViewShow>
            <InViewShow delay={0.05}>
              <Flex horizontal="center">
                <Text align="center" variant="body-default-m" onBackground="neutral-medium" style={{ maxWidth: 480 }}>
                  Comprehensive development services covering frontend, backend, design, and deployment.
                </Text>
              </Flex>
            </InViewShow>
            <Flex gap="40" wrap horizontal="center" style={{ width: "100%", flexWrap: 'wrap', justifyContent: 'center' }}>
              {/* Web Applications */}
              <InViewShow delay={0.1}>
                <Column align="center" gap="s" style={{ minWidth: 180, maxWidth: 220, flex: '1 1 30%' }}>
                  <Flex horizontal="center">
                    <Icon name="web" size="xl" color="accent" className="animated-icon" style={{ background: "rgba(60, 137, 238, 0.12)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                  </Flex>
                  <Heading as="h3" variant="heading-strong-s" align="center">Web Applications</Heading>
                  <Text align="center" variant="body-default-m" onBackground="neutral-medium">
                    Modern, scalable, and performant web apps tailored to your business needs.
                  </Text>
                </Column>
              </InViewShow>
              {/* Mobile Applications */}
              <InViewShow delay={0.15}>
                <Column align="center" gap="s" style={{ minWidth: 180, maxWidth: 220, flex: '1 1 30%' }}>
                  <Flex horizontal="center">
                    <Icon name="mobile" size="xl" color="success" className="animated-icon" style={{ background: "rgba(255, 80, 180, 0.12)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                  </Flex>
                  <Heading as="h3" variant="heading-strong-s" align="center">Mobile Applications</Heading>
                  <Text align="center" variant="body-default-m" onBackground="neutral-medium">
                    Cross-platform mobile apps with seamless user experiences and native performance.
                  </Text>
                </Column>
              </InViewShow>
              {/* API Development */}
              <InViewShow delay={0.2}>
                <Column align="center" gap="s" style={{ minWidth: 180, maxWidth: 220, flex: '1 1 30%' }}>
                  <Flex horizontal="center">
                    <Icon name="chain" size="xl" color="warning" className="animated-icon" style={{ background: "rgba(255, 180, 60, 0.12)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                  </Flex>
                  <Heading as="h3" variant="heading-strong-s" align="center">API Development</Heading>
                  <Text align="center" variant="body-default-m" onBackground="neutral-medium">
                    Robust, secure, and scalable APIs to power your applications and integrations.
                  </Text>
                </Column>
              </InViewShow>
            </Flex>
            <Flex gap="40" wrap horizontal="center" style={{ width: "100%", flexWrap: 'wrap', justifyContent: 'center' }}>
              {/* UI/UX Design */}
              <InViewShow delay={0.25}>
                <Column align="center" gap="s" style={{ minWidth: 180, maxWidth: 220, flex: '1 1 30%' }}>
                  <Flex horizontal="center">
                    <Icon name="brush" size="xl" color="danger" className="animated-icon" style={{ background: "rgba(243, 73, 73, 0.14)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                  </Flex>
                  <Heading as="h3" variant="heading-strong-s" align="center">UI/UX Design</Heading>
                  <Text align="center" variant="body-default-m" onBackground="neutral-medium">
                    Intuitive, beautiful interfaces focused on usability and delightful experiences.
                  </Text>
                </Column>
              </InViewShow>
              {/* Database Design & Management */}
              <InViewShow delay={0.3}>
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
              </InViewShow>
              {/* DevOps & Deployment */}
              <InViewShow delay={0.35}>
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
              </InViewShow>
            </Flex>
            <InViewShow delay={0.4}>
              <Flex fillWidth horizontal="end" paddingRight="xl">
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href="/services"
                >
                  <Text variant="body-default-s">Services Offered </Text>
                </SmartLink>
              </Flex>
            </InViewShow>
          </Column>
        </RevealFx>
      </InViewShow>
      {/* --- Tools & Technologies Section --- */}
      <InViewShow>
        <RevealFx translateY="24" delay={0.8}>
          <Column gap="l" align="center" fillWidth style={{ background: "var(--surface-alpha-weak)", borderRadius: "1.5rem" }}>
            <InViewShow>
              <Heading as="h2" variant="display-strong-m" align="center" style={{ letterSpacing: "-0.01em" }}>
                Technologies & Tools | Expertise
              </Heading>
            </InViewShow>
            <InViewShow delay={0.05}>
              <Flex horizontal="center">
                <Text align="center" variant="body-default-m" onBackground="neutral-medium" style={{ maxWidth: 480 }}>
                  Equipped with the latest tools to build innovative, efficient, and scalable applications.
                </Text>
              </Flex>
            </InViewShow>
            <InViewShow delay={0.1}>
              <Flex fillWidth horizontal="center" style={{ width: "100%" }}>
                <Column fillWidth>
                  <Flex
                    as="ul"
                    wrap
                    gap="40"
                    horizontal="center"
                    className={styles.techGridHome}
                    style={{
                      width: "100%",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      padding: "24px 0 8px 0",
                      listStyle: "none",
                    }}
                  >
                    {/* Frontend */}
                    <InViewShow delay={0.15}>
                      <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                        <Flex horizontal="center">
                          <Icon name="react" size="xl" color="info" className="animated-icon" style={{ background: "rgba(0, 200, 255, 0.18)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                        </Flex>
                        <Heading as="h3" variant="heading-strong-s" align="center">React.js</Heading>
                      </Column>
                    </InViewShow>
                    <InViewShow delay={0.18}>
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
                    </InViewShow>
                    <InViewShow delay={0.21}>
                      <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                        <Flex horizontal="center">
                          <Icon name="html5" size="xl" color="warning" className="animated-icon" style={{ background: "rgba(255, 120, 60, 0.16)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                        </Flex>
                        <Heading as="h3" variant="heading-strong-s" align="center">HTML5</Heading>
                      </Column>
                    </InViewShow>
                    <InViewShow delay={0.24}>
                      <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                        <Flex horizontal="center">
                          <Icon name="css3" size="xl" color="info" className="animated-icon" style={{ background: "rgba(60, 137, 238, 0.18)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                        </Flex>
                        <Heading as="h3" variant="heading-strong-s" align="center">CSS3</Heading>
                      </Column>
                    </InViewShow>
                    {/* Backend */}
                    <InViewShow delay={0.27}>
                      <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                        <Flex horizontal="center">
                          <Icon name="django" size="xl" color="success" className="animated-icon" style={{ background: "rgba(0, 180, 120, 0.16)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                        </Flex>
                        <Heading as="h3" variant="heading-strong-s" align="center">Django</Heading>
                      </Column>
                    </InViewShow>
                    <InViewShow delay={0.3}>
                      <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                        <Flex horizontal="center">
                          <Icon name="laravel" size="xl" color="danger" className="animated-icon" style={{ background: "rgba(243, 73, 73, 0.18)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                        </Flex>
                        <Heading as="h3" variant="heading-strong-s" align="center">Laravel</Heading>
                      </Column>
                    </InViewShow>
                    <InViewShow delay={0.33}>
                      <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                        <Flex horizontal="center">
                          <Icon name="nodejs" size="xl" color="success" className="animated-icon" style={{ background: "rgba(120, 200, 80, 0.16)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                        </Flex>
                        <Heading as="h3" variant="heading-strong-s" align="center">Node.js</Heading>
                      </Column>
                    </InViewShow>
                    <InViewShow delay={0.36}>
                      <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                        <Flex horizontal="center">
                          <Icon name="python" size="xl" color="info" className="animated-icon" style={{ background: "rgba(0, 120, 255, 0.16)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                        </Flex>
                        <Heading as="h3" variant="heading-strong-s" align="center">Python</Heading>
                      </Column>
                    </InViewShow>
                    {/* Database */}
                    <InViewShow delay={0.39}>
                      <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                        <Flex horizontal="center">
                          <Icon name="mysql" size="xl" color="warning" className="animated-icon" style={{ background: "rgba(255, 210, 60, 0.16)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                        </Flex>
                        <Heading as="h3" variant="heading-strong-s" align="center">MySQL</Heading>
                      </Column>
                    </InViewShow>
                    <InViewShow delay={0.42}>
                      <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                        <Flex horizontal="center">
                          <Icon name="postgresql" size="xl" color="info" className="animated-icon" style={{ background: "rgba(60, 80, 238, 0.16)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                        </Flex>
                        <Heading as="h3" variant="heading-strong-s" align="center">PostgreSQL</Heading>
                      </Column>
                    </InViewShow>
                    <InViewShow delay={0.45}>
                      <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                        <Flex horizontal="center">
                          <Icon name="mongodb" size="xl" color="success" className="animated-icon" style={{ background: "rgba(0, 200, 80, 0.16)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                        </Flex>
                        <Heading as="h3" variant="heading-strong-s" align="center">MongoDB</Heading>
                      </Column>
                    </InViewShow>
                    <InViewShow delay={0.48}>
                      <Column align="center" gap="xs" style={{ minWidth: 180, maxWidth: 220, flex: "1 1 22%" }}>
                        <Flex horizontal="center">
                          <Icon name="sqlite" size="xl" color="neutral" className="animated-icon" style={{ background: "rgba(120, 120, 120, 0.16)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
                        </Flex>
                        <Heading as="h3" variant="heading-strong-s" align="center">Sqlite</Heading>
                      </Column>
                    </InViewShow>
                  </Flex>
                </Column>
              </Flex>
            </InViewShow>
            <InViewShow delay={0.5}>
              <Flex fillWidth horizontal="end" paddingRight="xl">
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href="/technologies"
                >
                  <Text variant="body-default-s">View all technologies </Text>
                </SmartLink>
              </Flex>
            </InViewShow>
          </Column>
        </RevealFx>
      </InViewShow>
      {/* --- End Tools & Technologies Section --- */}
      {/* --- Client Testimonials Section --- */}
      <InViewShow>
        <RevealFx translateY="24" delay={0.9}>
          <Column gap="l" align="center" fillWidth style={{ background: "var(--surface-alpha-weak)", borderRadius: "1.5rem", padding: '2.5rem 0 2rem 0' }}>
            <InViewShow>
              <Heading as="h2" variant="display-strong-m" align="center" style={{ letterSpacing: "-0.01em" }}>
                Client Testimonials
              </Heading>
            </InViewShow>
            <InViewShow delay={0.05}>
              <Flex horizontal="center">
                <Text align="center" variant="body-default-m" onBackground="neutral-medium" style={{ maxWidth: 540 }}>
                  Real feedback from people I've had the privilege to work with. These testimonials reflect the quality, dedication, and passion I bring to every project.
                </Text>
              </Flex>
            </InViewShow>
            <InViewShow delay={0.1}>
              <div
                className="testimonial-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '2rem',
                  width: '100%',
                  maxWidth: 1100,
                  margin: '0 auto',
                  padding: '1.5rem 0.5rem 0 0.5rem',
                }}
              >
                { [
                  {
                    message:
                      "Salamat po sir sa maganda at legit na transaction. Irecommend ko po kayo if may magpapagawa na ibang system.",
                    name: "Jerwin D.",
                  },
                  {
                    message:
                      "Creative and fast. Sobrang ganda ng UI at madali kausap. Salamat!",
                    name: "Katrina S.",
                  },
                  {
                    message: "Thank you po sir kasi nagawa nyo po on time.",
                    name: "Reuben L.",
                  },
                  {
                    message:
                      "Professional, skilled, and super easy to work with. Will work with you again.",
                    name: "Hannah C.",
                  },
                  {
                    message:
                      "Highly recommended. Maayos kausap at mabilis kumilos. Ayos ang gawa.",
                    name: "Leo M.",
                  },
                  {
                    message:
                      "Solid dev. Tinulungan ako kahit tapos na yung project. Salamat ulit!",
                    name: "Angelica T.",
                  },
                  {
                    message:
                      "Napaka-approachable niya and marunong makinig sa gusto mo sa project. Super galing gumawa.",
                    name: "Marvin J.",
                  },
                  {
                    message:
                      "Walang hassle kausap si sir, at pulido ang gawa. Legit.",
                    name: "Camille R.",
                  },
                ].map((testimonial, idx) => (
                  <InViewShow key={testimonial.name + idx} delay={0.12 + idx * 0.04}>
                    <div
                      className="testimonial-card entrance-float"
                      tabIndex={0}
                      style={{
                        background: "linear-gradient(135deg, var(--surface-alpha-strong) 80%, var(--brand-alpha-weak) 100%)",
                        border: "1.5px solid var(--neutral-alpha-weak)",
                        borderRadius: "1.25rem",
                        boxShadow: "0 2px 16px 0 rgba(60,137,238,0.07)",
                        padding: "2.2rem 1.5rem 1.5rem 1.5rem",
                        minHeight: 180,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        position: 'relative',
                        transition: "transform 0.18s cubic-bezier(.4,1,.7,1), box-shadow 0.18s cubic-bezier(.4,1,.7,1)",
                        cursor: 'pointer',
                        outline: 'none',
                      }}
                    >
                      <span style={{
                        position: 'absolute',
                        top: 24,
                        left: 24,
                        fontSize: 36,
                        color: 'var(--brand-400)',
                        opacity: 0.18,
                        pointerEvents: 'none',
                        userSelect: 'none',
                        fontWeight: 900,
                        lineHeight: 1,
                      }}>
                        “
                      </span>
                      <Text as="blockquote" variant="body-default-l" style={{ fontStyle: "italic", color: "var(--neutral-on-background-strong)", marginBottom: 18, lineHeight: 1.7, zIndex: 1 }}>
                        {testimonial.message}
                      </Text>
                      <Text as="cite" variant="body-default-m" style={{ fontWeight: 700, color: "var(--brand-600)", letterSpacing: "-0.01em", textAlign: "right", display: "block", marginTop: 8, zIndex: 1 }}>
                        — {testimonial.name}
                      </Text>
                    </div>
                  </InViewShow>
                ))}
              </div>
            </InViewShow>
          </Column>
        </RevealFx>
      </InViewShow>
      {/* --- End Client Testimonials Section --- */}
      {/* --- Newsletter Section --- */}
      {newsletter.display && (
        <InViewShow><Mailchimp newsletter={newsletter} /></InViewShow>
      )}
      <ScrollToTopButton />
    </Column>
  );
}