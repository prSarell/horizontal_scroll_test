document.addEventListener('DOMContentLoaded', () => {
  const scrollContainer = document.getElementById('scrollContainer');

  // Prevent pinch-to-zoom and double-tap zoom on iPhone
  document.addEventListener('gesturestart', (e) => {
    e.preventDefault();
  });

  // Enhance touch scrolling with momentum
  let isScrolling = false;
  let startX = 0;
  let scrollLeft = 0;

  scrollContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - scrollLeft;
    isScrolling = true;
  });

  scrollContainer.addEventListener('touchmove', (e) => {
    if (!isScrolling) return;
    e.preventDefault(); // Prevent vertical scroll
    const x = e.touches[0].pageX;
    scrollLeft = x - startX;
    scrollContainer.scrollLeft = scrollLeft;
  });

  scrollContainer.addEventListener('touchend', () => {
    isScrolling = false;
  });
});
