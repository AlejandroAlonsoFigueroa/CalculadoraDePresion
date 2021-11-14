


export function calcularAreaBase(base: number) {  
  // Refactoring
  
  let resultado = 0;
  resultado = base * 4;

  if(base<0){
    return -1;
  }
  return resultado;
}