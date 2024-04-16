export const scrollToTop = () => {
  if ('scrollBehavior' in document.documentElement.style) {
    // Smooth scrolling is supported
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    // Smooth scrolling not supported, fallback to instant scrolling
    window.scrollTo(0, 0);
  }
  }