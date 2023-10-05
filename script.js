console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let ProgressBar = document.getElementById('ProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songName: "15 Hours - Teekay", filePath: "songs/1.mp3", coverPath: "covers/15hours.jpg" },
    { songName: "AmaGents - Teekay", filePath: "songs/2.mp3", coverPath: "covers/amagents.jpg" },
    { songName: "Be There For Me - Teekay", filePath: "songs/3.mp3", coverPath: "covers/bethere.jpg" },
    { songName: "Dlala - Teekay", filePath: "songs/4.mp3", coverPath: "covers/bethere.jpg" },
    { songName: "Emotions - Teekay", filePath: "songs/5.mp3", coverPath: "covers/emotions.jpg" },
    { songName: "Future Plans - Teekay", filePath: "songs/6.mp3", coverPath: "covers/fp.jpg" },
    { songName: "How Many Times - Teekay", filePath: "songs/7.mp3", coverPath: "covers/hmt.jpg" },
    { songName: "I Need You - Teekay", filePath: "songs/8.mp3", coverPath: "covers/inneedyou.jpg" },
    { songName: "Late Nights - Teekay", filePath: "songs/9.mp3", coverPath: "covers/bethere.jpg" },
    { songName: "Mgani - Teekay", filePath: "songs/10.mp3", coverPath: "covers/mgani.jpg" },
    { songName: "Music Fellas - Teekay", filePath: "songs/11.mp3", coverPath: "covers/bethere.jpg" },
    { songName: "Outside The Box - Teekay", filePath: "songs/12.mp3", coverPath: "covers/bethere.jpg" },
    { songName: "Thursday - Teekay", filePath: "songs/13.mp3", coverPath: "covers/bethere.jpg" },
    { songName: "Weston Roads - Teekay", filePath: "songs/14.mp3", coverPath: "covers/westonroads.jpg" },
    { songName: "EMOBOYS - Sax In The House (Deeper Mix)", filePath: "songs/15.mp3", coverPath: "covers/esih.jpg" },
    { songName: "Ty Dolla Sign & Wiz Khalifa - Brand New", filePath: "songs/16.mp3", coverPath: "covers/twbn.jpg" },
    { songName: "Sosh Plata", filePath: "songs/17.mp3", coverPath: "covers/sosh.jpg" },
    { songName: "Priss - On My Way (Rancido's Lisoro Mix)", filePath: "songs/18.mp3", coverPath: "covers/omw.jpg" },
    { songName: "Hot Now ", filePath: "songs/19.mp3", coverPath: "covers/hn.jpg" },
    { songName: "Church - BJ the Chicago Kid", filePath: "songs/20.mp3", coverPath: "covers/bjc.jpg" },
    { songName: "Kendrick Lamar - The Heart Part 5", filePath: "songs/21.mp3", coverPath: "covers/thp5.png" },
    { songName: "Made For 2 - Vedo", filePath: "22.mp3", coverPath: "covers/m42.png" },
    { songName: "Chronical Deep - Left With A Smile (Original Mix)", filePath: "23.mp3", coverPath: "covers/lwas.jpg" },
    { songName: "Adekunle Gold, Fousheé - Dior, Dior, Dior", filePath: "songs/24.mp3", coverPath: "covers/ag.png" },
    { songName: "Adekunle Gold, Ty Dolla sign - One Woman", filePath: "songs/25.mp3", coverPath: "covers/ag.png" },
    { songName: "Blocked - Kay Rivers", filePath: "songs/26.mp3", coverPath: "covers/krpl.jpg" },
    { songName: "Too Much, Forgotten Flowers", filePath: "songs/27.mp3", coverPath: "covers/ff.jpg" },
    { songName: "Mario & Sabrina Claudio - Like Her Too - Remix", filePath: "songs/28.mp3", coverPath: "covers/lh2.png" },
    { songName: "RAIN - Hus Kingpin", filePath: "songs/29.mp3", coverPath: "covers/rhk.jpg" },
    { songName: "Don't Think About It Too Much", filePath: "songs/30.mp3", coverPath: "covers/mhdtatm.jpg" },
    { songName: "Coco Jones, Justin Timberlake - ICU", filePath: "songs/31.mp3", coverPath: "covers/icu.png" },
    { songName: "Cancelled (Instrumental)", filePath: "songs/32.mp3", coverPath: "covers/klc.png"},
    { songName: "SiR - The Recipe", filePath: "songs/33.mp3", coverPath: "covers/str.jpg" },
    { songName: "Too Long", filePath: "songs/34.mp3", coverPath: "covers/tl.jpg" },
    { songName: "Dende - Nightmares", filePath: "songs/35.mp3", coverPath: "covers/dn.png" },
    { songName: "SWV - If Only You Knew", filePath: "songs/36.mp3", coverPath: "covers/swv.jpg" },
    { songName: "Don't Mind Me - Roy Woods", filePath: "songs/37.mp3", coverPath: "covers/rwdmm.jpg" },
    { songName: "You Ain't In The 6 - Roy Woods", filePath: "songs/38.mp3", coverPath: "covers/rwdmm.jpg" },
    { songName: "Masculine - J Hus", filePath: "songs/39.mp3", coverPath: "covers/jhm.jpg" },
    { songName: "Palm Tree - J Hus", filePath: "songs/40.mp3", coverPath: "covers/jhm.jpg" },
    { songName: "Dilo Die Chenchitse", filePath: "songs/41.mp3", coverPath: "covers/wddt.jpg" },
    { songName: "ELEVATE", filePath: "songs/42.mp3", coverPath: "covers/ae.jpg" },
    { songName: "Take It There - VEDO", filePath: "songs/43.mp3", coverPath: "covers/VTT.jpg" },
    { songName: "Blowin' Mine's", filePath: "songs/44.mp3", coverPath: "covers/bmtl.jpg" },
    { songName: "Damaged (feat. Phabo)", filePath: "songs/45.mp3", coverPath: "covers/pda.jpg" },
    { songName: "Flex - Tory Lanez", filePath: "songs/46.mp3", coverPath: "covers/tlf.jpg" },
    { songName: "fakumean - Gunna", filePath: "songs/47.mp3", coverPath: "covers/faku.png" },
    { songName: "ODEEE", filePath: "songs/48.mp3", coverPath: "covers/BOO.jpg" },
    { songName: "DIAMONDS & FREAKS", filePath: "songs/49.mp3", coverPath: "covers/BOO.jpg" },
    { songName: "Truth Is - Vedo", filePath: "songs/50.mp3", coverPath: "covers/VTT.jpg" },
    { songName: "To Dream - Tory Lanez", filePath: "songs/51.mp3", coverPath: "covers/tlf.jpg" },
    { songName: "Pull Out - Vedo", filePath: "songs/52.mp3", coverPath: "covers/VTT.jpg" },
    { songName: "Bala Bala - C-Blak", filePath: "songs/53.mp3", coverPath: "covers/BB.jpg" },
    { songName: "How Much a Dollar Cost", filePath: "songs/54.mp3", coverPath: "covers/KLTPPP.png" },
    { songName: "Sink or Swim", filePath: "songs/55.mp3", coverPath: "covers/sow.jpg" },
    { songName: "Express Yourself - Phabo", filePath: "songs/56.mp3", coverPath: "covers/eyy.jpg" },
    { songName: "Mortal Man", filePath: "songs/57.mp3", coverPath: "covers/KLTPPP.png" },
    { songName: "Spirited Away", filePath: "songs/58.mp3", coverPath: "covers/bsa.jpg" },
    { songName: "Fatal Attraction", filePath: "songs/59.mp3", coverPath: "covers/bsa.jpg" },
    { songName: "60 Days - Larry June", filePath: "songs/60.mp3", coverPath: "covers/60days.jpg" },
    { songName: "Paid The Fine", filePath: "songs/61.mp3", coverPath: "covers/ytsl.png" },
    { songName: "WHARF TALK", filePath: "songs/62.mp3", coverPath: "covers/TTC.png" },
    { songName: "HEAVEN TO ME", filePath: "songs/63.mp3", coverPath: "covers/TTC.png" },
    { songName: "Like That", filePath: "songs/64.mp3", coverPath: "covers/dhlt.jpg" },
    { songName: "Zodiac", filePath: "songs/65.mp3", coverPath: "covers/dhlt.jpg" },
    { songName: "Pinot Noir", filePath: "songs/66.mp3", coverPath: "covers/F65.jpg" },
    { songName: "Water To Wine", filePath: "songs/67.mp3", coverPath: "covers/cw.png" },
    { songName: "Won't He Do It", filePath: "songs/68.mp3", coverPath: "covers/cw.png" },
    { songName: "So Be It", filePath: "songs/69.mp3", coverPath: "covers/av.jpg" },
    { songName: "IYKYK", filePath: "songs/70.mp3", coverPath: "covers/av.jpg" },
    { songName: "The Girl She Was", filePath: "songs/71.mp3", coverPath: "covers/ptg.png" },
    { songName: "Hard 2 Forget", filePath: "songs/72.mp3", coverPath: "covers/ptg.png" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    ProgressBar.value = progress;
})

ProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 71) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})