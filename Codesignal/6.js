function solution(statues) {
    let cantidad = 0;
    
    let arrayordenado = statues.sort(function(a, b) {
      return a - b;
    });
    
    for (let i = 0; i < arrayordenado.length - 1; i++) {
      if (arrayordenado[i + 1] - arrayordenado[i] > 1) {
        cantidad += arrayordenado[i + 1] - arrayordenado[i] - 1;
      }
    }
    
    return cantidad;
  }
  