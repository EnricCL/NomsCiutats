package nomsCiutats;

import java.util.Scanner;

/**
 * Fase 3
 * · Canviar les vocals 'a' dels noms de les ciutats per números 4 i 
 * guardar els noms modificats en un nou array (arrayCiutatsModificades).
 * · Mostrar per consola l'array modificat i ordenat per ordre alfabètic.
 * 
 * @author Enric Comes
 *
 */
public class Fase3 {

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
				
		//Es declara l'arrayCiutats i s'afegeixen les ciutats
		String arrayCiutats[] = {ciutat1,ciutat2,ciutat3,ciutat4,ciutat5,ciutat6};
		
		String arrayCiutatsModificades [] = new String[6];
		
		//Bucle per canviar les vocals 'a' per números '4' de les ciutats
		for(int i=0; i < arrayCiutats.length; i++) {
			String ciutat = arrayCiutats[i];	
			ciutat = ciutat.replace('a', '4');
			arrayCiutatsModificades[i] = ciutat;
		}
		
		/*
		 * Ordenar alfabèticament, comparant 1 ciutat amb la següent
		 * per valors Unicode sense importar majúscules ni minúscules
		 * si la primera ciutat té valor menor al de la segona o són iguals, no fa res
		 * Si la primera ciutat té valor major al de la segona, es fa el canvi 
		 */
		
		for(int i=0; i<(arrayCiutatsModificades.length-1);i++) {
			
			for(int j=i+1; j<arrayCiutatsModificades.length; j++) {
			
				if(arrayCiutatsModificades[i].compareToIgnoreCase(arrayCiutatsModificades[j])>0) {
					//Intercanvi de valors
					String auxiliar = arrayCiutatsModificades[i];
					arrayCiutatsModificades[i] = arrayCiutatsModificades[j];
					arrayCiutatsModificades[j] = auxiliar;
				}
				
			}
		}
		
		//Mostrar ciutats ordenades alfabèticament
		for(String element:arrayCiutatsModificades) {
			System.out.println(element);
		}
	}

}
