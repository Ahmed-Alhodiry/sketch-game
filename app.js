
let color= 'green';

function start(size){
    
    let board = document.querySelector('.board');
    let squres = board.querySelectorAll('div');
    squres.forEach((div)=>div.remove());
    board.style.gridTemplateColumns = `repeat(${size} ,1fr)`;
    board.style.gridTemplateRows = `repeat(${size} ,1fr)`;
    for(let i = 0 ; i < size * size; i++)
    {
        let squre = document.createElement('div');
        squre.style.background = 'red';
        squre.addEventListener("mouseover", setColor);
        board.insertAdjacentElement('beforeend',squre);
    }
    
}
function changeColor(a)
{
    color = a;

}
function setColor(){
    console.log(color);
    this.style.backgroundColor=`${color}`;

}
function changeSize(){
    let value = document.querySelector('#slider');
    start(value.value);
    document.querySelector('.value').innerHTML = value.value;
}

start(16);

