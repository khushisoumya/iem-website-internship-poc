//myedit
import PageHeader from '../common/PageHeader';
import photo1 from '../../assets/images/pocp1.png';
import photo2 from '../../assets/images/pocp2.png';
import photo3 from '../../assets/images/pocp3.png';

const leadership = [
  { name: "Prof. (Dr.) Satyajit Chakrabarti", designation: "Chancellor" },
  { name: "Shri Shekhar Dutt, S.M. & IAS (Retd.)", designation: "Former Hon'ble Governor of Chattisgarh & Ex-Defence Secretary, Govt. of India" },
  { name: "Shri Amit Kiran Deb IAS (RETD.)", designation: "Former Chief Secretary, Govt. of West Bengal" },
  { name: "Prof. (Dr.) Sajal Dasgupta", designation: "Vice Chancellor" },
  { name: "Prof. (Dr.) K. P. Ghatak", designation: "Dean (Engineering)" },
  { name: "Prof. (Dr.) Rajiv Ganguly", designation: "Dean (Science)" },
  { name: "Prof. (Dr.) Sanjib Nag", designation: "Professor, Department of Architecture, Former Head, Department of Architecture, Jadavpur University" },
  { name: "Prof. Goutam Pohit", designation: "Department of Mechanical Engineering, Jadavpur University" },
  { name: "Dr. Anindita Ganguly", designation: "Director of Technical Education, Higher Education Department, Govt. of West Bengal" },
  { name: "Dr. Swapan Bhattacharya", designation: "Former Professor & HOD of CSE Dept Jadavpur University, Former Director NIT (Durgapur, Suratkal, Itanagar, Calicut), Former Director IIIT-Kolkata" },
  { name: "Mr. Sujit Kr. Sarkar, IPS (Retd.)", designation: "Former Chief Information Commissioner of West Bengal & Ex-Director General of Police" },
  { name: "Mr. R.Bandyopadhyay, IAS(Retd.)", designation: "Former Member Central Administrative Tribunal (CAT), Former Secretary Ministry of Corporate Affairs G.O.I, Former Secretary Department of Public Enterprises G.O.I" },
  { name: "Prof. Banani Chakrabarti", designation: "Pro-Vice Chancellor (Finance), UEM, Kolkata" },
  { name: "Prof. (Dr.) Satyajit Chakrabarti", designation: "Pro-Vice Chancellor, UEM, Kolkata" },
  { name: "Dr. Shantanu Chakrabarti", designation: "Former Head of Research Applications at Tata Steel India, Hon. Visiting Scientist at DMSRDE (DRDO), Distinguished Visiting Professor at Indian National Academy of Engineering" },
  { name: "Mr. Ajoyendra Mukherjee", designation: "Former VP & Head – Global HR, Tata Consultancy Services" },
  { name: "Prof. (Dr.) D. S.Chauhan", designation: "Pro-Chancellor, GLA University, former Vice-Chancellor, Uttar Pradesh Technical University, Uttarakhand Technical University, Lovely Professional University, Jaypee University of Information Technology and Secretary General Association of Indian University" },
  { name: "Prof. Ashok Pundir", designation: "Dean of Faculty, National Institute of Engineering (NITIE)" },
  { name: "Prof. Manoj Mitra", designation: "Former Dean of Faculty for Engg. & Technology, Jadavpur University, Jadavpur" },
  { name: "Prof. Dr. Bimal Kumar Roy", designation: "Former Chairman, National Statistical Commission" },
  { name: "Prof. (Dr.) Sukalyan Goswami", designation: "Registrar, UEM, Kolkata" },
];


