function PromRangoEspecificado(array, inicio, fin) {
    let sum = 0;
    let cantidad = 0;
  
    for (let i = inicio; i <= fin; i++) {
      sum = sum + array[i];
      console.log(array[i])
      cantidad=cantidad+1;
    }
  
    console.log(sum, cantidad)


    var media = sum / cantidad;
    return media;
  }
  
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log(PromRangoEspecificado(array, 2, 6));
  
