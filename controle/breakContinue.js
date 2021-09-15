const nums = [1,2,3,4,5,6,7,8,9,10]

for (let x in nums){
    if(x == 5){
        break
    } 
    console.log(`Índice ${x} = ${nums[x]}`)
}
console.log('\n')
for (let x in nums){
    if(x == 5){ // neste caso só interrompeu a execução 5 e foi para próxima
        continue
    } 
    console.log(`Índice ${x} = ${nums[x]}`)
}

externo: // isso é um rotulo para o primeiro for
for (let a in nums){
    for (let b in nums) {
        if(a == 2 && b == 3) break externo // neste caso o break é para o rótulo externo
        console.log(`Par = ${a},${b}`)
    }
}