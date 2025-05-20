import java.util.Locale;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
////		### DECLARAÇÃO DE VARIÁVEIS ###
		int idade = 5;
		double altura = 1.68; // valor com ponto flutuante
		char sexo = 'M'; // único valor unicode
		double x = 10.45667;
		String nome = "Diogo Mello";
		
		System.out.println(idade); // apresenta uma quebra de linha ao final
		System.out.println(altura);
		System.out.println(sexo); // sem quebra de linha
//		
////		### DEFININDO QUANTIDADE DE CASAS ###
		System.out.printf("%.2f%n", x);
		
		Locale.setDefault(Locale.US); // define a localidade que deve ser utilizada 
									  // na aplicação
//		
////		### CONCATENAÇÃO ###
//		System.out.println("RESULTADO = " + x + " METROS");
//		System.out.printf("RESULTADO = %.2f METROS%n", x);
//		
////		### RETORNANDO MAIS DE UM ELEMENTO ###
//		System.out.printf("%s tem %d anos e ganha R$ %.2f reais%n", nome, idade, x);
//		
////		### CONVERSÃO EXPLÍCITA DE VALORES ###
//		int a, b;
//		double result;
//		
//		a = 5;
//		b = 2;
//		
//		result = (double) a / b;
//		
//		System.out.print(result);
		
//		### ENTRADA DE DADOS ###
		String y1, s1, s2;
		char y2;
		int x1;
		double x2;
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Informa o seu nome: ");
		y1 = sc.next(); // permite digitar uma palavra e armazena-lá em y.
		System.out.println("Qual seu Gênero (M ou F): ");
		y2 = sc.next().charAt(0); // permite digitar apenas um caracter.
		System.out.println("Informe a sua idade: ");
		x1 = sc.nextInt(); // permite digitar um número inteiro.
		System.out.println("Qual a sua altura: ");
		x2 = sc.nextDouble(); // permite digitar um ponto flutuante.
		
		s1 = sc.nextLine(); // permite pegar os dados da linha inteira
		s2 = sc.nextLine();
		
		System.out.printf("%nNome completo: " + s1 + s2 + "%n");
		System.out.println("primeiro nome: " + y1);
		System.out.println("Gênero: " + y2);
		System.out.println("Idade: " + x1);
		System.out.println("Altura: " + x2);
		
		sc.close();
	}

}