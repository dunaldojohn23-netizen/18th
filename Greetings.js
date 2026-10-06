const music = document.getElementById('bg-music');
const form = document.getElementById("surprise-form");


if (form && music) {
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        sessionStorage.setItem("musicTime", music.currentTime);
        window.location.href = "Surprise.html";
    });
}

if (!form && music) {
    const savedTime = sessionStorage.getItem("musicTime");
    if (savedTime !== null) {
        music.currentTime = parseFloat(savedTime);
    }

    music.play().catch(function(error) {
        console.log("Autoplay was blocked:", error);
    });
}