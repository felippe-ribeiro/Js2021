//operador ... rest(juntar)/spread(espalhar)
//usar rest com parâmetro de função


//spread com objeto
const funcionario = {nome: 'Maria', salario: 123456.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['Jo', 'Pe', 'Glírua']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)