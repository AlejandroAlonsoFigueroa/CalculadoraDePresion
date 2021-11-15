export function calcularAreaSuperior(areaCara: number){

    if(areaCara<0){
        return -1;
    }
    let areaTotalCarasSuperiores = 0;
    areaTotalCarasSuperiores = areaCara*4;
    return areaTotalCarasSuperiores;


}