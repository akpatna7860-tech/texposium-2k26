let progress = 0;
let progressBar = document.getElementById("progress-bar");
let percentage = document.getElementById("percentage");

let interval = setInterval(() => {
    progress++;
    progressBar.style.width = progress + "%";
    percentage.innerText = progress + "%";

    if (progress >= 100) {
        clearInterval(interval);

        setTimeout(() => {
            document.getElementById("preloader").style.display = "none";
            document.getElementById("main-content").style.display = "flex";
        }, 500);
    }

}, 30); // speed (lower = faster)
