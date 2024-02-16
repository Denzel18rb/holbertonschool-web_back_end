// Define a function named getNeighborhoodsList.
export default function getNeighborhoodsList() {
  // Initialize an array called sanFranciscoNeighborhoods with two elements.
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // Define a method named addNeighborhood using an arrow function.
  this.addNeighborhood = (newNeighborhood) => {
    // Use this.sanFranciscoNeighborhoods to access the previously defined array.
    // Then, add the new neighborhood (newNeighborhood) to the array.
    this.sanFranciscoNeighborhoods.push(newNeighborhood);

    // Return the updated array.
    return this.sanFranciscoNeighborhoods;
  };
}
