let song = document.querySelector("#song");
let playBtn = document.querySelector("#play-button");
let pauseBtn = document.querySelector("#pause-button");

song.volume = 0.1;

playBtn.addEventListener('click', function () {
    song.play();
})

pauseBtn.addEventListener('click', function () {
    song.pause();
})

song.onloadeddata = function () {
    console.log("song loaded")
}
