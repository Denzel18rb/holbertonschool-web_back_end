// Define a function named returnHowManyArguments using the rest parameter syntax.
export default function returnHowManyArguments(...args) {
  // The rest parameter ...args collects all the arguments passed to the function into an array.
  // Return the length of the args array, which represents the number of arguments passed.
  return args.length;
}
