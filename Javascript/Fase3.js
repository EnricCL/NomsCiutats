/**
 * Fase 3
 * · Canviar les vocals 'a' dels noms de les ciutats per números 4 i 
 * guardar els noms modificats en un nou array (arrayCiutatsModificades).
 * · Mostrar per consola l'array modificat i ordenat per ordre alfabètic.
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

            //Per a fer array amb totes les lletres 'a' canviades a '4'
            var arrayCiutatsModificades = [];
            for(var k=0; k < arrayCiutats.length ; k++){
                var ciutat = arrayCiutats[k];
                ciutat = ciutat.replace(/a/gi,'4');
                arrayCiutatsModificades.push(ciutat);
            }

            //Ordenar array
            arrayCiutatsModificades.sort();

            //Bucle recorrent l'array per imprimir per consola
            process.stdout.write("Les 6 ciutats ordenades amb canvi de 'a' per '4': ");
            for(var j=0; j < arrayCiutatsModificades.length; j++){
                if(j==arrayCiutatsModificades.length-1){
                    process.stdout.write(arrayCiutatsModificades[j]+".\n");
                }else{
                    process.stdout.write(arrayCiutatsModificades[j]+", ");
                }

            }

            //Tancament del procès
            process.exit();
        }
    }
});

peticio(0);