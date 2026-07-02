import DepartmentLayout from "../departments/DepartmentLayout";
import { departments } from "../../data/departments";

function CSE() {
  const data = departments.cse;

  return (
    <DepartmentLayout
      title={data.title}
      description={data.description}
    />
  );
}

export default CSE;