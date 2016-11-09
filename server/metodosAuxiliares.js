export function sortArray(jogoArray){

    for (let j = 0; j < jogoArray.length; j++) {

        for (let i = 0; i < jogoArray.length; i++) {

            if(jogoArray[i]>jogoArray[i+1]){


                let aux = jogoArray[i];

                jogoArray[i] = jogoArray[i+1];
                jogoArray[i+1] = aux;

            }
        }
    }

}
