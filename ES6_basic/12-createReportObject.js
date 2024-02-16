// Define a function to create a report object.
export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList, // Key "allEmployees" mapped to the employees list.

    // Method property "getNumberOfDepartments" to return the number of departments.
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
}
