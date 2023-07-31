function solution(inputString) {

    var letter;
    var nueva='';
    
    for (let i = 0; i < ((inputString.length)); i++) {
      letter = inputString[i]
      nueva=letter+nueva
    }
    console.log(nueva, (inputString===nueva))
    return (inputString===nueva);
    
    }