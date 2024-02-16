// Define a function to concatenate arrays and a string using spread syntax.
export default function concatArrays(array1, array2, string) {
  // Spread the elements of array1, array2, and string into a new array.
  return [...array1, ...array2, ...string];
}
