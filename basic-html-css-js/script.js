const randomNumber = Math.floor(Math.random() * 100) + 1;
var contador=1

function checkGuess() {
    document.getElementById("valorvariable").innerHTML=contador
    console.log("randomNumber", randomNumber);
    let guess = parseInt(document.getElementById('guessInput').value);
    let result = document.getElementById('result');
    contador++

    if (guess < 0){
        result.innerHTML = 'No sirve, debe ser mayor a -1';
    }else if (guess < randomNumber){
        result.innerHTML = 'Intenta con un número más alto.';
    }else if(guess > 100){
        result.innerHTML = 'No sirve, debe ser menor que 100';
    }else if (guess === randomNumber) {
        result.innerHTML = '¡Felicitaciones! ¡Adivinaste el número!';
    } else {
        result.innerHTML = 'Intenta con un número más bajo.';
    }
}
