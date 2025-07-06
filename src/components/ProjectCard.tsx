"use client";

import React from "react";
import { Column, Flex, Heading, SmartLink, Text } from "@once-ui-system/core";
import { AutoCarousel } from "@/components/AutoCarousel";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  return (
    <Column fillWidth gap="m">
      <AutoCarousel
        sizes="(max-width: 960px) 100vw, 960px"
        items={images.map((image) => ({
          slide: image,
          alt: title,
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
        {title && (
          <Flex flex={5}>
            <Heading
              as="h2"
              wrap="balance"
              variant="display-strong-s"
              style={{ fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.5 }}
            >
              {title}
            </Heading>
          </Flex>
        )}
        {(description?.trim() || content?.trim()) && (
          <Column flex={9} gap="12">
            {description?.trim() && (
              <Text
                wrap="balance"
                variant="heading-default-m"
                onBackground="neutral-weak"
                style={{ fontSize: "1.05rem", fontWeight: 500,}}
              >
                {description}
              </Text>
            )}
            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">View Project</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">View projects</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
