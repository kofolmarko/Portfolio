pauseBtn = document.querySelector("#pauseBtn");
playBtn = document.querySelector("#playBtn");

pauseBtn.addEventListener("click", () => {
    videos = document.getElementsByClassName("video");
    console.log(videos);
    for (let i = 0; i < videos.length; i++) {
        videos[i].pause();

    }
    pauseBtn.classList.add("hide");
    playBtn.classList.remove("hide");
});

playBtn.addEventListener("click", () => {
    for (let i = 0; i < videos.length; i++) {
        videos[i].play();
    }
    pauseBtn.classList.remove("hide");
    playBtn.classList.add("hide");
})