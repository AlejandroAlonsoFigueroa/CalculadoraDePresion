import { calcularAreaSuperior } from "./calcular-area-superior";

describe('calcularAreaSuperior', () => {
    it('Debe retornar un entero positivo', () => {
        // Arrange
        let resultado = 0;
        
        // Act
        resultado = calcularAreaSuperior(3);

        // Assert
        expect(resultado).toBe(12);
})

it('Debe retornar un decimal positivo', () => {
    // Arrange
    let resultado = 0;
    
    // Act
    resultado = calcularAreaSuperior(3.5);

    // Assert
    expect(resultado).toBe(14);
})

it('Debe retornar cero', () => {
    // Arrange
    let resultado = 0;
    
    // Act
    resultado = calcularAreaSuperior(0);

    // Assert
    expect(resultado).toBe(0);
})

it('Debe retornar -1', () => {
    // Arrange
    let resultado = 0;
    
    // Act
    resultado = calcularAreaSuperior(-29);

    // Assert
    expect(resultado).toBe(-1);
})








});

