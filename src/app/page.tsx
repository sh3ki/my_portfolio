import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Meta, Schema, Icon } from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL, routes } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
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
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>

      {/* What I Do Section */}
      <RevealFx translateY="24" delay={0.7}>
        <Column gap="l" align="center" fillWidth style={{ background: "var(--surface-alpha-weak)", borderRadius: "1.5rem" }}>
          <Heading as="h2" variant="display-strong-m" align="center" style={{ letterSpacing: "-0.01em" }}>
            What I Do
          </Heading>
          <Flex gap="40" wrap horizontal="center" style={{ width: "100%", maxWidth: 900, flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* Web Applications */}
            <Column align="center" gap="s" style={{ minWidth: 180, maxWidth: 220, flex: '1 1 30%' }}>
              <Flex horizontal="center">
                <Icon name="web" size="xl" color="accent" style={{ background: "rgba(60, 137, 238, 0.12)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
              </Flex>
              <Heading as="h3" variant="heading-strong-s" align="center">Web Applications</Heading>
              <Text align="center" variant="body-default-m" onBackground="neutral-medium">
                Modern, scalable, and performant web apps tailored to your business needs.
              </Text>
            </Column>
            {/* Mobile Applications */}
            <Column align="center" gap="s" style={{ minWidth: 180, maxWidth: 220, flex: '1 1 30%' }}>
              <Flex horizontal="center">
                <Icon name="rocket" size="xl" color="success" style={{ background: "rgba(255, 80, 180, 0.12)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
              </Flex>
              <Heading as="h3" variant="heading-strong-s" align="center">Mobile Applications</Heading>
              <Text align="center" variant="body-default-m" onBackground="neutral-medium">
                Cross-platform mobile apps with seamless user experiences and native performance.
              </Text>
            </Column>
            {/* API Development */}
            <Column align="center" gap="s" style={{ minWidth: 180, maxWidth: 220, flex: '1 1 30%' }}>
              <Flex horizontal="center">
                <Icon name="chain" size="xl" color="warning" style={{ background: "rgba(255, 180, 60, 0.12)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
              </Flex>
              <Heading as="h3" variant="heading-strong-s" align="center">API Development</Heading>
              <Text align="center" variant="body-default-m" onBackground="neutral-medium">
                Robust, secure, and scalable APIs to power your applications and integrations.
              </Text>
            </Column>
            {/* UI/UX Design */}
            <Column align="center" gap="s" style={{ minWidth: 180, maxWidth: 220, flex: '1 1 30%' }}>
              <Flex horizontal="center">
                <Icon name="brush" size="xl" color="danger" style={{ background: "rgba(243, 73, 73, 0.14)", borderRadius: 12, padding: 12, marginBottom: 8 }} />
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
                  style={{ background: "rgba(120, 80, 255, 0.14)", borderRadius: 12, padding: 12, marginBottom: 8 }}
                />
              </Flex>
              <Heading as="h3" variant="heading-strong-s" align="center">DevOps & Deployment</Heading>
              <Text align="center" variant="body-default-m" onBackground="neutral-medium">
                Automated CI/CD, cloud deployment, and infrastructure for reliable delivery.
              </Text>
            </Column>
          </Flex>
        </Column>
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}
      <Projects range={[2]} />
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
