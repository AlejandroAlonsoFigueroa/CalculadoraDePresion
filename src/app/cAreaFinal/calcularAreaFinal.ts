export function calcularAreaFinal(areaBase: number, areaSuperior: number){
    if(areaBase< 1 || areaSuperior<1){
        return -1;
    }
    let areaFinal = 0;

    areaFinal = areaBase + areaSuperior;

    return areaFinal;
}