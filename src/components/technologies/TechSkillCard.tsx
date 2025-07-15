"use client";

import { useState, useEffect } from "react";
import { techIconLibrary, TechIconName } from "@/resources/techIcons";
import styles from "./TechSkillCard.module.scss";

interface TechSkillCardProps {
  name: string;
  icon: TechIconName;
  proficiency: number; // 0-100
  cardBgIdx?: number; // 1-12, for visually distinct backgrounds
}

export default function TechSkillCard({ name, icon, proficiency, cardBgIdx }: TechSkillCardProps) {
  const [animatedProficiency, setAnimatedProficiency] = useState(0);
  const Icon = techIconLibrary[icon] || techIconLibrary["javascript"];

  // Use cardBgIdx for background class if provided, else fallback to hash
  function getCardBgClass() {
    if (typeof cardBgIdx === "number") {
      return styles[`cardBg${cardBgIdx}`];
    }
    // fallback: hash by name
    const colorCount = 12;
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const idx = Math.abs(hash) % colorCount + 1;
    return styles[`cardBg${idx}`];
  }
  const cardBgClass = getCardBgClass();

  // Animate progress bar on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProficiency(proficiency);
    }, 300);

    return () => clearTimeout(timer);
  }, [proficiency]);

  return (
    <div 
      className={`${styles.card} ${cardBgClass}`}
      tabIndex={0}
      role="button"
      aria-label={`${name} skill level: ${proficiency}%`}
    >
      <div className={styles.cardContent}>
        <div className={styles.iconWrapper}>
          <Icon size={28} />
        </div>
        <div className={styles.techName}>
          {name}
        </div>
        <div className={styles.progressSection}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill}
              style={{ width: `${animatedProficiency}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
