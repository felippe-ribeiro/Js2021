const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 17 * * 1', function(){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})
// lendo da dir pra esquerda
//  Dia da semana (sendo 0 o domindo, 1 segunda), * qualquer dia do mes, * qualquer mes,
 //17 as 5 da tarde, * qualquer minuto, */5 a cada 5 segundos

 setTimeout(function () {
     tarefa1.cancel()
     console.log('Cancelando Tarefa 1')
 }, 20000) //depois de 20 segundos

 //possibilidades com JS
 //setImmediate
 //setInterval

 const regra = new schedule.RecurrenceRule()
 regra.dayOfWeek = [new schedule.Range(1, 5)]
 regra.hour = 17
 regra.second = 30

 const tarefa2 = schedule.scheduleJob(regra, function() {
     console.log('Executando Tarefa 2', new Date().getSeconds())
 })