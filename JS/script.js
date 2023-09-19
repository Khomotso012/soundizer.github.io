// Navbar and move to top button
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  cancelBtn.classList.add("show");
  body.classList.add("disabledScroll");
}

cancelBtn.onclick = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  body.classList.remove("disabledScroll");
}

const siteLogo = document.querySelector('.logo a');

// Get all the menu items
const navLinks = document.querySelectorAll('.menu-list li');

const playSongBtn = document.querySelector('.play-song-btn');

// Add click event listener to each menu item
navLinks.forEach(item => {
  item.addEventListener('click', function () {
    // Remove the 'active' class from all menu items
    navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));

    // Add the 'active' class to the clicked menu item
    this.classList.add('active-menu-list');
  });
});

playSongBtn.onclick = () => {
  removeActiveClass();
}

siteLogo.onclick = () => {
  removeActiveClass();
};

function removeActiveClass() {
  navLinks.forEach(menuItem => menuItem.classList.remove('active-menu-list'));
}

window.onscroll = () => {
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");

  // When the user scrolls down 75px from the top of the document, show the button
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    moveTopBtn.style.display = "block";
  } else {
    moveTopBtn.style.display = "none";
  }
}

// PLAY MUSIC 
const playSong = document.getElementById("song");
var icon = document.getElementById("icon");

icon.addEventListener("click", playMusic);

function playMusic() {
  if (playSong.paused) {
    playSong.play();
    icon.src = "./assets/Image/pause.png";
  } else {
    playSong.pause();
    icon.src = "./assets/Image/play.png";
  }
}

// Move to Top button
var moveTopBtn = document.getElementById("moveTopBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  removeActiveClass();
}

// PreLoader
var loader = document.getElementById("loading");
function preLoader() {
  loader.style.display = "none";
}

// CHOOSE A SONG
const buttons = document.querySelectorAll(".btn");

const photo = document.getElementById("banner");
const song = document.getElementById("song");
const songName = document.getElementById("songName");
const songBy = document.getElementById("songBy");
const aboutSong = document.getElementById("aboutSong");
const title = document.getElementById("title");
const download = document.getElementById("download");

buttons[0].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/thursday.jpg";
  song.src = "./assets/Songs/Thursday - Teekay.mp3";
  songName.innerText = "Thursday";
  songBy.innerText = "Teekay";
  title.innerText = "Thursday";
  download.href = "./assets/Songs/Thursday - Teekay.mp3";
  aboutSong.innerText = "Perfect song to listen to on a thursday.";
});

buttons[1].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/mgani.jpg";
  song.src = "./assets/Songs/Mgani - Teekay.mp3";
  songName.innerText = "Mgani";
  songBy.innerText = "Teekay";
  title.innerText = " Mgani";
  download.href = "./assets/Songs/Mgani - Teekay.mp3";
  aboutSong.innerText = "Perfect song to listen to when thinking of a friend that you haven't seen in a while";
});

buttons[2].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/fplans.jpg";
  song.src = "./assets/Songs/Future Plans - Teekay.mp3";
  songName.innerText = "Future Plans";
  songBy.innerText = "Teekay";
  title.innerText = "Future Plans";
  download.href = "./assets/Songs/Future Plans - Teekay.mp3";
  aboutSong.innerText = "Thinking about Future Plans? Here is a perfect song for you!";
});

buttons[3].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/15hours.jpeg";
  song.src = "./assets/Songs/15 Hours - Teekay.mp3";
  songName.innerText = " 15 Hours";
  songBy.innerText = "Teekay";
  title.innerText = "15 Hours";
  download.href = "./assets/Songs/15 Hours - Teekay.mp3";
  aboutSong.innerText = `"15 hours - Perfect for long hour tasks.`;
});

buttons[4].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/emotions.jpg";
  song.src = "./assets/Songs/Emotions - Teekay.mp3";
  songName.innerText = "Emotions";
  songBy.innerText = "Teekay";
  title.innerText = "Emotions";
  download.href = "./assets/Songs/Emotions - Teekay.mp3";
  aboutSong.innerText = `A song About Ones Emotions`;
});

buttons[5].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/westonroads.jpg";
  song.src = "./assets/Songs/Weston Roads - Teekay.mp3";
  songName.innerText = "Weston Roads";
  songBy.innerText = "Teekay";
  title.innerText = "Weston Roads";
  download.href = "./assets/Songs/Weston Roads - Teekay.mp3";
  aboutSong.innerText = `Perfect song to listen to when driving on long distance roads`;
});

buttons[6].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/inneedyou.jpg";
  song.src = "./assets/Songs/I Need You - Teekay.mp3";
  songName.innerText = "I Need You";
  songBy.innerText = "Teekay";
  title.innerText = "I Need You";
  download.href = "./assets/Songs/I Need You - Teekay.mp3";
  aboutSong.innerText = "Ever feel like you need someone? here is the perfect song to send them to let them know";
});

buttons[7].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/katputli.jpg";
  song.src = "./assets/Songs/AmaGents - Teekay.mp3";
  songName.innerText = "AmaGents";
  songBy.innerText = "Teekay";
  title.innerText = "AmaGents";
  download.href = "./assets/Songs/AmaGents - Teekay.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel the warmth of emotions in the most memorable ways. 'Katputli Ke Dhaage' song was released in 2021.";
});

buttons[8].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/you.jpg";
  song.src = "./assets/Songs/Dlala - Teekay.mp3";
  songName.innerText = "Dlala";
  songBy.innerText = "Teekay";
  title.innerText = "Dlala";
  download.href = "./assets/Songs/Dlala - Teekay.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel  the warmth of emotions in the most memorable ways. 'Tu/You' was released in 2022";
});

buttons[9].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/pal.jpg";
  song.src = "./assets/Songs/Music Fellas - Teekay.mp3";
  songName.innerText = "Music Fellas";
  songBy.innerText = "Teekay";
  title.innerText = "Music Fellas";
  download.href = "./assets/Songs/Music Fellas - Teekay.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel  the warmth of emotions in the most memorable ways. 'Har Ek Pal' was released in 2017.";
});

buttons[10].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/chand.jpg";
  song.src = "./assets/Songs/Outside The Box - Teekay.mp3";
  songName.innerText = "Outside The Box";
  songBy.innerText = "Teekay";
  title.innerText = "Outside The Box";
  download.href = "./assets/Songs/Outside The Box - Teekay.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel  the warmth of emotions in the most memorable ways. 'Chand Baliyan' was released in 2023.";
});

buttons[11].addEventListener("click", () => {
  icon.src = "./assets/Image/play.png";
  photo.src = "./assets/Image/aisay.jpeg";
  song.src = "./assets/Songs/Late Nights - Teekay.mp3";
  songName.innerText = "Late Nights";
  songBy.innerText = "Teekay";
  title.innerText = "Late Nights";
  download.href = "./assets/Songs/Late Nights - Teekay.mp3";
  aboutSong.innerText = "Music has the power to uplift your mood and also makes you feel  the warmth of emotions in the most memorable ways. 'Aisay Kaisay' was released in 2020.";
});






