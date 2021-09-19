let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)
comparaComThis(this)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // diferente a function a arrow function não muda
comparaComThisArrow(module.exports)
