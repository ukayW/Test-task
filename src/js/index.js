window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  let scrollPosition = window.scrollY;

  let opacity = 1 - scrollPosition / 200;

  let translateY = scrollPosition / 5;
  if (translateY > 20) translateY = 20;

  header.style.opacity = opacity;
  header.style.transform = `translateY(-${translateY}px)`;
  header.style.background = `rgba(34,34,34,${opacity})`;
});
