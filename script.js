const pianoKeys = document.querySelectorAll(".key");
const keysMap = ["02", "04", "06", "09", "11", "14", "16", "18", "21", "23", "01", "03", "05", "07", "08", "10", "12", "13", "15", "17", "19", "20", "22", "24"]

function playSound(newUrl) {
    new Audio(newUrl).play();
    console.log(newUrl);
}

pianoKeys.forEach((pianoKey, i) => {
    const newUrl = `24-piano-keys/key${keysMap[i]}.mp3`;
    pianoKey.addEventListener("click", () => playSound(newUrl));
})