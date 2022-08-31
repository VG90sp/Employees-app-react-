import AppFilter from "../app-filter/app-filter";
import { AppInfo } from "../app-info/app-info";
import EmployeesList from "../employees-list/employees-list";
import SearchPanel from "../search-panel/search-panel";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css";

function App() {
  const dataUser = [
    { name: "John", salary: 800, increase: false, id: 1 },
    { name: "Bob", salary: 3000, increase: false, id: 2 },
    { name: "Jane", salary: 5000, increase: false, id: 3 },
    { name: "Vova", salary: 70000, increase: true, id: 4 },
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={dataUser} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
