const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const filterButtons = document.querySelectorAll('.filter-button');
const comparisonRows = document.querySelectorAll('.comparison-table tbody tr');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;

    document.querySelector('.comparison-table thead th:nth-child(2)').classList.toggle('filtered-out', filter === 'p2p');
    document.querySelector('.comparison-table thead th:nth-child(3)').classList.toggle('filtered-out', filter === 'centralized');
    comparisonRows.forEach((row) => {
      row.querySelectorAll('td:not(:first-child)').forEach((cell, index) => {
        const shouldHide = (filter === 'centralized' && index === 1) || (filter === 'p2p' && index === 0);
        cell.classList.toggle('filtered-out', shouldHide);
      });
    });
  });
});

const detailOutput = document.querySelector('.detail-output');
document.querySelectorAll('.text-button').forEach((button) => {
  button.addEventListener('click', () => {
    detailOutput.textContent = button.dataset.detail;
    detailOutput.classList.add('visible');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
