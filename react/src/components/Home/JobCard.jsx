// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import React from "react";

// const JobCard = (props) => {
//   const {
//     title,
//     category,
//     description,
//     isLive,
//     location,
//     companyCulture,
//     salary,
//   } = props.jobDetails;

//   return (
//     <div className="mt-8 mx-12 bg-gradient-to-r from-blue-50 to-white shadow-xl rounded-lg p-6 mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
//       <h2 className="text-3xl font-bold text-blue-800 mb-4 border-b pb-2">
//         {title}
//       </h2>

//       <div className="mb-4">
//         <p className="text-sm text-gray-600 mb-1">
//           <span className="font-semibold">Category: </span>
//           {category}
//         </p>
//         <p className="text-gray-700">
//           <span className="font-semibold">Description: </span>
//           {description}
//         </p>
//       </div>

//       <div className="mb-4 flex items-center">
//         <svg
//           className="w-5 h-5 text-blue-400 mr-2"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="currentColor"
//         >
//           <path d="M12 2C8.687 2 6 4.687 6 8c0 4.227 6 12 6 12s6-7.773 6-12c0-3.313-2.687-6-6-6zm0 8.5c-1.381 0-2.5-1.119-2.5-2.5S10.619 5.5 12 5.5s2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z" />
//         </svg>
//         <p className="text-gray-700">
//           <span className="font-semibold">Location: </span>
//           {location}
//         </p>
//       </div>

//       <p className="text-gray-700 mb-4">
//         <span className="font-semibold">Company Culture: </span>
//         {companyCulture}
//       </p>

//       <p className="text-gray-700 mb-4">
//         <span className="font-semibold">Salary: </span>$
//         {salary.toLocaleString()} per month
//       </p>

//       <p
//         className={`inline-block px-4 py-2 rounded-full text-white font-semibold ${
//           isLive ? "bg-green-500" : "bg-red-500"
//         }`}
//       >
//         Status: {isLive ? "Live" : "Not Live"}
//       </p>
//     </div>
//   );
// };

// export default JobCard;
import React from "react";
import { Link } from "react-router-dom";

const JobCard = (props) => {
  const {
    title,
    company,
    location,
    salary,
    experience,
    _id,
  } = props.jobDetails;

  return (
    <div className="job-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
  <h2 className="text-2xl font-bold text-blue-800 mb-2">
    {title}
  </h2>
  <p className="text-sm text-gray-500 mb-4">{location}</p>

  <div className="border-t border-gray-200 pt-4 mt-4">
    <div className="text-gray-600 text-sm mb-1">
      <strong className="font-medium">Salary:</strong> ${salary}
    </div>
    <div className="text-gray-600 text-sm mb-1">
      <strong className="font-medium">Experience:</strong> {experience} years
    </div>
  </div>

  <div className="flex justify-end mt-6">
    <Link
      to={`JobDetails/${_id}`}
      className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
    >
      View Details
    </Link>
  </div>
</div>

  );
};

export default JobCard;
