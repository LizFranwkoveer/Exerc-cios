function criarPrduto(nome, preco) {
    return {
        nome,
        preco,
        deconto: 0.1
    }
}

console.log(criarPrduto('Notebook', 2199.49))
console.log(criarPrduto('iPad', 1199.49))