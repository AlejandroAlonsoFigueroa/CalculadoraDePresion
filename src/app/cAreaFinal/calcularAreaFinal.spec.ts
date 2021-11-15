import { calcularAreaFinal } from "./calcularAreaFinal";

describe('calcularAreaFinal', () => {
    it('Debe retornar un entero positivo', () => {
        // Arrange
        let resultado = 0;
        
        // Act
        resultado = calcularAreaFinal(50,150);

        // Assert
        expect(resultado).toBe(200);
})

it('Debe retornar un decimal positivo', () => {
    // Arrange
    let resultado = 0;
    
    // Act
    resultado = calcularAreaFinal(50,150.15);

    // Assert
    expect(resultado).toBe(200.15);
})

it('Debe retornar un -1', () => {
    // Arrange
    let resultado = 0;
    
    // Act
    resultado = calcularAreaFinal(-50,150.15);

    // Assert
    expect(resultado).toBe(-1);
})


it('Debe retornar el mismo resultado de -1', () => {
    // Arrange
    let resultado = 0;
    
    // Act
    resultado = calcularAreaFinal(50.46, 0);

    // Assert
    expect(resultado).toBe(-1);
})










});

