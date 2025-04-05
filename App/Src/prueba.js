let body = [3];
console.log(body);

try {
    let chunk = ((chunk) => {
       return chunk +body[0];
    });
    (body[0]);  // Pass body[0] as the initial value of chunk
   
    console.log(`El nuevo valor de chunk es: ${chunk}`);
} catch (err) {
    console.log(`El error es ${err}`);
}

// // Realizar una búsqueda no lineal en el arreglo
// function binarySearch(array, target) {
//     let left = 0;
//     let right = array.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (array[mid] === target) {
//             return mid; // Element found
//         } else if (array[mid] < target) {
//             left = mid + 1; // Search in the right half
//         } else {
//             right = mid - 1; // Search in the left half
//         }
//     }

//     return -1; // Element not found
// }

// // Ordenar el arreglo antes de realizar la búsqueda binaria
// body.sort((a, b) => a - b);

// let targetValue = 3;
// let resultIndex = binarySearch(body, targetValue);

// let searchValue = 3;
// let foundIndex = body.findIndex(value => value === searchValue);

// if (foundIndex !== -1) {
//     console.log(`El valor ${searchValue} se encontró en el índice ${foundIndex}`);
// } else {
//     console.log(`El valor ${searchValue} no se encontró en el arreglo`);
// }