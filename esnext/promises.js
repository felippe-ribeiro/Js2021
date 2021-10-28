function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve(frase) //promise aceita só um parametro de retorno
            reject(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(5, 'Nossa eu falei só depois de 5 segundos')
    .then(frase => frase.concat(' , e ainda adicionei essa frase aqui também!!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))