const mazeImg = document.getElementById("maze");
const popup = document.getElementById("popup");
const canvas = document.getElementById("maze-canvas");
const ctx = canvas.getContext("2d");

// Sound Logic
const scareSound = document.getElementById("maze-sound");
let hasPlayed = false;


mazeImg.onload = () => {
    canvas.width = mazeImg.naturalWidth;
    canvas.height = mazeImg.naturalHeight;
    ctx.drawImage(mazeImg, 0, 0);

    mazeImg.addEventListener("mousemove", (e) => {
        const rect = mazeImg.getBoundingClientRect();

        // Mouse relativity to screen
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const scaleX = mazeImg.naturalWidth / rect.width;
        const scaleY = mazeImg.naturalHeight / rect.height;

        const x = Math.floor(mouseX * scaleX);
        const y = Math.floor(mouseY * scaleY);

        if (x < 0 || y < 0 || x >= canvas.width || y >= canvas.height) {
            popup.style.display = "none";
            return;
        }

        const pixel = ctx.getImageData(x, y, 1, 1).data;
        const alpha = pixel[3];

        // Detect when mouse is touching maze
        if (alpha > 0) {
            popup.style.display = "block";

            if (!hasPlayed) {
                hasPlayed = true;
                scareSound.currentTime = 0;
                scareSound.play();

                setTimeout(() => {
                    window.location.href = "index.html";
                }, 2000);
            }
        }
    });

    mazeImg.addEventListener("mouseleave", () => {
        popup.style.display = "none";
    });
};

// Key Logic


