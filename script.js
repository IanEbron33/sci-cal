const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const audio = document.getElementById('bgAudio');
let input = '';

const lyrics = [
  "Sa'yong yakap",
  "ako'y nasasabik",
  "pagka't ikaw lang",
  "ang nais makatabi",
  "malamig man o",
  "mainit ang gabi",
  "nais ko sanang iparating",
  "na ikaw lamang", 
  "ang siyang aking",
  "iibigin"
];

const lyricsDelay = [1000, 3100, 1000, 3800, 1000, 3000, 7000, 2000, 4000, 20000];

function showLyrics() {
  audio.currentTime = 0;
  audio.play(); 
  let index = 0;

  function nextLine() {
    if (index >= lyrics.length) {
      audio.pause();
      return;
    }

    display.classList.add('fade-out');
    setTimeout(() => {
      display.textContent = lyrics[index++];
      display.classList.remove('fade-out');
      display.classList.add('fade-in');
      setTimeout(() => {
        display.classList.remove('fade-in');
        nextLine();
      }, lyricsDelay[index - 1]);
    }, 800);
  }

  nextLine();
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.textContent.trim() === '=') {
      showLyrics();
    } else {
      input += btn.textContent.trim();
      display.textContent = input;
    }
  });
});
