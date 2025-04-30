import { useEffect } from "react";

export function useScrollAnimation(selectors = []) {
  useEffect(() => {
    // Function to check if an element is in viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    };

    // Add visible class to elements that are initially in viewport
    const checkInitialVisibility = () => {
      const elementsToAnimate = document.querySelectorAll(
        [...defaultSelectors, ...selectors].join(", ")
      );

      elementsToAnimate.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add("visible");

          // For items that need staggered animation
          if (
            element.classList.contains("favorite-item") ||
            element.classList.contains("project-card")
          ) {
            const items = Array.from(element.parentElement.children);
            items.forEach((item, index) => {
              item.style.setProperty("--item-index", index);
            });
          }
        }
      });
    };

    // Apply staggered animation index to children
    const setStaggeredAnimationIndices = () => {
      const favoriteItems = document.querySelectorAll(".favorite-item");
      const projectCards = document.querySelectorAll(".project-card");

      [favoriteItems, projectCards].forEach((items) => {
        const itemsArray = Array.from(items);
        const parentGroups = {};

        // Group items by parent
        itemsArray.forEach((item) => {
          const parent = item.parentElement;
          if (!parentGroups[parent]) {
            parentGroups[parent] = [];
          }
          parentGroups[parent].push(item);
        });

        // Set indices for each group
        Object.values(parentGroups).forEach((group) => {
          group.forEach((item, index) => {
            item.style.setProperty("--item-index", index);
          });
        });
      });
    };

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            // For staggered animations
            if (
              entry.target.classList.contains("favorites") ||
              entry.target.parentElement.classList.contains("project-grid")
            ) {
              setStaggeredAnimationIndices();
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
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

    // Observe all elements
    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });

    // Set initial visibility and add scroll listener
    checkInitialVisibility();
    setStaggeredAnimationIndices();

    // Add mouse move effect for project cards and favorite items
    const addMouseMoveEffect = () => {
      const items = document.querySelectorAll(".project-card, .favorite-item");

      items.forEach((item) => {
        item.addEventListener("mousemove", (e) => {
          const { left, top, width, height } = item.getBoundingClientRect();
          const x = (e.clientX - left) / width - 0.5;
          const y = (e.clientY - top) / height - 0.5;

          item.style.transform = `
            translateY(${
              item.classList.contains("project-card") ? "-10px" : "-12px"
            }) 
            perspective(1000px) 
            rotateX(${y * 5}deg) 
            rotateY(${x * -5}deg)
            scale(${item.classList.contains("project-card") ? "1.02" : "1.03"})
          `;
        });

        item.addEventListener("mouseleave", () => {
          item.style.transform = "";
        });
      });
    };

    // Execute with slight delay to ensure DOM is fully loaded
    setTimeout(() => {
      addMouseMoveEffect();
    }, 500);

    // Clean up
    return () => {
      elementsToAnimate.forEach((element) => {
        observer.unobserve(element);
      });

      const items = document.querySelectorAll(".project-card, .favorite-item");
      items.forEach((item) => {
        item.removeEventListener("mousemove", () => {});
        item.removeEventListener("mouseleave", () => {});
      });
    };
  }, [selectors]);
}
