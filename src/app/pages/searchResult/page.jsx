// 'use client'
// import React, { useEffect, useState } from 'react';
// // import Graph from "../../../components/searchResult/Graph"
// // import Filter from "../../../components/searchResult/Filter"
// import AirlineTable from "../../../components/searchResult/AirlineTable"
// import { redirect } from 'next/navigation'; 

// const SearchResult = () => {
//   const [show, setShow] = useState('');

//   useEffect(() => {
//     const storedShow = localStorage.getItem('show');
//     if (storedShow) {
//       setShow(storedShow);
//     } else {
//       setShow('false'); // Default to false if no value in localStorage
//     }
//   }, []);

//   useEffect(() => {
//     if (show === 'false') {
//       redirect('/'); // Use the redirect function for navigation
//     }
//   }, [show]);
//   return (
//     <div className="lg:max-w-[1200px] mx-auto">
//       {/* <Graph/> */}
//       <div className="flex items-start gap-5 pt-5">
//          {/* <Filter/> */}
//         <AirlineTable/>
//       </div>
//     </div>
//   );
// };

// export default SearchResult;

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
