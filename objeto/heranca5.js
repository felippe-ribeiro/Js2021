console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function ()  {
    return this.split('').reverse().join('')
}

console.log('Felippe de Barros Ribeiro'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([0,1,2,3,4,5].first())
console.log(['a','b','b'].first())

//substituindo os que existe, não fazer gera efeitos ruins apenas para efeito didatico
String.prototype.toString = function() {
    console.log('Lascou o bregueinait')
}

console.log('Felippe Ribeiro'.reverse())