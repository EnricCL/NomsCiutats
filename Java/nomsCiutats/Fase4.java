package nomsCiutats;

import java.util.Scanner;

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

public class Fase4 {

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
		
		//Arrays de les ciutats
		char ciutatInversa1 [] = new char [ciutat1.length()];
		char ciutatInversa2 [] = new char [ciutat2.length()];	
		char ciutatInversa3 [] = new char [ciutat3.length()];	
		char ciutatInversa4 [] = new char [ciutat4.length()];	
		char ciutatInversa5 [] = new char [ciutat5.length()];	
		char ciutatInversa6 [] = new char [ciutat6.length()];	
		
		//S'inclouen les lletres de cada ciutat en les arrays de les mateixes
		for(int i=0; i< ciutatInversa1.length ; i++) {
			ciutatInversa1[i]=ciutat1.charAt(i);
		}
		for(int i=0; i< ciutatInversa2.length ; i++) {
			ciutatInversa2[i]=ciutat2.charAt(i);
		}
		for(int i=0; i< ciutatInversa3.length ; i++) {
			ciutatInversa3[i]=ciutat3.charAt(i);
		}
		for(int i=0; i< ciutatInversa4.length ; i++) {
			ciutatInversa4[i]=ciutat4.charAt(i);
		}
		for(int i=0; i< ciutatInversa5.length ; i++) {
			ciutatInversa5[i]=ciutat5.charAt(i);
		}
		for(int i=0; i< ciutatInversa6.length ; i++) {
			ciutatInversa6[i]=ciutat6.charAt(i);
		}
		
		//Mostrar cada ciutat i la seva array ciutatInversa a la inversa
		System.out.print(ciutat1+" - ");		
		for(int i=ciutatInversa1.length-1 ; i >= 0; i--) {
			System.out.print(ciutatInversa1[i]);
		}
		System.out.println();
		System.out.print(ciutat2+" - ");
		for(int i=ciutatInversa2.length-1 ; i >= 0; i--) {
			System.out.print(ciutatInversa2[i]);
		}
		System.out.println();
		System.out.print(ciutat3+" - ");
		for(int i=ciutatInversa3.length-1 ; i >= 0; i--) {
			System.out.print(ciutatInversa3[i]);
		}
		System.out.println();
		System.out.print(ciutat4+" - ");
		for(int i=ciutatInversa4.length-1 ; i >= 0; i--) {
			System.out.print(ciutatInversa4[i]);
		}
		System.out.println();
		System.out.print(ciutat5+" - ");
		for(int i=ciutatInversa5.length-1 ; i >= 0; i--) {
			System.out.print(ciutatInversa5[i]);
		}
		System.out.println();
		System.out.print(ciutat6+" - ");
		for(int i=ciutatInversa6.length-1 ; i >= 0; i--) {
			System.out.print(ciutatInversa6[i]);
		}	
		
	}

}
