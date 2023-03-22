import {menorN} from './sortearNumero';
import {maiorN} from './sortearNumero';




function verificaChute(chute){
    const n = +chute

    if(v1(n)){
        console.log("Valor invalido")
    }

    if(v2(n)){
        console.log(`Valor Invalido!! O número secreto está entre ${menorN} e ${maiorN}` )

    }

}


function v1(n){
    return Number.isNaN(n);
}

function v2(){
    return n > maiorN || n < menorN;
}