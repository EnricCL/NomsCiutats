/**
 * Exercici:
 * L’exercici consisteix en mostrar per consola diferents noms de 
 * ciutats partint d’un array i modificar els noms canviant lletres.
 *  *
 *FASE 1 (2 punts)
 *· Crea sis variables tipu string buides. (0,5 punts)
 *· Demana per consola que s’introdueixin els noms. (0,5 punts)
 *· Introdueix els següents noms de ciutats (Barcelona, Madrid, 
 *Valencia, Malaga, Cadis, Santander) per teclat. (0,5 punts)
 *· Mostra per consola el nom de les 6 ciutats. (0,5 punts)
 *
 *@author Enric Comes
 */

 //Array amb les frases per a peticions de ciutats
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
        //Si ja hi són les 6 ciutats, es mostren per consola.
        if(comptador == 6){    
            process.stdout.write('Les 6 ciutats: '+
                        ciutat1+', '+
                        ciutat2+', '+
                        ciutat3+', '+
                        ciutat4+', '+
                        ciutat5+', '+
                        ciutat6+'.\n');

            process.exit();
        }
    }
});

peticio(0);