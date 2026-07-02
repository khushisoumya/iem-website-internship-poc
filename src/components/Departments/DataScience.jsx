import DepartmentLayout from "../departments/DepartmentLayout";
import { departments } from "../../data/departments";

function DataScience() {
  const data = departments.dataScience;

  return (
    <DepartmentLayout
      title={data.title}
      description={data.description}
    />
  );
}

export default DataScience;