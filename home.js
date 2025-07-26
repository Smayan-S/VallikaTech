document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.2,
  };

  const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  };

  const observer = new IntersectionObserver(revealOnScroll, observerOptions);

  document.querySelectorAll('.hidden').forEach(el => {
    observer.observe(el);
  });
});
