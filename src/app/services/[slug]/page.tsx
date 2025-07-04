import { notFound } from "next/navigation";
import { CustomMDX, ScrollToHash } from "@/components";
import { Meta, Schema, AvatarGroup, Button, Column, Heading, HeadingNav, Icon, Row, Text } from "@once-ui-system/core";
import { baseURL, about, services, person } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { getPosts } from "@/utils/utils";
import { Metadata } from 'next';

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "services", "posts"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';

  const posts = getPosts(["src", "app", "services", "posts"])
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${services.path}/${post.slug}`,
  });
}

export default async function Services({
  params
}: { params: Promise<{ slug: string | string[] }> }) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug) ? routeParams.slug.join('/') : routeParams.slug || '';

  let post = getPosts(["src", "app", "services", "posts"]).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const avatars = post.metadata.team?.map((person) => ({ src: person.avatar })) || [];

  return (
    <Row fillWidth>
      <Row maxWidth={12} hide="m"/>
      <Row fillWidth horizontal="center">
        {/* ...existing code... */}
      </Row>
      <Column maxWidth={12} paddingLeft="40" fitHeight position="sticky" top="80" gap="16" hide="m">
        <HeadingNav fitHeight/>
      </Column>
    </Row>
  );
}