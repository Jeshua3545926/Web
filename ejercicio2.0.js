/*crea un for donde pida al usuario si quiere ver la posicion, los elementos o crear un bucle
usando la sentencia switch usa una funcion para dividir este code */

function bucles(){

    const num = [10,20,30,40,50];
    
    let opcion=prompt("usted que desea ver la (posicion),(elementos),(crear un bucle)");
    
    if (opcion === 'bucle') {
    for (let i = 0; i< 5; i++) {
            alert(i);
        }
    }
        else if (opcion === 'posicion') {
         for (let valor in num) {
            alert("el valor es:"+valor );
        }
    }
      else  if (opcion === 'elementos' ) {
            for (let element of num) {
            alert("el elemento es: " +element);
            }
            document.write("el valor es:"+elemento );
        }
    else{
        alert("ERROR");
    }
    }
    bucles();

    /*crear mini sistema que  nos permita registrar los alumnos que estan presentes
(P) y ausentes(A) en clase. pasados los 30 dias mostrar la situacion final de todos los alumnos 
(numero totl de presentes y ausentes) se puede tener un maximo de 10% de ausencias por semestre, 
si tienen mas aclarar que esta reprobado  */ 



let cantidad=prompt("¿cuantos alumnos son ?");
let alumnosTotales = [];
for ( let i= 0; i < cantidad; i++) {
alumnosTotales[i] = [prompt("Nombre del alumno "+ (i + 1)),0];
}
const tomarAsistencia =(nombre, i)=>{
    let presencia = prompt(nombre);
        if (presencia =="p"|| presencia =="P") {
          alumnosTotales[i][1]++;
    }
}
for (let dia = 0; dia < 30; dia++) {
    for (alumno in alumnosTotales) {
            tomarAsistencia(alumnosTotales[alumno][0],alumno);
            
        }
    }
    let resultado = "";
for (alumno in alumnosTotales) {
resultado+= `${alumnosTotales[alumno][0]}: <br>
________Presentes: ${alumnosTotales[alumno][1]}  <br>
________ausencias : ${30 - alumnosTotales[alumno][1]}<br>`;

if (30-alumnosTotales[alumno][1] > 18 ) {
    resultado+="<b style='color:red'> REPROBADO POR INASISTENCIA</b><br><br> ";
}else{
        resultado+="<br><br>"
    }

}

document.write(resultado);

//              calculadora pero con constantes e if()

const suma = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}
const resta = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const multi = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}
const div = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}

alert("que operacion desea realizar ")
let operacion=prompt("1: suma 2: resta 3:multiplicacion 4: division");

if (operacion==="1") {
let numero1=prompt("ingrese el primer numero");
let numero2=prompt("ingrese el segundo numero");
let resultado=suma(numero1, numero2);
alert(`el resultado de la suma es: ${resultado}`);
}
if (operacion==="1") {
let numero1=prompt("ingrese el primer numero");
let numero2=prompt("ingrese el segundo numero");
let resultado=resta(numero1 , numero2);
alert(`el resultado de la resta es: ${resultado}`);
}
if (operacion==="1") {
let numero1=prompt("ingrese el primer numero");
let numero2=prompt("ingrese el segundo numero");
let resultado=multi(numero1 , numero2);
alert(`el resultado de la multiplicacion es: ${resultado}`);
}
if (operacion==="1") {
let numero1=prompt("ingrese el primer numero");
let numero2=prompt("ingrese el segundo numero");
let resultado=div(numero1 , numero2);
alert(`el resultado de la division es: ${resultado}`);
 }
 else{
    alert("no escogio la oeracion correcta");
 }
