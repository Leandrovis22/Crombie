function solution(a: number[]): number[] {

    let par = a.filter((element, index) => index % 2 === 0);
    let impar = a.filter((element, index) => index % 2 !== 0);
    
    let suma1 = par.reduce((a, b) => a + b, 0);
    
    let suma2 = impar.reduce((a, b) => a + b, 0);
    
    return [suma1,suma2]
    
    
    }
    