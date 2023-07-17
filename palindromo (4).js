function esPalindromo(texto) {

    const textoFormateado = 
    (texto.toLowerCase().replace(/[^a-záéíóúüñ]/gi, '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, ''));

    console.log(textoFormateado);

    const textoReverso = textoFormateado.split('').reverse().join('');
    return textoFormateado === textoReverso;

}
  
  console.log(esPalindromo("¿Acaso hubo búhos acá?"));
  
  