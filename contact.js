function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('show-menu');
  }
  let isFilm3 = true;

  function toggleVideo() {
    const video = document.getElementById("backgroundVideo");
    const source = video.querySelector("source");

    if (isFilm3) {
      source.src = "FILM4.mp4";
      document.body.classList.add("black-text");
    } else {
      source.src = "FILM3.mp4";
      document.body.classList.remove("black-text");
    }

    isFilm3 = !isFilm3;
    video.load();
    video.play();
  }