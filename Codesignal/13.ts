function solution(inputString: string): string {

    while (inputString.includes('(')) {
       
        let parteizquierda = inputString.substring(0, inputString.lastIndexOf('('));
        let centro = inputString.substring(inputString.lastIndexOf('(') + 1, inputString.indexOf(')',
        inputString.lastIndexOf('(')));
        let partederecha = inputString.substring(inputString.indexOf(')', inputString.lastIndexOf('(')) + 1);
        inputString = parteizquierda + centro.split('').reverse().join('') + partederecha;
    }
    return inputString;

}
