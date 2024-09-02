const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function changeColor() {
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNo()];
      }

    document.body.style.backgroundColor = hexColor;
    document.getElementById('color').textContent = hexColor;
    document.getElementById('color').style.color = hexColor;
    
}

function getRandomNo() {
    return Math.floor(Math.random() * hex.length);
}