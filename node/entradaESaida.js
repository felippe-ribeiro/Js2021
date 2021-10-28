const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala ai Anônimo!\n')
    process.exit()
}else{
    process.stdout.write('Informe o nome:')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ai ${nome}!!\n`)
        process.exit()
    })
}