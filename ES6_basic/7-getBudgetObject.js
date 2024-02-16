// Define a function to create a budget object with keys matching parameter names.
export default function getBudgetObject(income, gdp, capita) {
  // Create a budget object with keys 'income', 'gdp', and 'capita',
  // using the parameter names as values.
  const budget = {
    income,
    gdp,
    capita,
  };

  // Return the budget object.
  return budget;
}
