const prod1 ={
    nome:'...'
    preco:'45'
} // para ficar ficar repetivo usamos o factory simples

function criarPessoa() {
    return {
        nome:'Ana',
        sobrenome:'Silva'
    }
}

console.log(criarPessoa())