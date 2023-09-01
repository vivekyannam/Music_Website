const music = new Audio('audio/1.mp3');
// music.play();

const songs = [
    {
        id: "1",
        songName: `Chamkeela Angeelesi <br> 
        <div class="subtitle">Dasara</div>`,
        poster: "img/1.jpg",
    },
    {
        id: "2",
        songName: `Mastaru Mastaru <br> 
        <div class="subtitle">Sir</div>`,
        poster: "img/2.jpg",
    },
    {
        id: "3",
        songName: `Rangidhamey <br> 
        <div class="subtitle">Varisu</div>`,
        poster: "img/3.jpg",
    },
    {
        id: "4",
        songName: `Pakka Local <br> 
        <div class="subtitle">NenuLocal</div>`,
        poster: "img/4.jpg",
    },
    {
        id: "5",
        songName: `Kommuram Bhemmudo <br> 
        <div class="subtitle">RRR</div>`,
        poster: "img/5.jpg",
    },
    {
        id: "6",
        songName: `Bachelor <br> 
        <div class="subtitle">Akhil</div>`,
        poster: "img/6.jpg",
    },
    {
        id: "7",
        songName: `Dhosthi <br> 
        <div class="subtitle">RRR</div>`,
        poster: "img/7.jpg",
    },
    {
        id: "8",
        songName: `Whistle Song <br> 
        <div class="subtitle">Warrior</div>`,
        poster: "img/8.jpg",
    },
    {
        id: "9",
        songName: `Champesavey <br> 
        <div class="subtitle">Love Today</div>`,
        poster: "img/9.jpg",
    },
    {
        id: "10",
        songName: `Bheeshma <br> 
        <div class="subtitle">Bheeshma</div>`,
        poster: "img/10.jpg",
    },
    {
        id: "11",
        songName: `Priya Madhuram <br> 
        <div class="subtitle">Adhipurush</div>`,
        poster: "img/11.jpg",
    },
    {
        id: "12",
        songName: `kalavathi <br> 
        <div class="subtitle">Mahesh Babu</div>`,
        poster: "img/12.jpg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }

});


const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playListplay')).forEach((el)=>{
        el.classList.remove('bi-play-fill');
        el.classList.add('bi-pause-fill');
    })
}
const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105,105,105,.0)';
    })
}


let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.traget.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;

        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105,105,105,.1)";
        makeAllplays();
        el.traget.classList.remove('bi-pause-fill');
        el.traget.classList.add('bi-play-fill');

    });

});







let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
});
