import {
  GraduationCap,
  Users,
  Building2,
  ChevronRight,
  Check,
  UserRound,
} from "lucide-react";

import {
  Award,
  Handshake,
  BookOpen,
  FileText,
  Trophy,
} from "lucide-react";

import { Send } from "lucide-react";


export default function DepartmentLayout({
  title,
  heroLabel,
  heroTitle,
  heroSummary,
  tagline,
  description,
  heroImage,
  stats,
  about,
  focusAreas,
  labs,
  curriculum,
  faculty,
  facilities,
}) {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0a1c4e] text-white overflow-hidden h-[500px]">

        <img
          src={heroImage}
          alt={title}
          className="absolute right-0 top-0 h-full w-1/2 object-cover"
        />

        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-r from-[#0a1c4e] via-[#0a1c4e]/60 to-transparent"></div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 h-full flex flex-col justify-center">

          <p className="text-sm text-gray-300 mb-6">
            Home &gt; Academics &gt; Departments &amp; Programmes &gt; {title}
          </p>

          <h1 className="text-5xl font-bold mb-5 text-white">{heroTitle}</h1>

          <p className="text-xl text-gray-200 mb-5">
            {tagline}
          </p>

          <div className="w-16 h-1 bg-yellow-400 mb-6"></div>

          <p className="max-w-xl leading-80 text-gray-200 mb-8">{heroSummary}</p>

          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-lg font-medium">
              Apply Now
            </button>

            <button className="border border-white px-7 py-3 rounded-lg hover:bg-white hover:text-[#0a1c4e] transition">
              Download Brochure
            </button>
          </div>

        </div>
      </section>



      {/* stats */}
      {/* Stats */}

{stats?.length > 0 && (
<section className="max-w-[1200px] mx-auto -mt-12 relative z-20">

  <div className="bg-white rounded-2xl shadow-xl grid grid-cols-5 overflow-hidden">

    {stats.map((item) => (

      <div
        key={item.label}
        className="py-8 border-r last:border-r-0 text-center"
      >

        <h3 className="text-4xl font-bold text-blue-700">
          {item.value}
        </h3>

        <p className="text-gray-600 mt-2">
          {item.label}
        </p>

      </div>

    ))}

  </div>

</section>
)}


{/*about*/}

{about && (
<section className="max-w-[1200px] mx-auto px-5 py-20">

  <div className="grid lg:grid-cols-2 gap-10 items-center">

    {/* Left */}

    <div>

      <h2 className="text-4xl font-bold text-[#0a1c4e]">
        {about.title}
      </h2>

      <div className="w-16 h-1 bg-blue-600 my-5"></div>

      <p className="text-gray-600 leading-8 mb-8">
        {about.description}
      </p>

      <div className="space-y-5">

        {about.points.map((point) => (

          <div
            key={point}
            className="flex gap-3 items-start"
          >

            <div className="w-3 h-3 rounded-full bg-blue-600 mt-2"></div>

            <p className="text-gray-700">
              {point}
            </p>

          </div>

        ))}

      </div>

    </div>

    {/* Right */}

    <div
      className="relative rounded-2xl overflow-hidden min-h-[420px]"
    >

      <img
        src={about.visionImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[#0a1c4e]/80"></div>

      <div className="relative z-10 p-10 text-white h-full flex flex-col justify-end">

        <p className="text-yellow-400 text-6xl leading-none">
          "
        </p>

        <h3 className="text-3xl font-bold mb-5 text-white">
          {about.visionTitle}
        </h3>

        <p className="leading-8">
          {about.vision}
        </p>

      </div>

    </div>

  </div>

</section>
)}



{/* Focus Areas */}

{focusAreas?.length > 0 && (
<section className="bg-gray-50 py-20">

  <div className="max-w-[1200px] mx-auto px-5">

    <div className="text-center mb-14">

      <p className="text-blue-600 font-semibold uppercase tracking-wider">
        Specializations
      </p>

      <h2 className="text-4xl font-bold text-[#0a1c4e] mt-3">
        Focus Areas
      </h2>

      <div className="w-16 h-1 bg-blue-600 mx-auto mt-5"></div>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {focusAreas.map((area) => (

        <div
          key={area.title}
          className="bg-white rounded-xl shadow-md p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
        >

          <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">

            <GraduationCap
  size={28}
  className="text-blue-700"
/>

          </div>

          <h3 className="text-2xl font-semibold text-[#0a1c4e] mb-4">
            {area.title}
          </h3>

          <p className="text-gray-600 leading-7">
            {area.description}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>
)}


{/* labs */}
{labs?.length > 0 && (
<section className="max-w-[1200px] mx-auto px-5 py-20">

  <div className="text-center mb-14">

    <p className="uppercase tracking-widest text-blue-600 font-semibold">
      Infrastructure
    </p>

    <h2 className="text-4xl font-bold text-[#0a1c4e] mt-3">
      State-of-the-Art Laboratories
    </h2>

    <div className="w-16 h-1 bg-blue-600 mx-auto mt-4"></div>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {labs.map((lab) => (

      <div
        key={lab.title}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300"
      >

        <img
          src={lab.image}
          alt={lab.title}
          className="w-full h-56 object-cover"
        />

        <div className="p-6">

          <h3 className="text-2xl font-semibold text-[#0a1c4e] mb-3">
            {lab.title}
          </h3>

          <p className="text-gray-600 leading-7">
            {lab.description}
          </p>

        </div>

      </div>

    ))}

  </div>

</section>
)}


{/*
another last sectionb */}

<section className="max-w-[1200px] mx-auto px-5 py-20">

    <div className="text-center mb-14">

        <p className="uppercase tracking-widest text-blue-600 font-semibold">
            Resources
        </p>

        <h2 className="text-4xl font-bold text-[#0a1c4e] mt-3">
            Learn • Meet • Explore
        </h2>

        <div className="w-16 h-1 bg-blue-600 mx-auto mt-4"></div>

    </div>

    <div className="grid lg:grid-cols-3 gap-8">
       
            {/* Curriculum */}

{curriculum && (
<div className="bg-white rounded-2xl border shadow-sm p-8 hover:shadow-xl transition">

  <GraduationCap
    className="text-blue-700 mb-5"
    size={34}
  />

  <h3 className="text-2xl font-bold text-[#0a1c4e]">
    {curriculum.title}
  </h3>

  <p className="text-gray-500 mt-3 leading-7">
    {curriculum.description}
  </p>

  <div className="mt-8 space-y-4">

    {curriculum.programs.map((program) => (

      <div
        key={program}
        className="flex justify-between items-center border-b pb-3 hover:text-blue-700 cursor-pointer transition"
      >
        <span>{program}</span>

        <ChevronRight size={18} />

      </div>

    ))}

  </div>

  <button className="mt-8 text-blue-700 font-semibold hover:underline">
    View Curriculum →
  </button>

</div>
)}
    {/* Faculty */}

    {faculty && (
    <div className="bg-white rounded-2xl border shadow-sm p-8 hover:shadow-xl transition">

<Users className="text-blue-700 mb-5" size={34}/>

<h3 className="text-2xl font-bold text-[#0a1c4e]">
{faculty.title}
</h3>

<p className="text-gray-500 mt-3">
{faculty.description}
</p>

<div className="grid grid-cols-2 gap-6 mt-8">

{faculty.members.map(member=>(

<div key={member.name} className="text-center flex-1">

<div className="w-20 h-20 rounded-full bg-blue-100 border-4 border-blue-200 flex items-center justify-center mx-auto">
  <UserRound size={36} className="text-blue-700" />
</div>

<h4 className="font-semibold mt-3 text-sm">
{member.name}
</h4>

<p className="text-xs text-gray-500">
{member.role}
</p>

</div>

))}

</div>

<button className="mt-8 text-blue-700 font-semibold">
View Faculty →
</button>

</div>
)}

    {/* Facilities */}

    {facilities && (
    <div className="bg-white rounded-2xl border shadow-sm p-8 hover:shadow-xl transition">

<Building2 className="text-blue-700 mb-5" size={34}/>

<h3 className="text-2xl font-bold text-[#0a1c4e]">
{facilities.title}
</h3>

<p className="text-gray-500 mt-3">
{facilities.description}
</p>

<div className="mt-8 space-y-5">

{facilities.items.map(item=>(

<div
key={item}
className="flex items-center gap-4"
>

<div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">

<Check className="text-blue-700" size={15}/>

</div>

<span>{item}</span>

</div>

))}

</div>

<button className="mt-8 text-blue-700 font-semibold">
Explore Facilities →
</button>

</div>
)}

    </div>



</section>


{/* Achievements */}
{/* 
<section className="max-w-[1200px] mx-auto px-5 pb-12">

  <div className="bg-gradient-to-r from-[#f6f8ff] to-white rounded-2xl shadow-sm border">

    <div className="grid grid-cols-2 md:grid-cols-5">

      {[
        {
          value: "25+",
          label: "National & International Awards",
          icon: "🏆",
        },
        {
          value: "50+",
          label: "Industry Collaborations",
          icon: "🤝",
        },
        {
          value: "100+",
          label: "Research Publications",
          icon: "📘",
        },
        {
          value: "20+",
          label: "Patent Filed",
          icon: "📄",
        },
        {
          value: "95%",
          label: "Placement Rate",
          icon: "🏅",
        },
      ].map((item) => (
        <div
          key={item.label}
          className="text-center py-8 border-r last:border-r-0"
        >
          <div className="text-3xl mb-2">{item.icon}</div>

          <h3 className="text-4xl font-bold text-blue-700">
            {item.value}
          </h3>

          <p className="text-gray-600 text-sm mt-2 px-4">
            {item.label}
          </p>
        </div>
      ))}

    </div>

  </div>

</section>  */}



{/* CTA */}

{/* <section className="max-w-[1200px] mx-auto px-5 pb-20">

<div className="rounded-2xl bg-gradient-to-r from-[#06245d] to-[#0b4cc5] p-10 flex flex-col md:flex-row items-center justify-between text-white">

<div>

<p className="text-blue-200 mb-2">
Join the journey of innovation
</p>

<h2 className="text-4xl font-bold mb-3">
Shape the Future of {title}
</h2>

<p className="text-blue-100">
Be a part of a community that builds, innovates and researches.
</p>

</div>

<button className="mt-8 md:mt-0 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
Apply for Admission →
</button>

</div>

</section> */}



{/* another try */}

{/* Achievements */}

<section className="bg-gray-50 py-14">
  <div className="max-w-[1200px] mx-auto px-5">

    <h2 className="text-3xl font-bold text-[#0a1c4e] mb-8">
      Our Achievements
    </h2>

    <div className="bg-white rounded-2xl shadow-md grid grid-cols-2 md:grid-cols-5">

      {[
        {
          icon: Award,
          value: "25+",
          label: "National & International Awards",
        },
        {
          icon: Handshake,
          value: "50+",
          label: "Industry Collaborations",
        },
        {
          icon: BookOpen,
          value: "100+",
          label: "Research Publications",
        },
        {
          icon: FileText,
          value: "20+",
          label: "Patent Filed",
        },
        {
          icon: Trophy,
          value: "95%",
          label: "Placement Rate",
        },
      ].map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="p-8 border-r last:border-r-0 text-center"
          >
            <Icon
              size={34}
              className="mx-auto text-blue-700 mb-4"
            />

            <h3 className="text-4xl font-bold text-blue-700">
              {item.value}
            </h3>

            <p className="text-gray-600 mt-2 text-sm">
              {item.label}
            </p>
          </div>
        );
      })}

    </div>

  </div>
</section>


{/* CTA */}

<section className="py-14">
  <div className="max-w-[1200px] mx-auto px-5">

    <div className="rounded-2xl bg-gradient-to-r from-[#082b73] to-[#0f5be7] text-white px-12 py-10 flex flex-col lg:flex-row justify-between items-center">

      <div className="flex gap-6 items-center">

        <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">

          <Send
            size={34}
            className="text-white"
          />

        </div>

        <div>

          <p className="text-sm text-blue-200">
            Join the journey of innovation
          </p>

          <h2 className="text-4xl font-bold mt-2 text-white">
            Shape the Future
          </h2>

          <p className="mt-3 text-blue-100 max-w-xl">
            Be a part of a community that builds,
            innovates and reaches for the skies.
          </p>

        </div>

      </div>

      <button className="mt-8 lg:mt-0 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition">
        Apply for Admission →
      </button>

    </div>

  </div>
</section>


    </div>
  );
}