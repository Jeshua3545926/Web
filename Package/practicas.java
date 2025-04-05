package Package;
import java.util.Scanner;

class Nodo {
    int valor;
    Nodo izquierda;
    Nodo derecha;

    public Nodo(int valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] Cadena = {"Ingrese sus horas trabajadas", "Ingrese su salario"};
        
        System.out.println(Cadena[0]);
        int Hrs = scanner.nextInt();
        
        System.out.println(Cadena[1]);
        int salario = scanner.nextInt();
        
        // Crear el árbol binario
        Nodo raiz = new Nodo(Hrs);
        raiz.derecha = new Nodo(salario);
        
        // Realizar la operación
        int operacion = raiz.valor * raiz.derecha.valor;
        
        System.out.println("El resultado de la operación es: " + operacion);
        scanner.close();
    }
}

