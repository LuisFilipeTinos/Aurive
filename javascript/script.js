document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // anima só uma vez
      }
    });
  }, {
    threshold: 0.3 // porcentagem visível do elemento
  });

  elements.forEach(el => observer.observe(el));
});