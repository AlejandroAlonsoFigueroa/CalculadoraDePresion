

import { calcularAreaBase } from './c-area-base.component';

describe('calcularAreaBase', () => {
  it('Should return 2 cm * 4 lados = 8cm', () => {
    // Pattern AAA (Arrange - Act - Assert)

    // Arrange
    let result = 0;
    
    // Act
    result = calcularAreaBase(2);

    // Assert
    expect(result).toBe(8);
})

it('Should return 2.5 cm * 4 lados = 10cm', () => {
  // Pattern AAA (Arrange - Act - Assert)

  // Arrange
  let result = 0;
  
  // Act
  result = calcularAreaBase(2.5);

  // Assert
  expect(result).toBe(10);
})

it('Should return 0 cm * 4 lados = 0cm', () => {
  // Pattern AAA (Arrange - Act - Assert)

  // Arrange
  let result = 0;
  
  // Act
  result = calcularAreaBase(0);

  // Assert
  expect(result).toBe(0);
})

it('Should return -2 cm * 4 lados = Error (-1)', () => {
  // Pattern AAA (Arrange - Act - Assert)

  // Arrange
  let result = 0;
  
  // Act
  result = calcularAreaBase(-2);

  // Assert
  expect(result).toBe(-1);
})
  

});
