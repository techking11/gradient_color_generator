'use strict';

let firstColor = document.querySelector('.firstColor span');
let firstInput = document.querySelector('.firstColor input');
let secondColor = document.querySelector('.secondColor span');
let secondInput = document.querySelector('.secondColor input');

let bgColor = document.querySelector('body');
let bgDir = document.querySelector('select');
let d = document.querySelector('.d');
let first = document.querySelector('.first');
let second = document.querySelector('.second');

firstInput.value = '#2a9d8f';
firstColor.textContent = '#2a9d8f';
secondInput.value = '#264653';
secondColor.textContent = '#264653';

let setBackground = (args) => {
    let {fstColor = firstInput.value, sndColor = secondInput.value, position = bgDir.value} = args;
    let resultText = `linear-gradient(${position}, ${fstColor}, ${sndColor})`;
    
    bgColor.style.background = resultText;
    firstColor.textContent = fstColor;
    secondColor.textContent = sndColor;
    
    d.textContent = position + ',';
    first.textContent = fstColor+',';
    second.textContent = sndColor;
    
}

setBackground({fstColor : firstInput.value, sndColor : secondInput.value, position : bgDir.value});

firstInput.addEventListener('input', event => {
   setBackground({fstColor : event.target.value});
});

secondInput.addEventListener('input', event => {
   setBackground({sndColor : event.target.value});
});

bgDir.addEventListener('change', event => {
   setBackground({position : event.target.value}) ;
});