window.addEventListener('wheel', (event) => {
  
  event.preventDefault();
  
  const scrollSpeed = 1; 
  
  const delta = event.deltaY || event.detail || event.wheelDelta;
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const finalScrollTop = scrollTop + (delta * scrollSpeed);

  window.scrollTo({
    top: finalScrollTop,
    behavior: 'smooth'
  });
});