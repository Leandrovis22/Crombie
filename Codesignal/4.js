function solution(inputArray) {

    var aux=0;
    var mayor=-1000;
    
    for (let i = 0; i <= ((inputArray.length)); i++) {
        var contador=i+1;
      aux = inputArray[i]*inputArray[contador];
      
      if(aux>mayor){
          
        mayor=aux
          
      }
      console.log(aux, mayor, contador);
    }
    
    return mayor;
    
    }
    