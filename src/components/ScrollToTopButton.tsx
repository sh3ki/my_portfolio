"use client";
import React, { useEffect, useState } from "react";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import styles from "./ScrollToTopButton.module.scss";

const SCROLL_THRESHOLD = 200;

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={styles.scrollToTop + (visible ? " " + styles.visible : "")}
      onClick={handleClick}
      aria-label="Scroll to top"
      tabIndex={visible ? 0 : -1}
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <TbArrowBigUpLinesFilled size={32} />
    </button>
  );
};

export default ScrollToTopButton;
