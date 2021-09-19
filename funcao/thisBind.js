const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e Orientação a Obj.

const falarDePessoa = pessoa.falar.bind(pessoa) // quer dizer que sempre this será de pessoa
falarDePessoa()