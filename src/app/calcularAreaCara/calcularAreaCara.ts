export function calcularAreaCara(base: number, altura: number) {  
    // Refactoring
    
    if(base<0 || altura<0){
        return -1;
    }
    let areaCara = 0;
    areaCara = (base * altura) /2;
    return areaCara;
}