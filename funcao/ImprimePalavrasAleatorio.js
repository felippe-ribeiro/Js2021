function textoAleatorio(){
    var letras = 'abcdefghijklmnopqrstuvwxyz';
    var aleatorio = '';
    for (var i = 0; i < 5 ; i++) {
        var rnum = Math.floor(Math.random() * letras.length);
        aleatorio += letras.substring(rnum, rnum + 1);

    }
    return aleatorio;
}


for (var j = 0; j < 10 ; j++) { 
    console.log(textoAleatorio());
 }

