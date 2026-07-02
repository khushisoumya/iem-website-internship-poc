import { departments } from "../../data/departments";
import DepartmentLayout from "./DepartmentLayout";

export default function DepartmentPage({ slug }) {
  const data = departments[slug];

  if (!data) {
    return (
      <div className="max-w-[1200px] mx-auto px-5 py-24 text-center">
        <h2 className="text-3xl font-bold text-[#0a1c4e]">Department Not Found</h2>
        <p className="mt-3 text-gray-600">
          The department you’re looking for doesn’t exist.{" "}
          <a href="#programs" className="text-blue-600 hover:underline">
            Browse all programmes
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <DepartmentLayout
      title={data.title}
      heroLabel={data.heroLabel}
      heroTitle={data.heroTitle}
      heroSummary={data.heroSummary}
      tagline={data.tagline}
      description={data.description}
      heroImage={data.heroImage}
      stats={data.stats}
      about={data.about}
      focusAreas={data.focusAreas}
      labs={data.labs}
      curriculum={data.curriculum}
      faculty={data.faculty}
      facilities={data.facilities}
    />
  );
}
