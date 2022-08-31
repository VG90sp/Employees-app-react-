import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data }) => {
  const elements = data.map(({ name, salary, increase, id }) => {
    return (
      <EmployeesListItem
        key={id}
        userName={name}
        userSalary={salary}
        userIncrease={increase}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
