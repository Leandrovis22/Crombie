function solution(picture: string[]): string[] {

    let linea_asterisco = "*".repeat(picture[0].length + 2);
    let con_borde = [linea_asterisco];
    
    for (let i = 0; i < picture.length; i++) {
        con_borde.push("*" + picture[i] + "*");
    }
    
    con_borde.push(linea_asterisco);
    
    return con_borde;

}
