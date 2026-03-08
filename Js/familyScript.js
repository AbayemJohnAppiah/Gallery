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
  "url('../Img/Family/92ce3047-64de-4bd3-89a0-f1204f7e4ce3.JPG')";
document.getElementById("pic2").style.backgroundImage =
  "url('../Img/Family/da49637c-9293-42a6-aaa8-71c69b6263e3.JPG')";
document.getElementById("pic3").style.backgroundImage =
  "url('../Img/Family/e73db68e-2bd9-4f1b-b6e9-852c00f92152.JPG')";
document.getElementById("pic4").style.backgroundImage =
  "url('../Img/Family/607513428_18552795184035944_8354381508212869520_n.jpg')";
document.getElementById("pic5").style.backgroundImage =
  "url('../Img/Family/IMG_4150.jpg')";
document.getElementById("pic6").style.backgroundImage =
  "url('../Img/Family/PHOTO-2025-10-07-08-41-24.jpg')";
document.getElementById("pic7").style.backgroundImage =
  "url('../Img/Family/1ce56a94-0520-43a3-8c27-ce8e3b34c363.JPG')";
document.getElementById("pic8").style.backgroundImage =
  "url('../Img/Family/PHOTO-2023-09-26-09-38-13.jpg')";
document.getElementById("pic9").style.backgroundImage =
  "url('../Img/Family/PHOTO-2024-07-30-13-23-22.jpg')";
document.getElementById("pic10").style.backgroundImage =
  "url('../Img/Family/cf54879a-de1a-4e00-acab-b37c4acb028e.JPG')";
document.getElementById("pic11").style.backgroundImage =
  "url('../Img/Family/PHOTO-2025-04-17-21-31-09.jpg')";
document.getElementById("pic12").style.backgroundImage =
  "url('../Img/Family/PHOTO-2025-04-17-21-31-31.jpg')";
document.getElementById("pic13").style.backgroundImage =
  "url('../Img/Family/PHOTO-2026-02-01-13-59-34.jpg')";
document.getElementById("pic14").style.backgroundImage =
  "url('../Img/Family/PHOTO-2025-06-30-18-14-08.jpg')";
document.getElementById("pic15").style.backgroundImage =
  "url('../Img/Family/PHOTO-2025-09-30-17-08-17.jpg')";
document.getElementById("pic16").style.backgroundImage =
  "url('../Img/Family/91a851d7-ae52-4d10-ab9f-455f99d034de.JPG')";
document.getElementById("pic17").style.backgroundImage =
  "url('../Img/Family/PHOTO-2026-01-31-00-31-57.jpg')";
document.getElementById("pic18").style.backgroundImage =
  "url('../Img/Family/PHOTO-2026-01-31-13-45-35.jpg')";
document.getElementById("pic19").style.backgroundImage =
  "url('../Img/Family/PHOTO-2026-01-27-04-41-42.jpg')";

//nav//
/*marquee*/
document.getElementById("scrollSide").innerHTML = 'Family Gallery';
/*my name*/
document.getElementById("myName").innerHTML = 'Abayem A.John';
/*Personal*/
document.getElementById("personal").innerHTML = 'Personal';
/*School*/
document.getElementById("school").innerHTML = 'School';
/*Family*/
document.getElementById("family").innerHTML = 'Family';
