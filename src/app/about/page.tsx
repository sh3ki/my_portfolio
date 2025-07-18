import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function About() {
  const structure =  [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.coreStrengths.title,
      display: about.coreStrengths.display,
      items: about.coreStrengths.items.map((item) => item.title),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill, idx) => `Workspace #${idx + 1}`),
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.locationDisplay || person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth data-border="rounded">
                {social.map(
                  (item) =>
                    item.link && (
                        <React.Fragment key={item.name}>
                            <Button
                                className="s-flex-hide"
                                key={item.name}
                                href={item.link}
                                prefixIcon={item.icon}
                                label={item.name}
                                size="s"
                                weight="default"
                                variant="secondary"
                            />
                            <IconButton
                                className="s-flex-show"
                                size="l"
                                key={`${item.name}-icon`}
                                href={item.link}
                                icon={item.icon}
                                variant="secondary"
                            />
                        </React.Fragment>
                    ),
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.coreStrengths.display && (
            <>
              <Heading as="h2" id={about.coreStrengths.title} variant="display-strong-s" marginBottom="m">
                {about.coreStrengths.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="l">
                <Flex wrap gap="24" mobileDirection="column">
                  {about.coreStrengths.items.map((item, idx) => {
                    const iconMap = {
                      BsLayers: 'storage',
                      TbLayoutGridAdd: 'grid',
                      HiOutlineLink: 'openLink',
                      PiFoldersDuotone: 'cloud',
                      FaRocket: 'rocket',
                      RiBug2Line: 'tools',
                      TbDeviceMobileCode: 'mobile',
                    };
                    const iconName = iconMap[item.icon as keyof typeof iconMap] || item.icon;
                    return (
                      <Flex key={item.title} gap="16" vertical="start" style={{ minWidth: 220, flex: 1 }}>
                        <Icon name={iconName} size="l" onBackground="brand-weak" style={{ minWidth: 32 }} />
                        <Column>
                          <Text variant="heading-strong-l">{item.title}</Text>
                          <Text variant="body-default-m" onBackground="neutral-weak">{item.description}</Text>
                        </Column>
                      </Flex>
                    );
                  })}
                </Flex>
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m" marginTop="20">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="xl">
                {about.studies.institutions.map((institution, index) => (
                  <Flex key={`${institution.name}-${index}`} gap="16" vertical="start" style={{ minWidth: 220, flex: 1 }}>
                    <Icon name="school" size="l" onBackground="brand-weak" style={{ minWidth: 32 }} />
                    <Column fillWidth gap="4">
                      <Text id={institution.name} variant="heading-strong-l">
                        {institution.name}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {institution.description}
                      </Text>
                    </Column>
                  </Flex>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="20"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth>
                {about.technical.skills.map((skill, index) => (
                  <Column key={`workspace-${index}`} fillWidth>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.images && skill.images.length > 0 && (
                      <>
                        {/* Add gap above images for cleaner look */}
                        <div style={{ height: 16 }} />
                        <div className={styles.horizontalScrollTechnologies}>
                          <div className={styles.scrollingTrack}>
                            {[...Array(2)].map((_, repeatIdx) => (
                              <React.Fragment key={repeatIdx}>
                                {skill.images.map((image, idx) => (
                                  <Flex
                                    key={repeatIdx + '-' + idx}
                                    className={styles.technologiesImageCard}
                                  >
                                    <Media
                                      enlarge
                                      radius="m"
                                      //@ts-ignore
                                      sizes={image.width.toString()}
                                      //@ts-ignore
                                      alt={image.alt}
                                      //@ts-ignore
                                      src={image.src}
                                    />
                                  </Flex>
                                ))}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                        {/* SECOND INFINITE SCROLLING TECHNOLOGIES */}
                        <div className={styles.horizontalScrollTechnologies2}>
                          <div className={styles.scrollingTrack2}>
                            {[...Array(2)].map((_, repeatIdx) => (
                              <React.Fragment key={repeatIdx}>
                                {[9,10,11,12,13,14,15,16].map((num, idx) => (
                                  <Flex
                                    key={repeatIdx + '-bts2-' + idx}
                                    className={styles.technologiesImageCard2}
                                  >
                                    <Media
                                      enlarge={false}
                                      radius="m"
                                      sizes="220"
                                      alt={`Behind the Scenes ${num}`}
                                      src={`/images/BTS/${num}.jpg`}
                                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem', display: 'block', pointerEvents: 'none' }}
                                    />
                                  </Flex>
                                ))}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Flex>
      <ScrollToTopButton />
    </Column>
  );
}