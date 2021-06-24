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

// //generarMatrizEscalonada(3) 

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


//Ejercicio 9: Consultar tabla
//Definí la función consultarTablaque tome por parámetro un número id, un string columna, y una matriz tabla y que retorne el valor del dato de la columna dada para el registro con el id indicado.

//   const tabla = [
//     ['id', 'nombre', 'edad', 'email'],
//     [1, 'Ada', 33, 'ada@gmail.com'],
//     [2, 'Grace', 45, 'grace@gmail.com'],
//   ]


// const consultarTabla = (id, columna, tabla) => {

//     const indiceColumna=tabla[0].indexOf(columna); 
//     //console.log(indiceColumna)

//     for(let i = 1; i<tabla.length; i++){

//    console.log(tabla[id][indiceColumna])

//     }

// }

// consultarTabla(2, 'nombre', tabla)
// consultarTabla(1, 'email', tabla)

//Ejercicio 10: Tiene bloque horizontal
//Definí una función tieneBloqueHorizontal que reciba como argumento un array 2d matriz y devuelva si dicha matriz tiene un bloque horizontal de 3 o más ítems consecutivos idénticos.

//PRIMERA VERSION
// const tieneBloqueHorizontal = (matriz) => {

// let itemIgual="";
// const vecesBloque= 3;
// let contadorVeces=0 

// for(const array of matriz){

//     for(const item of array){

//         if(item===itemIgual){
//             contadorVeces++;
//         }else{
//             contadorVeces=1

//         } 

//         if(contadorVeces===vecesBloque){
//             alert(true)
//         } else{
//             alert(false)
//         }
       
//         itemIgual=item;
//         console.log(item)
//     }

// }

// }

//VERSION MEJORADA PARA 3 O MAS


// const tieneBloqueHorizontal = (matriz) => {

  
//   for(let i = 0; i < matriz.length; i++) {

//       const array = matriz[i]; 
//             let anterior; 
//             let encontradas=0;
//             let veces=3 
//       for(let j = 0; j < array.length; j++) {
                 
//           if(array[j] === anterior) {

//             encontradas++

//             } else {
//               encontradas=1
//             }

//             if(encontradas>=veces){
                     
//                 alert(true);
                
//             } else {

//               alert(false)
//             }

//             anterior=array[j]

//       }
          
//   }

// }


// tieneBloqueHorizontal([
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3],
//   ])
//   false
  
  //  tieneBloqueHorizontal([
  //   [1, 2, 3, 4],
  //   [1, 2, 2, 2],
  //   [1, 2, 4, 5],
  // ])
  //true

 // tieneBloqueHorizontal([
  //   [1, 2, 3, 4],
  //   [1, 2, 4, 2],
  //   [1, 2, 4, 5],
  //   [1, 2, 4, 5, 5, 5],
  //   [1, 2, 4, 5],
  // ]) 
  // true


  // tieneBloqueHorizontal([
  //   [1, 2, 3, 4, 1, 2],
  //   [1, 2, 2, 2, 2, 1],
  //   [4, 4, 4, 4, 4, 4],
  // ])
   // true

//Ejercicio 11: Tiene bloque vertical
//Definí una función tieneBloqueVertical que tome una matriz y devuelva si la misma tiene un bloque vertical  de 3 o más ítems consecutivos idénticos .
    

// const tieneBloqueVertical = (matriz) => {

//       for(const posicion in matriz[0]){      
//             let anterior; 
//             let encontradas=0;
//             const veces=3

//           for(const array in matriz){
      
            
//           if(anterior==matriz[array][posicion]) {

//             encontradas++

//             } else {
//               encontradas=1
//             }

//             if(encontradas>=veces){
                     
//                 alert(true);
                
//             } else {

//               alert(false)
//             }
           
//             anterior=matriz[array][posicion]
            
//       }
          
//   }

// }

//const tieneBloqueVertical = (matriz) => {

  
  //const itemsPorArray = matriz[0].length; 
  

  //console.log(array)
//   //for(let j = 0; j < itemsPorArray; j++) {
//       for(const posicion in matriz[0]){      
//             let anterior; 
//             let encontradas=0;
//             const veces=3

//           for(const array in matriz){
//       //for(let i = 0; i < matriz.length; i++) {
//         //console.log(matriz.length)
//             //const array = matriz[i];
              
            
//           if(anterior==matriz[array][posicion]) {

//             encontradas++

//             } else {
//               encontradas=1
//             }


//             if(encontradas>=veces){
                     
//                 alert(true);
                
//             } else {

//               alert(false)
//             }
//             //console.log(array[i][j])
//             anterior=matriz[array][posicion]
            
// //console.log(encontradas)
//       }
          
//   }

// }

const tieneBloqueVertical = (matriz) => {

  const itemsPorArray = matriz[0].length; 

        for(let j = 0; j < itemsPorArray; j++) {      

              let anterior; 
              let encontradas=0;
              const veces=3
  
            for(let i = 0; i < matriz.length; i++){

                    if(anterior===matriz[i][j]) {
        
                    encontradas++
        
                    } else {
                        encontradas=1
                    }
        
        
                    if(encontradas>=veces){
                            
                        alert(true);
                        
                    } else {
        
                        alert(false)
                    }
                    
                    anterior=matriz[i][j]
        }
        
    }

}


// tieneBloqueVertical([
//   [4, 2, 3],
//   [1, 5, 3],
//   [1, 2, 3],
// ])

    // tieneBloqueVertical([
    //     [4, 2, 3],
    //     [1, 5, 3],
    //     [1, 2, 3],
    //     [1, 2, 3],
    //     [1, 2, 3],
    //   ])
//       //true
      
      //  tieneBloqueVertical([
      //   [1, 2, 3, 4],
      //   [7, 2, 9, 4],
      //   [1, 8, 4, 4],
      // ]) 
      //false
      


      
//     if(matriz[0][0]===matriz[1][0] && matriz[1][0]===matriz[2][0] || matriz[0][1]===matriz[1][1] && matriz[1][1]===matriz[2][1] || matriz[0][2]===matriz[1][2] && matriz[1][2]===matriz[2][2] )
//     //for(let j=0; j<matriz[i].length; j++){
// alert(true)