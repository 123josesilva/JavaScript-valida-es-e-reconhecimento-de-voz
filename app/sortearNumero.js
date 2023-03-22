const nAleatorio = makeNumber();
export const menorN = 1;
export const maiorN = 100;

function makeNumber(){
    return parseInt(Math.random() * maiorN + 1);
}

const getMinValue = document.querySelector('#menor-valor');
const getMaxValue = document.querySelector('#maior-valor');

getMinValue.innerHTML = menorN
getMaxValue.innerHTML = maiorN
