class HolaMundo {
    static main() {
        console.log("¡Hola, mundo desde JavaScript!");
        this.saludar("Ruben");
        this.sumar(5, 3);
    }

    static saludar(nombre) {
        console.log(`Hola, ${nombre}. ¡Bienvenido al ejercicio de GitHub!`);
    }

    static sumar(a, b) {
        const resultado = a + b;
        console.log(`La suma de ${a} + ${b} es: ${resultado}`);
    }
}

