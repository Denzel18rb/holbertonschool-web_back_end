// Import the getBudgetObject function from another module.
import getBudgetObject from './7-getBudgetObject';

// Define a function to create a full budget object with ES6 method properties.
export default function getFullBudgetObject(income, gdp, capita) {
  // Create a budget object using the getBudgetObject function.
  const budget = getBudgetObject(income, gdp, capita);

  // Create a fullBudget object, which includes budget properties and methods.
  const fullBudget = {
    ...budget, // Spread the properties from the budget object.

    // Define a method to get income in dollars.
    getIncomeInDollars(income) {
      return `$${income}`;
    },

    // Define a method to get income in euros.
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  // Return the fullBudget object.
  return fullBudget;
}
