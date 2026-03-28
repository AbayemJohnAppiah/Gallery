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

//images
document.getElementById("pic1").style.backgroundImage =
  "url('../Img/Personal/6213f1ed-bddb-43d2-af3d-e58e22d8799e.JPG')";
document.getElementById("pic2").style.backgroundImage =
  "url('../Img/Personal/IMG_1095.JPG')";
document.getElementById("pic3").style.backgroundImage =
  "url('../Img/Personal/IMG_0940 Medium.jpeg')";
document.getElementById("pic4").style.backgroundImage =
  "url('../Img/Personal/2b60665f-08b1-4355-9807-907eaf689b98.JPG')";
document.getElementById("pic5").style.backgroundImage =
  "url('../Img/Personal/IMG_4243.jpg')";
document.getElementById("pic6").style.backgroundImage =
  "url('../Img/Personal/IMG_4423.JPG')";
document.getElementById("pic7").style.backgroundImage =
  "url('../Img/Personal/IMG_7865.jpg')";
document.getElementById("pic8").style.backgroundImage =
  "url('../Img/Personal/IMG_8163.JPG')";
document.getElementById("pic9").style.backgroundImage =
  "url('../Img/Personal/IMG_3114.jpg')";
document.getElementById("pic10").style.backgroundImage =
  "url('../Img/Personal/IMG_7063.jpg')";
document.getElementById("pic11").style.backgroundImage =
  "url('../Img/Personal/IMG_8241.jpg')";
document.getElementById("pic12").style.backgroundImage =
  "url('../Img/Personal/WhatsApp Image 2025-01-30 at 16.38.56_c1be2436.jpg')";
document.getElementById("pic13").style.backgroundImage =
  "url('../Img/Personal/IMG_2752.jpg')";
document.getElementById("pic14").style.backgroundImage =
  "url('../Img/Personal/IMG_3126.jpg')";
document.getElementById("pic15").style.backgroundImage =
  "url('../Img/Personal/IMG_1703.jpg')";
document.getElementById("pic16").style.backgroundImage =
  "url('../Img/Personal/IMG_1132.jpg')";
document.getElementById("pic17").style.backgroundImage =
  "url('../Img/Personal/IMG_4241.jpg')";
document.getElementById("pic18").style.backgroundImage =
  "url('../Img/Personal/22484996-b405-4d82-a6b3-956a1a06679b.JPG')";
document.getElementById("pic19").style.backgroundImage =
  "url('../Img/Personal/IMG_3281.jpg')";

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
