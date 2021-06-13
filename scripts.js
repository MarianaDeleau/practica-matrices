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



//Ejercicio 4: Generar grilla(70)
//Definí una función generarGrilla que tome por parámetro un número entero filas, un número entero columnas y un array de valores items, y devuelva una matriz de filas filas y columnas columnas, donde cada ítem de la matriz es un ítem aleatorio de items.

// const generarGrilla =(filas, columnas, items) => {

// const matriz=[];
// const fila=[]

//     for(let i=0; i<filas; i++){
//         matriz.push(fila)

//     }

//     for(let i=0; i<columnas; i++){
//         fila.push(items[Math.floor(Math.random()*items.length)])

//     }
       
//  console.log(matriz)
// }

//  generarGrilla(2, 3, [1, 2]) 

// // [1, 1, 2], 
// // [2, 1, 1]

//generarGrilla(3, 3, ['a', 'b', 'c'])

//     // ['c', 'c', 'a'], 
//     // ['c', 'a', 'a'], 
//     // ['b', 'a', 'b']


//Ejercicio 5: Generar matriz escalonada
//Definí una función generarMatrizEscalonada que reciba como argumento un número entero filas y devuelva un array 2d con la cantidad de filas filas, donde la primera fila tiene 1 columna, la segunda tiene 2, la tercera 3, y así sucesivamente. Los ítems de la matriz deben ser 0.



// const generarMatrizEscalonada =(columnas) => {

//     let matriz=[];
           
//         for(let i=1; i<=columnas; i++) {

//         // console.log("i: ", i);
// 		// este for se va a recorrer para los siguientes valores de i
// 		// 1 en la primera vuelta
// 		// 2 en la segunda
// 		// 3 en la tercera
        
//             let fila=[];

//             for(let j=0; j < i; j++) {

//             // console.log("j: ", j);
// 			// este for se va a recorrer "i" veces!!!

//             fila.push(0)     
        
//             }
//         matriz.push(fila) 
//         }
//         console.log(matriz)
        
//     };

//generarMatrizEscalonada(3) 

// [
//   [0], 
//   [0, 0], 
//   [0, 0, 0]
// ] 
//generarMatrizEscalonada(5)  
// [
//   [0], 
//   [0, 0], 
//   [0, 0, 0], 
//   [0, 0, 0, 0], 
//   [0, 0, 0, 0, 0]
// ] 


// Respuesta
// [
//      [0],
//      [ 0, 0 ],
//      [ 0, 0, 0 ],
//      [ 0, 0, 0, 0 ]
// ]

// Aux
//[ 0, 0, 0, 0 ]

//Ejercicio 6: Obtener fila más larga (60)
//Definí una función obtenerFilaMasLarga que reciba como argumento un array 2d matriz y devuelva el array (fila) que tenga mayor longitud. Si hay varios de igual longitud, debe devolver el primero de ellos.

// const obtenerFilaMasLarga = (array) => {

//     let arrayLargo= [];

//         for(let i=0; i<array.length; i++){

//         if (array[i].length > arrayLargo.length) {
            
//             arrayLargo=array[i]
      
//         }
//   console.log(arrayLargo) 
//     }

// }

// //obtenerFilaMasLarga([[1, 4], [3, 7, 5], [1]])
// obtenerFilaMasLarga([[1], [3, 7], [6, 8]])

//Ejercicio 7: Obtener cantidad (10)
//Definí una función obtenerCantidad que tome un valor cualquiera item y una matriz items y devuelva la cantidad de veces que item se encuentra dentro de items.

// const obtenerCantidad = (item, matriz) => {
// let cantidad=[]

//     for(let array of matriz) {
        
//         for(let elemento of array){

//             if(elemento===item){

//                 cantidad.push(elemento);
//             }

//         }
        
//     }
//         console.log(cantidad.length)

//     }
// obtenerCantidad('🍎', [
//     ['🍎', '🍏', '🍌', '🍌'],
//     ['🍌', '🍎'],
//     ['🍎', '🍏', '🍌'],
//     ['🍏', '🍌', '🍎', '🍌'],
//   ])
//  // 4


//Ejercicio 8: Convertir en matriz
//Definí una función convertirEnMatriz que reciba como argumentos un número entero columnas y un array array y devuelva una matriz con los items de array y la cantidad de columnas columnas por fila. La última fila puede quedarse como menos columnas de las indicadas si no hay más ítems que agregar.

//DEVUELVE LA CANTIDAD DE ARRAYS, LA CANTIDAD DE ELEMENTOS ---- PERO NO EL SOBRANTE ----
// const convertirEnMatriz = (columnas, array) => {

//     let matriz=[];
//      let fila=[];

//     for(let i =0; i<array.length; i++){
//         //console.log('i:' , i)
//         if(fila.length<columnas){
//             //console.log(fila.length)
//             fila=array.splice(0, columnas)
           
//             matriz.push(fila)
//             fila=[];
//         } 

//     } 
//     console.log(matriz)
//     }

// convertirEnMatriz(2, [1, 2, 3, 4])
//[[1, 2], [3, 4]]
//convertirEnMatriz(3, [1, 2, 3, 4, 5, 6, 7])
//[[1, 2, 3], [4, 5, 6], [7]]
//convertirEnMatriz(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
//[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11]]
