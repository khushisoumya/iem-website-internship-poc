import DepartmentLayout from "../departments/DepartmentLayout";
import { departments } from "../../data/departments";

function AI() {
  const data = departments.ai;

  return (
    <DepartmentLayout
      title={data.title}
      description={data.description}
    />
  );
}

export default AI;