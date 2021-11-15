


export function calcularAreaBase(base: number) {  
  // Refactoring
  
  let resultado = 0;
  resultado = base * base;

  if(base<0){
    return -1;
  }
  return resultado;
}