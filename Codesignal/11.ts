function solution(n: number): boolean {

    let digitos=(n.toString().length)/2
    
    let parte1=((n.toString().slice(0,digitos)).split('')).map(Number)
    let parte2=((n.toString().slice(digitos,digitos+digitos)).split('')).map(Number)
    
    let half1=parte1.reduce((x, y) => x + y)
    let half2=parte2.reduce((x, y) => x + y)
    
    if(half1===half2){return true}else{return false}
    
    }
    