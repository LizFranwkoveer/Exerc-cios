const nome = 'Rebeca'
const concatenacao = 'olá ' + nome + '!'
const template = `
Olá
${nome}!`
console.log(concatenacao, template)

// expressão...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)