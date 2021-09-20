Object.prototype.attr0 = 'Prototype'
//cadeia de prototipos
const avo = {attr: 'A'}
const pai = {__proto__:avo, attr2: 'B', attr3: 'D'}
const filho = {__proto__:pai, attr3: 'C'}

console.log(filho.attr, filho.attr2, filho.attr3)
console.log(filho.attr0)
console.log(pai.attr3)


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing --> sombreou atributo pai
}
const volvo = {
    modelo: 'V40',
    status(){
        //super para referenciar prototipo
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
console.log(ferrari)
console.log(volvo)
volvo.acelerarMais(100)
console.log(volvo.status())
ferrari.acelerarMais(300)
console.log(ferrari.status())
