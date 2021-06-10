//Ejercicio 1: Obtener número mayor (10)
//Definí una función obtenerNumeroMayor que tome por parámetro un array 2d de números matriz y devuelva el mayor número de dicha matriz.

// const obtenerNumeroMayor  = (matriz) =>{
//     let max = "";
//     
//     for (let array of matriz){
//      
//       for(let numero of array){
//         if(numero>max){
//         max = numero
//         }
    
//     }
    
//     }
//     console.log(max);
// }
  
// obtenerNumeroMayor([[2, 7, 12, 1],[8, 23],
//     [9, 45, 7],[22, 3, 24, 4],]) 
    
//Ejercicio 2: Sumar (5)
//Definí una función sumar que reciba una matriz de números  y devuelva la suma de todos los números de dicha matriz.

// const sumar = (matriz) => {

//     let suma=""

//     for(let array of matriz) {

//         for (let numero of array){

//             suma=parseInt(suma+numero);

//         }
        
//     }
// console.log(suma)
// }

// sumar([[4, 5],[2, 7, 1],[8, 10],])


//Ejercicio 3: Es matriz cuadrada(10)
//Definí una función esMatrizCuadrada que reciba como argumento un array 2d matriz y devuelva si es una matriz cuadrada, es decir, si tiene igual cantidad de filas que de columnas.


// const esMatrizCuadrada = (matriz) => {

//         for(let array of matriz){

//             for(let numeros of array){

//                 if(array.length===matriz.length){
//                     alert(true)
//                 } else {
//                     alert (false)
//                 }
//             }
//         }
// }

// esMatrizCuadrada([[4, 5],[2, 7, 1],[8, 10],]) 

// esMatrizCuadrada([[4, 5, 9],[2, 7, 1],[8, 10, 5],])



//Ejercicio 4: Generar grilla
//Definí una función generarGrilla que tome por parámetro un número entero filas, un número entero columnas y un array de valores items, y devuelva una matriz de filas filas y columnas columnas, donde cada ítem de la matriz es un ítem aleatorio de items.

