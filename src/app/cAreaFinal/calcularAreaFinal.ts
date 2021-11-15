export function calcularAreaFinal(areaBase: number, areaSuperior: number){
    if(areaBase< 0 || areaSuperior<0){
        return -1;
    }
    let areaFinal = 0;

    areaFinal = areaBase + areaSuperior;

    return areaFinal;
}