function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000) //neste caso como é contexto lexico por causa da arrow o this não varia
}

new Pessoa