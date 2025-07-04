"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface AutoCarouselProps {
  items: Array<{
    slide: string;
    alt: string;
  }>;
  sizes?: string;
  autoSlideInterval?: number;
  pauseOnHover?: boolean;
}

export const AutoCarousel: React.FC<AutoCarouselProps> = ({
  items,
  sizes = "(max-width: 960px) 100vw, 960px",
  autoSlideInterval = 2000,
  pauseOnHover = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  }, [items.length, isTransitioning]);

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  }, [items.length, isTransitioning]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [currentIndex, isTransitioning]
  );

  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(goToNext, autoSlideInterval);
  }, [goToNext, autoSlideInterval]);

  const stopAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Start auto-slide when component mounts
  useEffect(() => {
    if (items.length > 1) {
      startAutoSlide();
    }

    return () => stopAutoSlide();
  }, [startAutoSlide, stopAutoSlide, items.length]);

  // Handle manual navigation (pause briefly then resume)
  const handleManualNavigation = useCallback(
    (direction: "next" | "prev") => {
      stopAutoSlide();
      if (direction === "next") {
        goToNext();
      } else {
        goToPrevious();
      }
      setTimeout(() => {
        startAutoSlide();
      }, 1000);
    },
    [goToNext, goToPrevious, startAutoSlide, stopAutoSlide]
  );

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div
      ref={carouselRef}
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        borderRadius: "var(--radius-l)",
        backgroundColor: "var(--neutral-100)",
      }}
    >
      {/* Main carousel container */}
      <div
        style={{
          display: "flex",
          transition:
            isTransitioning ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
          transform: `translateX(-${currentIndex * 100}%)`,
          width: "100%", // FIX: set width to 100% so each slide takes full width
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              minWidth: "100%", // FIX: each slide takes 100% of carousel width
              flexShrink: 0,
              position: "relative",
              aspectRatio: "16/9",
            }}
          >
            <Image
              src={item.slide}
              alt={item.alt}
              fill
              sizes={sizes}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              quality={85}
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      {items.length > 1 && (
        <>
          <button
            onClick={() => handleManualNavigation("prev")}
            style={{
              position: "absolute",
              left: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "50%",
              border: "none",
              background: "rgba(0, 0, 0, 0.5)",
              color: "white",
              cursor: "pointer",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              transition: "all 0.2s ease",
              opacity: 0,
              visibility: "hidden",
            }}
            className="carousel-nav-btn prev-btn"
            aria-label="Previous image"
            disabled={isTransitioning}
          >
            ‹
          </button>
          <button
            onClick={() => handleManualNavigation("next")}
            style={{
              position: "absolute",
              right: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "50%",
              border: "none",
              background: "rgba(0, 0, 0, 0.5)",
              color: "white",
              cursor: "pointer",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              transition: "all 0.2s ease",
              opacity: 0,
              visibility: "hidden",
            }}
            className="carousel-nav-btn next-btn"
            aria-label="Next image"
            disabled={isTransitioning}
          >
            ›
          </button>
        </>
      )}
      {/* Progress indicator dots */}
      {items.length > 1 && (
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "0.5rem",
            zIndex: 20,
          }}
        >
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                stopAutoSlide();
                goToSlide(index);
                setTimeout(() => {
                  startAutoSlide();
                }, 1000);
              }}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                border: "none",
                background:
                  index === currentIndex
                    ? "rgba(255, 255, 255, 0.9)"
                    : "rgba(255, 255, 255, 0.4)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                transform:
                  index === currentIndex ? "scale(1.2)" : "scale(1)",
              }}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
      )}
      {/* CSS for hover effects */}
      <style jsx>{`
        div:hover .carousel-nav-btn {
          opacity: 1 !important;
          visibility: visible !important;
        }
        .carousel-nav-btn:hover {
          background: rgba(0, 0, 0, 0.7) !important;
          transform: translateY(-50%) scale(1.1) !important;
        }
        .carousel-nav-btn:disabled {
          cursor: not-allowed !important;
          opacity: 0.5 !important;
        }
      `}</style>
    </div>
  );
};
