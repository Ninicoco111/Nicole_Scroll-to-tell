const scenes = document.querySelectorAll('.scene');
const photoLayers = document.querySelectorAll('.photo-layer');
const progressFill = document.querySelector('.progress-fill');

function updatePage() {
  const windowHeight = window.innerHeight;
  const scrollTop = window.scrollY;
  const pageHeight = document.documentElement.scrollHeight - windowHeight;
  const progress = pageHeight > 0 ? scrollTop / pageHeight : 0;

  progressFill.style.height = `${progress * 100}%`;

  scenes.forEach((scene) => {
    const rect = scene.getBoundingClientRect();

    if (rect.top < windowHeight * 0.72 && rect.bottom > windowHeight * 0.18) {
      scene.classList.add('active');
    }
  });

  photoLayers.forEach((layer) => {
    const scene = layer.parentElement;
    const rect = scene.getBoundingClientRect();
    const speed = Number(layer.dataset.speed);
    const movement = rect.top * speed;

    layer.style.transform = `translateY(${movement}px) scale(1.08)`;
  });
}

window.addEventListener('scroll', updatePage);
window.addEventListener('resize', updatePage);
window.addEventListener('load', updatePage);
