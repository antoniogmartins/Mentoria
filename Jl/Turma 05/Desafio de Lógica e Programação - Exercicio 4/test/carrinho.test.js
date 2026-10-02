const { calcularTotal } = require('../source/carrinho');

test('Quando o somatorio for menor que 200, deve calcular o total sem desconto', () => {

    const carrinho = [
        { nome: "Arroz", preco: 100 },
        { nome: "Feijão", preco: 50 }
    ];

    expect(calcularTotal(carrinho)).toBe(150);  

});

test('Quando o somatorio for igual a 200, deve calcular o total sem desconto', () => {

    const carrinho = [
        { nome: "Arroz", preco: 100 },
        { nome: "Feijão", preco: 100 }
    ];

    expect(calcularTotal(carrinho)).toBe(200);  

});

test('Quando o somatorio for maior que 200, deve calcular o total com desconto', () => {

    const carrinho = [
        { nome: "Arroz", preco: 100 },
        { nome: "Feijão", preco: 200 }
    ];

    expect(calcularTotal(carrinho)).toBe(270);  

});
