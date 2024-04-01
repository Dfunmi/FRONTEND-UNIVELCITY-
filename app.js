    const portfolioItems = document.querySelectorAll('.portfolio-item');
let currentIndex = 0;

function showNextItem() {
  const current = portfolioItems[currentIndex];
  current.classList.remove('active');
  current.classList.add('hidden');

  currentIndex = (currentIndex + 1) % portfolioItems.length;

  const next = portfolioItems[currentIndex];
  next.classList.remove('hidden');
  setTimeout(() => next.classList.add('active'), 50);
}

setInterval(showNextItem, 5000); // Change slide every 5 seconds
