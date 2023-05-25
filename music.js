const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title= document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");


const songs =[
    {
        name: "naveen-1",
        title: "Man Meri Jaan ",
        artist:"by Naveen",
},

{
    name: "naveen-2",
    title: "Rabba-Ne",
    artist:" By Priya",
},

{
    name: "naveen-3",
    title: "Teri Meri",
    artist:" Arijit Singh",
},

{
    name: "naveen-4",
    title: "kya loge gaurab sir",
    artist:"B.prak",
},



]

let isPlaying = false;

//  for play

const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play', "fa-pause");
    img.classList.add("ghoomar_re");
};

// for pause

const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause', "fa-play");
    img.classList.remove("ghoomar_re");
};


play.addEventListener('click', () => {

    if (isPlaying) {
        pauseMusic();
    }
    else {
        playMusic();
    }

})




const loadSongs =(songs) =>{

title.textContent=songs.title;
artist.textContent=songs.artist;
music.src =songs.name +".mp3";
img.src=songs.name +".jpg";
};
songIndex =0;
const nextSong=()=>{
    songIndex=(songIndex +1)%songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
};

const prevSong=()=>{
    songIndex=(songIndex - 1 + songs.length)% songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
};



next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);