function solution(a: number[]): number[] {

    let ubicacion= (a.map((e, i) => e === -1 ? i : '').filter(String)) as number[]
    
    let array_sin_menos_1= a.filter(num => num !== -1);
    
    let array_ordenado=array_sin_menos_1.sort((a, b) => a - b);
    
    let resultado: number[] = array_ordenado.slice()
    
    for (let i=0; i< ubicacion.length; i++) { 
      resultado.splice(ubicacion[i], 0, -1); 
    }
    
    return resultado
    
    }
    