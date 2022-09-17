import Complex from "./Complex.js";
import Departament from "./Departament.js";
import Dependent from "./Dependent.js";

/* 
Ejercicio 2.
La dirección del Complejo Galerías Paseo necesita tener un control de sus ingresos. El Complejo está organizado por departamentos y cada departamento tiene asignado un grupo de dependientes. El complejo necesita controlar las ventas, por departamentos y por dependiente.
La administración de la tienda desea conocer:
• ¿Qué por ciento de las ventas aporta cada departamento?
• ¿Qué por ciento de las ventas del departamento aporta cada empleado?
• Se requiere un consolidado que permita conocer el ingreso total mensual y anual de la tienda, y el ingreso mensual y anual por productos.
• La venta total del día por departamentos.
• ¿Cómo cumple cada departamento el plan anual de ventas?
a) Identifique las clases presentes en la situación.
b) Identifique las funcionalidades (requisitos) que se requieren.
c) Elabore las tarjetas CRC correspondientes.
d) Represente la información en un diagrama de clases de UML.
e) Diseñe las clases en Java.
*/
const complexA = new Complex();
const departamentA = new Departament();
const dependentA = new Dependent();
console.log({complexA, departamentA, dependentA});