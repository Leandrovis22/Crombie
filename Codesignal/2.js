function solution(year) {

    var num1=1;
    var num2=100;
    
    for (let i = 1; i < 24; i++) {
      if((num1 <= year && year <= num2)){
          return i;
      }
      var aux=num2
      num2=num2+100;
      num1=aux+1;
      
      console.log(num1, num2)
    }
    
    }
    