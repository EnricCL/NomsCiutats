package nomsCiutats;

import java.util.Scanner;

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
public class Fase1 {

	public static void main(String[] args) {
		
		//S'importa la classe escaner per llegir per consola		
		Scanner escaner = new Scanner(System.in);
		
		//Variables String buides
		String ciutat1, ciutat2, ciutat3, ciutat4, ciutat5, ciutat6;
		
		//Es va demanant les ciutats i s'emmagatzema en cada variable
		System.out.print("Introdueix la ciutat 1: ");
		ciutat1=escaner.nextLine();
				
		System.out.print("Introdueix la ciutat 2: ");
		ciutat2=escaner.nextLine();
		
		System.out.print("Introdueix la ciutat 3: ");
		ciutat3=escaner.nextLine();
				
		System.out.print("Introdueix la ciutat 4: ");
		ciutat4=escaner.nextLine();
		
		System.out.print("Introdueix la ciutat 5: ");
		ciutat5=escaner.nextLine();
				
		System.out.print("Introdueix la ciutat 6: ");
		ciutat6=escaner.nextLine();
		
		escaner.close(); //Tancament de l'Scanner
		
		//Es mostren les ciutats que s'han llegit
		System.out.print("Les 6 ciutats: " 	+ ciutat1 + ", "
			+ ciutat2 + ", "+ ciutat3 + ", "+ ciutat4 + ", "
			+ ciutat5 + ", "+ ciutat6 + ".");		
	}
}