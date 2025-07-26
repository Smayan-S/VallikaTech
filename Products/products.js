document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel-container");

  carousels.forEach((carousel) => {
    const slide = carousel.querySelector(".carousel-slide");
    const isFigureBased = slide.querySelector("figure") !== null;
    const items = isFigureBased
      ? slide.querySelectorAll("figure")
      : slide.querySelectorAll("img");

    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");

    let counter = 0;
    const totalItems = items.length;

    const updateSlide = () => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    };

    const showNext = () => {
      counter = (counter + 1) % totalItems;
      updateSlide();
    };

    const showPrev = () => {
      counter = (counter - 1 + totalItems) % totalItems;
      updateSlide();
    };

    // Manual navigation only
    nextBtn.addEventListener("click", showNext);
    prevBtn.addEventListener("click", showPrev);
  });
});
  

// Fade in single elements (e.g., tables)
const fadeElements = document.querySelectorAll(".fade-in");
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => fadeObserver.observe(el));

// Staggered list items
const staggerLists = document.querySelectorAll(".stagger-list");

staggerLists.forEach(list => {
  const items = list.querySelectorAll("li");

  const listObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        items.forEach((li, i) => {
          setTimeout(() => {
            li.classList.add("visible");
          }, i * 100); // 100ms stagger
        });
        listObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  listObserver.observe(list);
});
