Template.lista_numeros.helpers({
    converterNumero(numero){
        return (numero>=10)? numero:'0'+ numero;
    },
    ordenar(arrayNumeros){

        return arrayNumeros;
    }
});
