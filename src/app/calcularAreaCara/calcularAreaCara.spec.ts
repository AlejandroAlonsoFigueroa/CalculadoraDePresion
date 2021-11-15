import {calcularAreaCara} from "./calcularAreaCara"

describe('calcularAreaCara', () => {
    it('Debe retornar un entero positivo', () => {
                    // Arrange
                let resultado = 0;
                
                // Act
                resultado = calcularAreaCara(4,5);

                // Assert
                expect(resultado).toBe(10);
    })

    it('Debe retornar un decimal positivo', () => {
        // Arrange
    let resultado = 0;
    
    // Act
    resultado = calcularAreaCara(3.5,5.0);

    // Assert
    expect(resultado).toBe(8.75);
})

it('Debe retornar el código de error -1', () => {
    // Arrange
let resultado = 0;

// Act
resultado = calcularAreaCara(-3.5,5.0);

// Assert
expect(resultado).toBe(-1);
})

it('Debe retornar cero', () => {
    // Arrange
let resultado = 0;

// Act
resultado = calcularAreaCara(0, 6);

// Assert
expect(resultado).toBe(0);
})









});