function About() {
  return (
    <div>
      <PageHeader
        title="About IEM"
        crumb="About IEM"
        subtitle="Since 1989, IEM has built a reputation for academic excellence, industry-oriented learning, research depth and outstanding student outcomes across engineering, management and applied sciences."
      />
      <div className="max-w-[1200px] mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
  <div className="text-gray-700 text-[18px] leading-relaxed space-y-4">
    <p>
      The <span className="text-blue-600 font-semibold">IEM group</span> is an
      acclaimed educational group amongst the industry-centred academic training
      organisations of today. IEM has set sublime standards in addressing the
      technical and managerial resource shortage in the new era of dynamic
      globalisation. The IEM group has risen to fame for its strong foundation
      in teaching and R&D in multifaceted areas. It aims to serve the future
      generation as well as the Nation through its commitment towards self
      sufficiency and unmatchable excellence.
    </p>
    <p>
      Since its inception, the IEM group has surpassed innumerable benchmarks
      of achievements and accreditations. Today IEM flaunts a colossal network
      of expansive operations led by an awe-inspiring student force who are
      the torchbearers of a better tomorrow.
    </p>
    <p>
      The IEM Group has opened up the doors for young minds who dare to dream.
      It encourages the spirit of free enquiry and imagination. In this temple
      of learning, dreams take shape. The educational group attempts to
      inculcate the sense of human values and discipline in students to make
      them respectable human beings. It encourages learners to learn, to
      realize their potential and imbibe the best practices.
    </p>
    <p>
      IEM is established in Kolkata in the IT hub of the state of West Bengal
      since 1989 as the first self-financed engineering college of the state,
      and since then IEM has been socially accredited as the best self-financed
      engineering institute of West Bengal and admits the best students from
      the top engineering merit list of WBJEE and JEE Main.
    </p>
    <p>
      Right from its inception the placement cells of both IEM have
      consistently provided for 1 to 2 jobs on average for all its students.
    </p>
  </div>

  <div className="grid grid-cols-2 gap-3">
    <img
      src={photo1}
      alt="IEM event"
      className="col-span-2 rounded-md object-cover h-56 w-full"
    />
    <img
      src={photo2}
      alt="IEM campus"
      className="rounded-md object-cover h-40 w-full"
    />
    <img
      src={photo3}
      alt="IEM students"
      className="rounded-md object-cover h-40 w-full"
    />
  </div>
</div>
{/* Achievements list */}
<div className="max-w-[1200px] mx-auto px-5 pb-10">
  <ol className="list-decimal pl-5 space-y-3 text-[18px] text-gray-700">
    <li>
      IEM has ranked the 3rd best engineering college in West Bengal after
      IIT Kharagpur and NIT Durgapur by NIRF (National Institutional Ranking
      Framework), Ministry of HRD, Govt. of India, amd 79th all across India,
      where all IITs, NITs
    </li>
    <li>IEM has won the title of the "Jewel of the East" by Telegraph</li>
    <li>IEM has won the title of "Picture Perfect" by ABP Group</li>
    <li>IEM has achieved the best institute of India in Star News Award</li>
    <li>
      IEM is successfully organizing international conferences for the last
      few years as mentioned below:
      <ol className="list-[lower-alpha] pl-5 mt-2 space-y-1">
        <li>
          IEEE IEMCON at University of British Columbia, Vancouver, Canada
          (ieee-iemcon.org) since 2015
        </li>
        <li>
          IEEE UEMCON at Columbia University, New York, USA (ieee-uemcon.org)
          since 2016
        </li>
        <li>
          IEEE CCWC, University of Nevada, Las Vegas (ieee-ccwc.org) since 2017
        </li>
        <li>
          IEEE IEMANTENNA, University of British Columbia, Vancouver, Canada
          (iemantenna.org) in 2019
        </li>
        <li>
          IEEE IEMTRONICS at University of British Columbia, Vancouver,
          Canada (iemtronics.org) since 2020
        </li>
      </ol>
    </li>
    <li>
      The educational group has one of the strongest Placement Cells in the
      country. Right from its inception both IEM have provided for 1 to 2
      jobs on average for all its students.
    </li>
  </ol>
</div>
{/* Leadership table */}
<div className="max-w-[1200px] mx-auto px-5 pb-16">
  <table className="w-full text-[18px] border-collapse overflow-hidden rounded-md">
    <thead>
      <tr className="bg-blue-600 text-white">
        <th className="text-left p-4 w-1/3">Name</th>
        <th className="text-left p-4">Designation</th>
      </tr>
    </thead>
    <tbody>
      {leadership.map((person, i) => (
        <tr key={i} className={i % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
          <td className="p-4 font-semibold align-top">{person.name}</td>
          <td className="p-4 text-gray-700 align-top">{person.designation}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  );
}

export default About;