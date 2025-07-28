function playAudio(play) {
    var audio = document.getElementById("gameSound");
    var source = audio.querySelector("source");

    audio.pause();
    source.src = play;
    audio.load();
    audio.play();
}