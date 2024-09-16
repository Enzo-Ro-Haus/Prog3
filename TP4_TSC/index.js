"use strict";
console.log('Ejercicio 2: Está corriendo TSC');
// 3
const tipoCadena = "Hola, TypeScript!";
const tipoNumero = 123;
const tipoBooleano = true;
const tipoFecha = new Date('2024-09-08');
const listElement = document.getElementsByClassName('list_Element');
listElement[0].innerHTML = "Texto: " + tipoCadena;
listElement[1].innerHTML = "Numerico: " + tipoNumero;
listElement[2].innerHTML = "Booleano: " + tipoBooleano;
listElement[3].innerHTML = "Fecha: " + `${tipoFecha.getDay()}/${tipoFecha.getMonth() + 1}/${tipoFecha.getFullYear()}`;
// 4
function showNumber(number) {
    return number.toString();
}
const num = 456;
const nCadena = document.getElementById('numeroCadena');
nCadena.innerText = "Número convertido a cadena: " + showNumber(num);
// 5
function sumElementOfArray(numeros) {
    return numeros.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
}
const arrayNumerico = [5, 3, 2, 1, 2, 2];
const sumaArray = document.getElementById('sumaArray');
sumaArray.innerText = "Suma del array: " + sumElementOfArray(arrayNumerico);
// 6
class Estudiante {
    constructor(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }
}
const juan = new Estudiante("Juan", 20, "Matemáticas");
const alumno = document.getElementsByClassName("alumno");
alumno[0].innerHTML = "Nombre: " + juan.nombre;
alumno[1].innerHTML = "Edad: " + juan.edad;
alumno[2].innerHTML = "Materia: " + juan.curso;
const dirCompleta = ["Av. principal", "Ciudad", 12345];
const dir = document.getElementById("direccion");
dir.innerText = ` Dirección: Calle: ${dirCompleta[0]} Ciudad: ${dirCompleta[1]} CP: ${dirCompleta[2]}`;
class Saludador {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }
    saludar() {
        return `Hola, mi nombre es ${this.nombre}`;
    }
}
const ana = new Saludador("Ana", "ana_1992@gmail.com");
const saludo = document.getElementById("saludo");
saludo.innerText = ana.saludar();
// 9
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentar() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad}`;
    }
}
const carlos = new Persona("Carlos", 30);
const presentacion = document.getElementById("presentacion");
presentacion.innerHTML = carlos.presentar();
// 10
class Caja {
    constructor(elemento) {
        this.elemento = elemento;
    }
    mostrarElemento() {
        return ((typeof this.elemento) === "string") ? `Contenido de cajaDeTexto: ${this.elemento}` : `Contenido de cajaDeNumero: ${this.elemento}`;
    }
}
const cajaTexto = new Caja("Mensaje secreto");
const cajaNumerica = new Caja(42);
const cajas = document.getElementsByClassName("diferenteTipo");
cajas[0].innerHTML = cajaTexto.mostrarElemento();
cajas[1].innerHTML = cajaNumerica.mostrarElemento();
// 11
function identidad(elemento) {
    return elemento;
}
const retorno = document.getElementsByClassName("retornoDistinto");
retorno[0].innerHTML = "Identidad del número: " + identidad(123);
retorno[1].innerHTML = "Identidad del texto: " + identidad("texto");
// 12
var Color;
(function (Color) {
    Color[Color["Amarillo"] = 0] = "Amarillo";
    Color[Color["Rojo"] = 1] = "Rojo";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
const colorFavorito = Color.Azul;
const color = document.getElementById("color");
color.innerHTML = "Color favorito: " + Color[colorFavorito];
