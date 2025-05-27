const images = ["img/batpoker.webp", 
                "img/batandmoon.png",
                "img/corgiball.webp",
                "img/store.webp", 
                "img/gangstabrokol.webp", 
                "img/tennisham.webp",
                "img/antonboat.jfif",
                "img/aatroxrene.webp",
                "img/icecream.jpg",
                "img/icecream2.jpg",
                "img/gatto.webp",
                "img/biggergatto.webp",
                "img/shah.jpg",
                "img/minion.png",
                "img/djizusa.png"];
let currentIndex = 0;

function previousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("painting").src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("painting").src = images[currentIndex];
}
