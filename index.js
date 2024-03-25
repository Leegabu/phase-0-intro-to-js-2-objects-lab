// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress:"Tom mboya"
  };

function updateEmployeeWithKeyAndValue(employee,streetAddress, value) {
    const newEmployee = { ...employee };
    newEmployee[streetAddress] = "11 Broadway"
    return newEmployee;
  }


const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
} 
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Alex');
console.log(employee);

const   deleteFromEmployeeByKey = (employee, key) => {
  const hiredEmployee = {...employee}
  delete hiredEmployee[key]
  return hiredEmployee;
}

const hiredEmployee = deleteFromEmployeeByKey( employee , `name`);

const   destructivelyDeleteFromEmployeeByKey = (employee, key) =>{
  delete employee[key]
  return employee;
}
destructivelyDeleteFromEmployeeByKey(employee, `name`);