const btn = document.querySelector('button');


function randomColorGenerator () {
    const randomR = Math.floor(Math.random()*251);
    const randomG = Math.floor(Math.random()*251);
    const randomB = Math.floor(Math.random()*251);


    return `rgb(${randomR}, ${randomG}, ${randomB})`;
}


btn.addEventListener('click', function (event) {

    const randomColor = randomColorGenerator();

    btn.textContent = randomColor;

    document.body.style.backgroundColor = randomColor;
})