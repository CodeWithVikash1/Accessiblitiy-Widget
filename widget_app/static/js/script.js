document.addEventListener('DOMContentLoaded', () => {
  const toggles = [
    { id: 'contrast-btn', class: 'high-contrast' },
    { id: 'textsize-btn', class: 'big-text' },
    { id: 'dyslexia-btn', class: 'dyslexia-font' },
    { id: 'highlight-btn', class: 'highlight-links' },
    { id: 'hideimg-btn', class: 'hide-images' },
    { id: 'cursor-btn', class: 'cursor-large' },
    { id: 'pause-btn', class: 'pause-animations' },
    { id: 'outline-btn', class: 'outline-visible' },
  ];

  toggles.forEach(tool => {
    const btn = document.getElementById(tool.id);
    btn.addEventListener('click', () => {
      document.body.classList.toggle(tool.class);
      btn.classList.toggle('active');
    });
  });
});
