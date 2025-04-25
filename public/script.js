document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  const logo = document.querySelector('#preloader-logo img');

  const hidePreloader = () => {
    requestAnimationFrame(() => {
      preloader.classList.add('hidden');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 800); // Thời gian khớp với transition
    });
  };

  // Nếu ảnh đã cache sẵn
  if (logo.complete) {
    hidePreloader();
  } else {
    logo.addEventListener('load', hidePreloader);
  }
});
