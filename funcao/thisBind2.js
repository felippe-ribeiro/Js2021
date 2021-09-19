function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function () {
        self.idade++
        console.log('com constante self: ' + self.idade)
    }/*.bind(this)*/, 1000)
}
function Pessoa2() {
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log('usando o bind: ' + this.idade)
    }.bind(this), 1000)
}

new Pessoa
new Pessoa2