function solution(arr: number[]): boolean {

    let removido = false;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            if (removido) {
                return false;
            } 
            
            if (i === 1 || arr[i] > arr[i - 2]) {
                arr.splice(i - 1, 1);
            } 
            else {
                arr.splice(i, 1);
            }
            
            removido = true;
            i--; 
        }
    }
    
    return true;

}
