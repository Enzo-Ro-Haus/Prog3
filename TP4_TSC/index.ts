console.log('Ejercicio 2: Está corriendo TSC');

// 3
const tipoCadena: string = "Hola, TypeScript!";
const tipoNumero: number = 123;
const tipoBooleano: boolean = true;
const tipoFecha: Date = new Date('2024-09-08');
const listElement = document.getElementsByClassName('list_Element');

listElement[0].innerHTML = "Texto: " + tipoCadena;
listElement[1].innerHTML = "Numerico: " + tipoNumero;
listElement[2].innerHTML = "Booleano: " + tipoBooleano;
listElement[3].innerHTML = "Fecha: " + `${tipoFecha.getDay()}/${tipoFecha.getMonth() + 1}/${tipoFecha.getFullYear()}`;

// 4
function showNumber(number: number): string {
    return number.toString();
}

const num: number = 456;
const nCadena: any = document.getElementById('numeroCadena');
nCadena.innerText = "Número convertido a cadena: " + showNumber(num);

// 5
function sumElementOfArray(numeros: Array<number>): number {
    return numeros.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0)
}

const arrayNumerico: Array<number> = [5, 3, 2, 1, 2, 2];
const sumaArray: any = document.getElementById('sumaArray');
sumaArray.innerText = "Suma del array: " + sumElementOfArray(arrayNumerico);

// 6
class Estudiante {
    nombre: string;
    edad: number;
    curso: string;

    constructor(nombre: string, edad: number, curso: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
}

const juan: Estudiante = new Estudiante("Juan", 20, "Matemáticas");
const alumno: any = document.getElementsByClassName("alumno");

alumno[0].innerHTML = "Nombre: " + juan.nombre;
alumno[1].innerHTML = "Edad: " + juan.edad;
alumno[2].innerHTML = "Materia: " + juan.curso;

// 7
type direccion = [string, string, number];
const dirCompleta: direccion = ["Av. principal", "Ciudad", 12345];
const dir: any = document.getElementById("direccion");
dir.innerText = ` Dirección: Calle: ${dirCompleta[0]} Ciudad: ${dirCompleta[1]} CP: ${dirCompleta[2]}`;

// 8
interface Usuario {
    nombre: string;
    correo: string;
    saludar(): string;
}

class Saludador implements Usuario {
    nombre: string;
    correo: string;

    constructor(nombre: string, correo: string) {
        this.nombre = nombre;
        this.correo = correo;
    }

    saludar(): string {
        return `Hola, mi nombre es ${this.nombre}`
    }
}

const ana: Saludador = new Saludador("Ana", "ana_1992@gmail.com");
const saludo: any = document.getElementById("saludo");
saludo.innerText = ana.saludar();

// 9
class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentar(): string {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad}`;
    }
}

const carlos: Persona = new Persona("Carlos", 30);
const presentacion: any = document.getElementById("presentacion");
presentacion.innerHTML = carlos.presentar();

// 10
class Caja<T> {
    elemento: T;

    constructor(elemento: T) {
        this.elemento = elemento;
    }

    mostrarElemento(): string {
        return ((typeof this.elemento) === "string") ? `Contenido de cajaDeTexto: ${this.elemento}` : `Contenido de cajaDeNumero: ${this.elemento}`;
    }
}

const cajaTexto: Caja<string> = new Caja("Mensaje secreto");
const cajaNumerica: Caja<number> = new Caja(42);
const cajas = document.getElementsByClassName("diferenteTipo");

cajas[0].innerHTML = cajaTexto.mostrarElemento();
cajas[1].innerHTML = cajaNumerica.mostrarElemento();

// 11
function identidad(elemento: any): any {
    return elemento;
}

const retorno = document.getElementsByClassName("retornoDistinto");
retorno[0].innerHTML = "Identidad del número: " + identidad(123);
retorno[1].innerHTML = "Identidad del texto: " + identidad("texto");

// 12

enum Color {
    Amarillo,
    Rojo,
    Azul
}

const colorFavorito: Color = Color.Azul;
const color: any = document.getElementById("color");
color.innerHTML = "Color favorito: " + Color[colorFavorito];