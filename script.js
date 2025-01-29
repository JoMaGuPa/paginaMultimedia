// Controles del vídeo
const video = document.getElementById("main-video");
const playPauseBtn = document.getElementById("play-pause");
const muteUnmuteBtn = document.getElementById("mute-unmute");
const restartBtn = document.getElementById("restart");

playPauseBtn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = "⏸️";
    } else {
        video.pause();
        playPauseBtn.textContent = "⏯️";
    }
});

muteUnmuteBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    muteUnmuteBtn.textContent = video.muted ? "🔊" : "🔇";
});

restartBtn.addEventListener("click", () => {
    video.currentTime = 0;
    video.play();
    playPauseBtn.textContent = "⏸️";
});


// Reproductor de música con playlist
const audio = document.getElementById("audio-element");
const playlist = document.getElementById("playlist");
const tracks = playlist.querySelectorAll("li");

tracks.forEach((track) => {
    track.addEventListener("click", () => {
        tracks.forEach((t) => t.classList.remove("active"));
        track.classList.add("active");
        audio.src = track.dataset.src;
        audio.play();
    });
});

// Controles de zoom para la galería
const zoomInBtn = document.getElementById("zoom-in");
const zoomOutBtn = document.getElementById("zoom-out");
const galleryImages = document.querySelectorAll(".grid-container img");

let zoomLevel = 1; 

zoomInBtn.addEventListener("click", () => {
    zoomLevel += 0.1;
    updateGalleryZoom();
});

zoomOutBtn.addEventListener("click", () => {
    zoomLevel = Math.max(0.5, zoomLevel - 0.1);
    updateGalleryZoom();
});

function updateGalleryZoom() {
    galleryImages.forEach((img) => {
        img.style.transform = `scale(${zoomLevel})`;
        img.style.transition = "transform 0.3s";
    });
}
