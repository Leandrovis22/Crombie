function solution(matrix: number[][]): number {

    let sum = 0;
    
      for (let col = 0; col < matrix[0].length; col++) {
          for (let row = 0; row < matrix.length; row++) {
             
              if (matrix[row][col] === 0) break;
              sum += matrix[row][col];
          }
      }
      //se hace un check de izquierda a derecha y baja al siguiente array, de izquierda a derecha
      //no entiendo por que funciona si no checkea que los de arriba no sean 0, solo checkea el actual, que pasa si hay un 0 dos niveles arriba, deberia fallar
      return sum;
  }
  