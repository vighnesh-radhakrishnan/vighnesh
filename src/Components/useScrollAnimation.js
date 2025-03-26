import { useEffect } from "react";

export function useScrollAnimation(selectors = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            // For items that need staggered animation
            if (
              entry.target.classList.contains("favorite-item") ||
              entry.target.classList.contains("project-card")
            ) {
              const items = Array.from(entry.target.parentElement.children);
              items.forEach((item, index) => {
                item.style.setProperty("--item-index", index);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    // Select elements to observe
    const defaultSelectors = [
      ".favorite-item",
      ".project-card",
      ".content-wrapper",
      ".sidebar",
      ".content",
      "h1",
      "p",
      ".favorites",
      ".skills",
    ];
    const elementsToAnimate = document.querySelectorAll(
      [...defaultSelectors, ...selectors].join(", ")
    );

    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      // Cleanup
      elementsToAnimate.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [selectors]);
}
