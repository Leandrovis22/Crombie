function multiplicarX5(array) {
    
  
    for (let i = 0; i < array.length; i++) {
        array[i] *= 5;
    }
  
    return array;
  }
  
  
  var resultado = multiplicarX5([1, 2, 3, 4, 5]);
  console.log(resultado);
  