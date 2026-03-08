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

//images//

document.getElementById("pic1").style.backgroundImage =
  "url('../Img/School/IMG_4187 2.jpg')";
document.getElementById("pic2").style.backgroundImage =
  "url('../Img/School/IMG_1094 2.jpg')";
document.getElementById("pic3").style.backgroundImage =
  "url('../Img/School/IMG_2753 2.jpg')";
document.getElementById("pic4").style.backgroundImage =
  "url('../Img/School/IMG_4186 2.jpg')";
document.getElementById("pic5").style.backgroundImage =
  "url('../Img/School/IMG_4193 2.jpg')";
document.getElementById("pic6").style.backgroundImage =
  "url('../Img/School/IMG_4270 2.jpg')";
document.getElementById("pic7").style.backgroundImage =
  "url('../Img/School/IMG_4261 2.jpg')";
document.getElementById("pic8").style.backgroundImage =
  "url('../Img/School/IMG_4264 2.jpg')";
document.getElementById("pic9").style.backgroundImage =
  "url('../Img/School/IMG_4269 2.jpg')";
document.getElementById("pic10").style.backgroundImage =
  "url('../Img/School/IMG_4280 2.jpg')";
document.getElementById("pic11").style.backgroundImage =
  "url('../Img/School/IMG_4285 2.jpg')";
document.getElementById("pic12").style.backgroundImage =
  "url('../Img/School/IMG_4277 2.jpg')";
document.getElementById("pic13").style.backgroundImage =
  "url('../Img/School/IMG_4189 2.jpg')";
document.getElementById("pic14").style.backgroundImage =
  "url('../Img/School/IMG_2886.jpg')";
document.getElementById("pic15").style.backgroundImage =
  "url('../Img/School/IMG_7040.JPG')";
document.getElementById("pic16").style.backgroundImage =
  "url('../Img/School/IMG_1105.jpg')";
document.getElementById("pic17").style.backgroundImage =
  "url('../Img/School/IMG_1252.jpg')";
document.getElementById("pic18").style.backgroundImage =
  "url('../Img/School/IMG_8154.JPG')";
document.getElementById("pic19").style.backgroundImage =
  "url('../Img/School/IMG_4228.jpg')";

//nav//
/*marquee*/
document.getElementById("scrollSide").innerHTML = 'School Gallery';
/*my name*/
document.getElementById("myName").innerHTML = 'Abayem A.John';
/*Personal*/
document.getElementById("personal").innerHTML = 'Personal';
/*School*/
document.getElementById("school").innerHTML = 'School';
/*Family*/
document.getElementById("family").innerHTML = 'Family';
