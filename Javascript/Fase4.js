/**
 * Fase 4
 * 
 * · Crear nou array per cada una de les ciutats que tenim.
 * 	La mida dels nous arrays serà la llargada de cada string 
 *  ( string nomCiutat.Length).
 * · Omplir els nous arrays lletra per lletra.
 * · Mostrar per consola els nous arrays amb els noms invertits
 *  (Ex: Barcelona - anolecraB).
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

            //Nous Arrays de les ciutats amb el tamany dels Strings
            var ciutatInversa1 = new Array (ciutat1.length);
            var ciutatInversa2 = new Array (ciutat2.length);
            var ciutatInversa3 = new Array (ciutat3.length);
            var ciutatInversa4 = new Array (ciutat4.length);
            var ciutatInversa5 = new Array (ciutat5.length);
            var ciutatInversa6 = new Array (ciutat6.length);

            //Omplir lletra per lletra els nous arrays
            for(var i=0; i < ciutatInversa1.length ; i++){
                ciutatInversa1[i]=ciutat1.charAt(i);
            }
            for(var i=0; i < ciutatInversa2.length ; i++){
                ciutatInversa2[i]=ciutat2.charAt(i);
            }
            for(var i=0; i < ciutatInversa3.length ; i++){
                ciutatInversa3[i]=ciutat3.charAt(i);
            }
            for(var i=0; i < ciutatInversa4.length ; i++){
                ciutatInversa4[i]=ciutat4.charAt(i);
            }
            for(var i=0; i < ciutatInversa5.length ; i++){
                ciutatInversa5[i]=ciutat5.charAt(i);
            }
            for(var i=0; i < ciutatInversa6.length ; i++){
                ciutatInversa6[i]=ciutat6.charAt(i);
            }

            //Mostrar cada ciutat i la seva array ciutatInversa a la inversa
            process.stdout.write(ciutat1+" - ");
            for(var i = ciutatInversa1.length-1 ; i >= 0; i--){
                process.stdout.write(ciutatInversa1[i])
            }
            process.stdout.write("\n");
            process.stdout.write(ciutat2+" - ");
            for(var i = ciutatInversa2.length-1 ; i >= 0; i--){
                process.stdout.write(ciutatInversa2[i])
            }
            process.stdout.write("\n");
            process.stdout.write(ciutat3+" - ");
            for(var i = ciutatInversa3.length-1 ; i >= 0; i--){
                process.stdout.write(ciutatInversa3[i])
            }
            process.stdout.write("\n");
            process.stdout.write(ciutat4+" - ");
            for(var i = ciutatInversa4.length-1 ; i >= 0; i--){
                process.stdout.write(ciutatInversa4[i])
            }
            process.stdout.write("\n");
            process.stdout.write(ciutat5+" - ");
            for(var i = ciutatInversa5.length-1 ; i >= 0; i--){
                process.stdout.write(ciutatInversa5[i])
            }
            process.stdout.write("\n");
            process.stdout.write(ciutat6+" - ");
            for(var i = ciutatInversa6.length-1 ; i >= 0; i--){
                process.stdout.write(ciutatInversa6[i])
            }
            
            process.stdout.write("\n");

            //Tancament del procès
            process.exit();
        }
    }
});

peticio(0);