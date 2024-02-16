// Define a function to append a string to each element of an array using the for...of loop.
export default function appendToEachArrayValue(array, appendString) {
  // Create a new array to store the modified elements.
  const newArray = [];

  // Iterate over each element in the input array using for...of.
  for (const value of array) {
    // Append the specified string to the current element and push it to the new array.
    newArray.push(appendString + value);
  }

  // Return the new array with the appended values.
  return newArray;
}
