let trabajoPractico1 = prompt("Por favor, ingrese la nota correspondiente al TP 1");
!Number(trabajoPractico1) && alert("No ingresaste un numero");
!Number(trabajoPractico1) && (trabajoPractico1 = prompt("Por favor, ingrese nuevamente la nota correspondiente al TP 1"))
let trabajoPractico2 = prompt("Por favor, ingrese la nota correspondiente al TP 2");
!Number(trabajoPractico2) && alert("No ingresaste un numero");
!Number(trabajoPractico2) && (trabajoPractico2 = prompt("Por favor, ingrese nuevamente la nota correspondiente al TP 2"))
let trabajoPractico3 = prompt("Por favor, ingrese la nota correspondiente al TP 3");
!Number(trabajoPractico3) && alert("No ingresaste un numero");
!Number(trabajoPractico3) && (trabajoPractico1 = prompt("Por favor, ingrese nuevamente la nota correspondiente al TP 3"))
suma = Number(trabajoPractico1) + Number(trabajoPractico2) + Number(trabajoPractico3)
promedio = Number(suma / 3)
promedio >= 90 && alert("El promedio del alumno es: " + promedio + " EXCELENTE")
promedio >= 70 && promedio < 90 && alert("El promedio del alumno es: " + promedio + " MUY BUENO")
promedio > 60 && promedio < 70 && alert("El promedio del alumno es: " + promedio + " BUENO")
promedio >= 40 && promedio < 60 && alert("El promedio del alumno es: " + promedio + " REGULAR")
promedio < 40 && alert("El promedio del alumno es: " + promedio + " INSUFICIENTE")