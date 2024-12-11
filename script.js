const images = ["batpoker.webp", 
                "batandmoon.png",
                "corgiball.webp",
                "store.webp", 
                "gangstabrokol.webp", 
                "tennisham.webp",
                "antonboat.jfif",
                "aatroxrene.webp",
                "icecream.jpg",
                "icecream2.jpg",
                "gatto.webp",
                "biggergatto.webp",
                "shah.jpg",
                "minion.png",
                "djizusa.png"];
let currentIndex = 0;

function previousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("painting").src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("painting").src = images[currentIndex];
}
