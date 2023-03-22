const elementoChute = document.querySelector('#chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;


const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e){

    let chute = e.results[0][0].transcript;

    printChute(chute);
    verificaChute(chute);

}

function  printChute(chute){
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span id="box">${chute}</span>
     `

}