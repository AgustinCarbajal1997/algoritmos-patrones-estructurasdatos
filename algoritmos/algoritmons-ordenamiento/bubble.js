/*
Given an unsorted array of n elements, write a function to sort the array

Approach
select the first element of the array
compare it with its next element
if it is larger than the next element then swap them
else do nothing
keep doing this for every index of the array
repeat the above process n times.
 Funciona iterando sobre la lista de elementos y comparando cada par adyacente de 
 elementos. Si un par de elementos está en el orden incorrecto, el algoritmo los intercambia. Este proceso se repite hasta que la lista está ordenada.
*/

const ordenamientoBurbuja = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];

        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

// Ejemplo de uso
const arreglo1 = [5, 3, 8, 4, 6];
console.log(ordenamientoBurbuja(arreglo1)); // Output: [3, 4, 5, 6, 8]
