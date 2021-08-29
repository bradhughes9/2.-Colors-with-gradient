//This function will generate a random number for our RGB to change the background color
const changeToFunkyColor = () => {
    const r1 = Math.floor(Math.random()*16777215).toString(16);
    const r2 = Math.floor(Math.random()*16777215).toString(16);
    let color1 = '#' + r1;
    let color2 = '#' + r2;

    //info to tell the user what the background is
  

    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    document.getElementById('info').innerHTML = `background: linear-gradient(to right, ${color1}, ${color2})`;
    }

//Now make the element you want to color
//and put it through the function with an onclick function
const buttonElement = document.getElementById('button');
const changeColor = document.getElementById('changeMe'); 

buttonElement.addEventListener('click', () => {
    changeToFunkyColor();
});