// Define a function to create an object representing a department with its employees.
export default function createEmployeesObject(departmentName, employees) {
  // Create an object with the specified departmentName and employees array.
  return { [departmentName]: employees };
}
