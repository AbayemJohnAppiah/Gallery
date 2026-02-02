if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  themeBtn.textContent = '🌞';
}

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  const isDark = document.body.classList.contains('dark');
  themeBtn.textContent = isDark ? '🌞' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

});


const button = document.getElementById('themeBtn');

button.onclick = () => {
  button.style.backgroundColor =
    button.style.backgroundColor === 'black'
      ? 'white'
      : 'black';
};

// Using Intersection Observer (best approach)
const lazyBackgrounds = document.querySelectorAll('.lazy-bg');

const bgObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const div = entry.target;
      div.style.backgroundImage = `url('${div.dataset.bg}')`;
      div.classList.add('loaded');
      bgObserver.unobserve(div);
    }
  });
});

lazyBackgrounds.forEach(bg => bgObserver.observe(bg));
