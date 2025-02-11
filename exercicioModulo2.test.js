const divisor = require('./codigo')
const getPrimeiro = require('./codigo')
const getUltimo = require('./codigo')

describe('Exercício Módulo - 2', () => {
    
    it('Máximo divisor comum', () => {
        expect(divisor(15,20)).toBe(1,1)
    });

    it('deve retornar o primeiro número do array', () => {
    expect(getPrimeiro(1, 2, 3, 4, 5)).toBe(1);
    });

    it('deve retornar o último número do array', () => {
    expect(getUltimo(1, 2, 3, 4, 5)).toBe(5);
    });

    it('Multiplos', () => {
        expect(adiciona(0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 994)).toBe(1729);
    });

});