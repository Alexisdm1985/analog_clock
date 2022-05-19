const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const houreHand = document.querySelector('.hour-hand');


const time = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    
    const secondsDegree = ((second / 60) * 360);
    const minutesDegree = ((minute / 60) * 360);
    const hoursDegree = ((hour / 12) * 360);
    
    secondHand.style.transform = `rotate(${secondsDegree}Deg)`;
    minuteHand.style.transform = `rotate(${minutesDegree}Deg)`;
    houreHand.style.transform = `rotate(${hoursDegree}Deg)`;
};

setInterval(time, 1000);


// Falta mejorar el codigo, metiendo mas funciones?
// Quizas agregar sonidos al segundero
// probar otros estilos