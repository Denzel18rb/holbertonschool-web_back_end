// Define a function to create a description using template literals.
export default function getSanFranciscoDescription() {
  // Define variables for the year and budget information.
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  // Use a template literal to construct the description, with placeholders for variable values.
  return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}
