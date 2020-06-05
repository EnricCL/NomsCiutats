/**
 * Fase 2
 * 
 * · Un cop es tenen les ciutats en variables, passar informació a arrayCiutats
 * · Al tenir array ple, mostrar per consola el nom de les ciutats per ordre alfabètic
 * 
 * @author Enric Comes
 *
 */

  //Array amb les frases per a demanar ciutats
var peticions = ['Introdueix la ciutat 1: ',
'Introdueix la ciutat 2: ',
'Introdueix la ciutat 3: ',
'Introdueix la ciutat 4: ',
'Introdueix la ciutat 5: ',
'Introdueix la ciutat 6: '];

var ciutat1, ciutat2, ciutat3, ciutat4, ciutat5, ciutat6;
var comptador = 0;

//Mètode per escriure per consola les diferents peticions
function peticio(i){
    process.stdout.write(peticions[i]);
}

/* Procès per llegir les ciutats i posar-les en les seves 
variables, si el comptador és menor al nº de peticions, 
torna a enviar peticions, Sinó, segueix el programa 
i tanca el procès.
*/
process.stdin.on('data', function(data){
    if(comptador == 0) ciutat1 = data.toString().trim();
    else if(comptador == 1)  ciutat2 = data.toString().trim();
    else if(comptador == 2)  ciutat3 = data.toString().trim();
    else if(comptador == 3)  ciutat4 = data.toString().trim();
    else if(comptador == 4)  ciutat5 = data.toString().trim();
    else if(comptador == 5)  ciutat6 = data.toString().trim();

    comptador++;

    if(comptador < peticions.length){
        peticio(comptador);
    }else{
        //Si ja hi són les 6 ciutats, es passen al array
        if(comptador == 6){   
            
            var arrayCiutats = [ciutat1,ciutat2,ciutat3,ciutat4,ciutat5,ciutat6];

            //Ordenar array
            arrayCiutats.sort();

            //Bucle recorrent l'array per imprimir per consola
            process.stdout.write("Les 6 ciutats ordenades: ");
            for(var j=0; j < arrayCiutats.length; j++){
                if(j==arrayCiutats.length-1){
                    process.stdout.write(arrayCiutats[j]+".\n");
                }else{
                    process.stdout.write(arrayCiutats[j]+", ");
                }

            }

            //Tancament del procès
            process.exit();
        }
    }
});

peticio(0);