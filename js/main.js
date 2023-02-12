/* Assegnazione alle variabili degli elementi */
const main = document.querySelector("main");
const button = document.getElementById("button-click-me");
const colorText = document.getElementById("color-text");
const colorFlipper = document.getElementById("color-flipper");
const simple = document.getElementById("simple");
const hex = document.getElementById("hex");

/* Array di colori semplici */
const color = ["red", "blue", "green", "cyan", "grey", "yellow", "purple", "black", "white"];

/* esecuzione del comando per assegnare un valore iniziale */
changeSimpleColor();

/* Funzione per i colori semplici */
function changeSimpleColor() {
    let randomColor = color[Math.floor(Math.random() * 9)];
    main.style.background = randomColor;
    button.style.background = randomColor;

    colorText.innerText = randomColor.toString().toUpperCase();
    colorText.style.color = randomColor.toString();

    if (randomColor === "black" || randomColor === "blue") {
        button.style.color = "white";
        button.style.borderColor = "white";
    } else {
        button.style.color = "black";
        button.style.borderColor = "black";
    }

    return randomColor;
};

/* Funzione per i colori esadecimali */
function changeHexColor() {

    let randomColor = "rgb(" + Math.floor(Math.random() * 256) + " , " + Math.floor(Math.random() * 256) + " , " + Math.floor(Math.random() * 256) + ")";
    main.style.background = randomColor;
    button.style.background = randomColor;
    colorText.innerText = randomColor.toString().toUpperCase();
    colorText.style.color = randomColor.toString();

    return randomColor;
}


/* Funzione per i colori random */
function changeColorFlipper() {
    let simpleColor = changeSimpleColor();
    let hexColor = changeHexColor();
    console.log(hexColor);
    let randomArray = [simpleColor, hexColor];
    let randomColor = randomArray[Math.floor(Math.random() * 2)];

    console.log(randomColor);
    main.style.background = randomColor;
    button.style.background = randomColor;

    colorText.innerText = randomColor.toString().toUpperCase();
    colorText.style.color = randomColor.toString();

    if (randomColor === "black" || randomColor === "blue") {
        button.style.color = "white";
        button.style.borderColor = "white";
    } else {
        button.style.color = "black";
        button.style.borderColor = "black";
    }
};

let colorFunction = changeColorFlipper;

button.addEventListener("click", colorFunction);

simple.addEventListener("click", () => {
    button.removeEventListener("click", changeColorFlipper);
    button.removeEventListener("click", changeHexColor);
    button.addEventListener("click", changeSimpleColor);
});

colorFlipper.addEventListener("click", () => {
    button.removeEventListener("click", changeSimpleColor);
    button.removeEventListener("click", changeHexColor);
    button.addEventListener("click", changeColorFlipper);
});

hex.addEventListener("click", () => {
    button.removeEventListener("click", changeColorFlipper);
    button.removeEventListener("click", changeSimpleColor);
    button.addEventListener("click", changeHexColor);
});