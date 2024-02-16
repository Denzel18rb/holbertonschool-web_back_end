// Define a function to get the current year using JavaScript's Date object.
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

// Define a function to create a budget object with computed property names.
export default function getBudgetForCurrentYear(income, gdp, capita) {
  // Create a budget object with property names that include the current year,
  // based on the result of getCurrentYear().
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  // Return the budget object.
  return budget;
}
