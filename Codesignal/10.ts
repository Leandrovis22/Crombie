function solution(s1: string, s2: string): number {
    let common = 0;
    let arr1 = s1.split('').sort();
    let arr2 = s2.split('').sort();

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                common++;
                arr2.splice(j, 1);
                break;
            }
        }
    }
    return common;
}