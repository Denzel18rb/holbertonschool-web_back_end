// Define a function to create an iterator object for employees in departments.
export default function createIteratorObject(report) {
  // Define a generator function to iterate through all employees.
  function* employeeIterator() {
    // Iterate through the department names using Object.keys.
    for (const department of Object.keys(report.allEmployees)) {
      // Iterate through the employees in each department.
      for (const employee of report.allEmployees[department]) {
        // Yield each employee to the iterator.
        yield employee;
      }
    }
  }

  // Return an iterator object with the employeeIterator.
  return {
    [Symbol.iterator]: employeeIterator,
  };
}
