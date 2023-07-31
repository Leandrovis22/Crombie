function solution(inputArray: string[]): string[] {

    let sum = 0;
    
    inputArray.forEach(function(element) {
      
      if(element.length>sum){
          sum=element.length
      }
    });
    
    return (inputArray.filter(x => x.length === sum))
    
    }
    