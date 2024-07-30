 'use client';
import React, { useEffect, useState } from 'react';
import AirlineTable from '../../../components/searchResult/AirlineTable';
import { useRouter } from 'next/navigation'; 
import Graph from "../../../components/searchResult/Graph"
const SearchResult = () => {
  const [show, setShow] = useState('');
  const router = useRouter();  // Initialize the router for navigation

  useEffect(() => {
    const storedShow = localStorage.getItem('show');

    if (storedShow) {
      setShow(storedShow);
    } else {
      setShow('false');  // Default to 'false' if no value in localStorage
    }
  }, []);


  // Immediately redirect if 'show' is 'false'
  useEffect(() => {
    if (show === 'false') {
      router.push('/');  // Use router.push for navigation
    }
  }, [show, router]);  // Include router in dependencies to avoid warnings

  // Early return if navigating to prevent rendering content
  if (show === 'false') {
    return null;
  }

  return (
    <div className="lg:max-w-[1200px] mx-auto mt-[60px]">
          <Graph/>
      <div className="flex items-start gap-5 pt-5">
         {/* <Filter/> */}
        <AirlineTable/>
      </div>
    </div>
  );
};

export default SearchResult;



// 'use client';
// import React, { useEffect, useState } from 'react';
// import AirlineTable from '../../../components/searchResult/AirlineTable';
// import { useRouter } from 'next/navigation';
// import Graph from "../../../components/searchResult/Graph";
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// const SearchResult = () => {
//   const [show, setShow] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();  // Initialize the router for navigation

//   useEffect(() => {
//     const storedShow = localStorage.getItem('show');

//     if (storedShow) {
//       setShow(storedShow);
//     } else {
//       setShow('false');  // Default to 'false' if no value in localStorage
//     }

//     // Simulate a loading delay
//     setTimeout(() => {
//       setIsLoading(false);  // Set loading to false after data is ready
//     }, 6000); // Adjust the delay as needed
//   }, []);

//   // Immediately redirect if 'show' is 'false'
//   useEffect(() => {
//     if (show === 'false') {
//       router.push('/');  // Use router.push for navigation
//     }
//   }, [show, router]);  // Include router in dependencies to avoid warnings

//   // Early return if navigating to prevent rendering content
//   if (show === 'false') {
//     return null;
//   }

//   return (
//     <div className="lg:max-w-[1200px] mx-auto mt-[60px]">
//       {isLoading ? (
//         // Show skeleton loaders when loading
//         <div>
//           <Skeleton height={200} />
//           <div className="flex items-start gap-5 pt-5">
//             <Skeleton height={400} width={200} />
//             <Skeleton height={400} width="100%" />
//           </div>
//         </div>
//       ) : (
//         // Show actual content when loading is complete
//         <div>
//           <Graph />
//           <div className="flex items-start gap-5 pt-5">
//             {/* <Filter/> */}
//             <AirlineTable />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchResult;


// 'use client';
// import React, { useEffect, useState } from 'react';
// import AirlineTable from '../../../components/searchResult/AirlineTable';
// import { useRouter } from 'next/navigation';
// import Graph from "../../../components/searchResult/Graph";
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// const SearchResult = () => {
//   const [show, setShow] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const storedShow = localStorage.getItem('show');
//     if (storedShow) {
//       setShow(storedShow);
//     } else {
//       setShow('false');
//     }
//   }, []);

//   useEffect(() => {
//     // Fetch data or perform necessary operations here
//     async function fetchData() {
//       try {
//         // Replace the following with actual data fetching logic
//         // For example, fetching flight data or other required information
//         await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulated fetch
//         // Data fetched successfully, set loading to false
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setIsLoading(false);
//       }
//     }

//     if (show !== 'false') {
//       fetchData();
//     }
//   }, [show]);

//   useEffect(() => {
//     if (show === 'false') {
//       router.push('/');
//     }
//   }, [show, router]);

//   if (show === 'false') {
//     return null;
//   }

//   return (
//     <div className="lg:max-w-[1200px] mx-auto mt-[60px]">
//       {isLoading ? (
//         <div>
//           <Skeleton height={200} />
//           <div className="flex items-start gap-5 pt-5">
//             <Skeleton height={400} width={200} />
//             <Skeleton height={400} width="100%" />
//           </div>
//         </div>
//       ) : (
//         <div>
//           <Graph />
//           <div className="flex items-start gap-5 pt-5">
//             {/* <Filter/> */}
//             <AirlineTable />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchResult;
