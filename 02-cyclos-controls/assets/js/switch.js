
const dia = 9; // 0: Domingo

switch( dia ) { 
    case 0:
        console.log(`${dia} por tanto es Domingo`);
        break;
    case 1:
        console.log(`${dia} por tanto es Lunes`);
        break;
    case 2:
        console.log(`${dia} por tanto es Martes`);
        break;
    case 3:
        console.log(`${dia} por tanto es Miércoles`);
        break;
    case 4:
        console.log(`${dia} por tanto es Jueves`);
        break;
    case 5:
        console.log(`${dia} por tanto es Viernes`);
        break;
    case 6:
        console.log(`${dia} por tanto es Sábado`);
        break;
    default: // este es para cualquier otro caso que no sean los anteriores, el else de los if
        console.log('No se en que día vives Rey, míratelo 🙁');
};
/*
El switch hace un === (triple igual) a lo que le demos como parámetro por tanto, si en vez de darle, en este caso, un número entero entre 0 y 6 le damos un string con el número, '4', no nos daría nada ya que no es ===
Por tanto, si vamos a trabajar con string, en los cases deberán haber strings
Y la palabra 'break' es necesaria para que pare de ejecutar el código sino, en cuento se da el caso que sea, empezará a ejecutar de ese caso en adelante hasta que se acabe el switch
*/