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

  const sliderIndexes = {
    slider1: 0,
    slider2: 0,
    slider3: 0,
    slider4: 0,
    slider5: 0,
    slider6: 0
  };
  
  function slide(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    const total = slider.querySelectorAll("img").length;
  
    sliderIndexes[sliderId] =
      (sliderIndexes[sliderId] + direction + total) % total;
  
    slider.style.transform = `translateX(-${sliderIndexes[sliderId] * 100}%)`;
  }
  