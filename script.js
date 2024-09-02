const colors = ["gray","green", "red", "yellow", "blue","cadetblue","pink","violet","brown","#F1f5f8"];

function changeColor() {
    
    let randomNo = getRandomNo();
    document.body.style.backgroundColor = colors[randomNo];
    document.getElementById('color').textContent = colors[randomNo];
    document.getElementById('color').style.color = colors[randomNo];
    
}

function getRandomNo() {
    return Math.floor(Math.random() * colors.length);
}