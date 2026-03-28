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


// 1. Define your images in one place
const images = {
  pic1: "../Img/Personal/6213f1ed-bddb-43d2-af3d-e58e22d8799e.JPG",
  pic2: "../Img/Personal/IMG_1095.JPG",
  pic3: "../Img/Personal/IMG_0940 Medium.jpeg",
  pic4: "../Img/Personal/2b60665f-08b1-4355-9807-907eaf689b98.JPG",
  pic5: "../Img/Personal/IMG_4243.jpg",
  pic6: "../Img/Personal/IMG_4423.JPG",
  pic7: "../Img/Personal/IMG_7865.jpg",
  pic8: "../Img/Personal/IMG_8163.JPG",
  pic9: "../Img/Personal/IMG_3114.jpg",
  pic10: "../Img/Personal/IMG_7063.jpg",
  pic11: "../Img/Personal/IMG_8241.jpg",
  pic12: "../Img/Personal/WhatsApp Image 2025-01-30 at 16.38.56_c1be2436.jpg",
  pic13: "../Img/Personal/IMG_2752.jpg",
  pic14: "../Img/Personal/IMG_3126.jpg",
  pic15: "../Img/Personal/IMG_1703.jpg",
  pic16: "../Img/Personal/IMG_1132.jpg",
  pic17: "../Img/Personal/IMG_4241.jpg",
  pic18: "../Img/Personal/22484996-b405-4d82-a6b3-956a1a06679b.JPG",
  pic19: "../Img/Personal/IMG_3281.jpg",
};

// 2. Set the real data-bg on each div (not the <a> tag)
Object.entries(images).forEach(([id, src]) => {
  const div = document.querySelector(`div.${id}`);  // targets div by class, not id
  if (div) div.dataset.bg = src;
});

// 3. IntersectionObserver lazy-loads only when visible
const bgObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const div = entry.target;
      div.style.backgroundImage = `url('${div.dataset.bg}')`;
      div.classList.add('loaded');
      bgObserver.unobserve(div);
    }
  });
}, {
  rootMargin: "200px"  // start loading 200px before it enters view
});

document.querySelectorAll('.lazy-bg').forEach(bg => bgObserver.observe(bg));

//nav//
/*marquee*/
document.getElementById("scrollSide").innerHTML = 'Personal Gallery';
/*my name*/
document.getElementById("myName").innerHTML = 'Abayem A.John';
/*Personal*/
document.getElementById("personal").innerHTML = 'Personal';
/*School*/
document.getElementById("school").innerHTML = 'School';
/*Family*/
document.getElementById("family").innerHTML = 'Family';
