function calcularTotal(carrinho) {
    let total = 0;
    carrinho.forEach(item => {
        total += item.preco;
    });

    if (total > 200) {
        let desconto = total * 0.10; // Aplica desconto de 10%
        total -= desconto;
    }

    return total;
}


module.exports = { calcularTotal };