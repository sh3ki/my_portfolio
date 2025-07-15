"use client";

import { useState, useEffect } from "react";
import { Column, Flex, Heading, Text } from "@once-ui-system/core";
import { iconLibrary, IconName } from "@/resources/icons";
import styles from "./ServiceCard.module.scss";

interface ServiceCardProps {
  icon: IconName;
  title: string;
  subtitle: string;
  description: string;
  features?: string[];
}

export default function ServiceCard({ 
  icon, 
  title, 
  subtitle, 
  description, 
  features
}: ServiceCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const Icon = iconLibrary[icon] || iconLibrary["service"];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setFlipped(false);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setFlipped(!flipped);
    }
  };

  return (
    <div
      className={styles.card + (flipped ? " " + styles.flipped : "")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-label={`${title} service card`}
    >
      <div className={styles.cardInner}>
        {/* Front Side */}
        <div className={styles.cardFront}>
          <Flex direction="column" vertical="center" horizontal="center" gap="l" style={{ height: "100%" }}>
            <div className={styles.iconWrap}>
              <Icon size={48} />
            </div>
            <Heading as="h3" variant="heading-strong-m" style={{ textAlign: "center" }}>{title}</Heading>
            <Text variant="label-default-m" style={{ textAlign: "center", color: "var(--neutral-weak)" }}>{subtitle}</Text>
          </Flex>
        </div>
        {/* Back Side */}
        <div className={styles.cardBack}>
          <Column gap="m" vertical="center" style={{ height: "100%" }}>
            <Text variant="body-default-m" style={{ textAlign: "center" }}>{description}</Text>
            {features && (
              <ul className={styles.features}>
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            )}
          </Column>
        </div>
      </div>
    </div>
  );
}
  