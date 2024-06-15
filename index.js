const image_array = [
    'dice1.png',
    'dice2.png',
    'dice3.png',
    'dice4.png',
    'dice5.png',
    'dice6.png'
];

function dice() {
    const firstDice = Math.floor(Math.random() * image_array.length);
    const secondDice = Math.floor(Math.random() * image_array.length);

    const selected_image1 = image_array[firstDice];
    const selected_image2 = image_array[secondDice];

    document.getElementsByClassName("img1")[0].src = `./images/${selected_image1}`;
    document.getElementsByClassName("img2")[0].src = `./images/${selected_image2}`;

    const heading = document.querySelector("h1");

    if(firstDice > secondDice){
        heading.textContent = "Player 1 Wins!";
    }
    else if(firstDice < secondDice){
        heading.textContent = "Player 2 Wins!"
    }
    else{
    heading.textContent = "It's a Draw!"
    }


}
