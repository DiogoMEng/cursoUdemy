import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
//		### SWITCH-CASE ###
		
		Scanner sc = new Scanner(System.in);
		String dia = null;
		
		System.out.println("Qual o dia de hoje?");
		int x = sc.nextInt();
		
		switch(x) {
		case 1:
			dia = "domingo";
			break;
		case 2:
			dia = "segunda";
			break;
		case 3:
			dia = "terça";
			break;
		case 4:
			dia = "quarta";
			break;
		case 5:
			dia = "quinta";
			break;
		case 6:
			dia = "sexta";
			break;
		case 7:
			dia = "sábado";
			break;
		default:
			System.out.println("Valor inválido");
		}
		
		System.out.println("Dia da semana: " + dia);
		
//		### IF-ELSE ###

		int hora;
		
		System.out.println("Quantas horas?");
		hora = sc.nextInt();
		
		if(hora < 12) {
			System.out.println("Bom dia");
		} else if(hora >= 12 || hora <= 18) { // encadeamento de estruturas condicionais
			System.out.println("Boa tarde");
		} else {
			System.out.println("Boa noite");
		}
		
		sc.close();
		
//		### EXPRESSÃO DE CONDIÇÃO TERNÁRIA ###
		
		double preco = 34.5;
		
		double desconto = (preco < 20.0) ? preco * 0.1 : preco * 0.05;
		
		System.out.println(desconto);
		
	}

}
