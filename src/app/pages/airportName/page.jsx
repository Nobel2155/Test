// "use client"
// import React, {useState} from 'react'
// import {airportDetails} from "../../../dataSet/airportName.jsx"


// const airportName = () => {
//     const [search, setSearch] = useState('');
    
   
//   return (
//     <div>
//     <div className='bg-black/50 w-[1000px] h-28 mx-auto'>
//       <div className='mx-auto'>
//       <div className='top-20 left-20'>
//       < input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Departure' className='px-4 py-2 border'/>
//       </div>
        
//       </div>
//     </div>

//     {/* From Dropdown */}
//     {/* <div className=''>
//           {fromList.map((e, id) => (
//               <div 
//                   onClick={() => handleFromSelect(e)} 
//                   className='bg-[#F0F8FF]' 
//                   key={id}
//               >
//                   <div className='bg-[#FFFFFF] py-1 px-2 border rounded-lg overflow-hidden'>
//                       <div className='flex  justify-between'>
//                           <div className='text-start'>
//                               <p className='mb-2 text-[#6B6A69] text-xs font-light font-noto'>{e.cityName}</p>
//                               <p className='mb-1 text-sm font-semibold text-black font-noto'>{e.airportName}</p>
//                           </div>
//                           <p className='text-[#6B6A69] text-xs font-light font-noto'>{e.airportCode}</p>
//                       </div>
//                   </div>
//               </div>
//           ))}
//       </div> */}
//       <div className=' w-[400px] h-[550px] bg-white shadow-md absolute top-[90px] left-[0px] rounded-lg overflow-hidden'>
//       <div className='bg-[#FFFFFF] py-1 px-2 border rounded-lg'>
//         {airportDetails.filter((item) =>{
//             return search.toLowerCase === '' ? item : item.cityName.includes(search)
                                                     
//                                                     || item.airportName.includes(search)
//                                                     || item.airportName.toLocaleLowerCase().includes(search)
//                                                     || item.airportName.toLocaleUpperCase().includes(search)
//                                                     || item.airportCode.includes(search)
//                                                     || item.airportCode.toLocaleLowerCase().includes(search)
//                                                     || item.countryName.includes(search)
//                                                     || item.countryName.toLocaleLowerCase().includes(search)
//                                                     || item.countryName.toLocaleUpperCase().includes(search)
//         })
//         .map((item) =>(
//             <div className='flex justify-between border-b' key={item.id}>
//                 <div className='text-start p-1'>
//                     <p className='mb-2 text-[#282828] text-sm font-light font-noto'>{item.cityName}, {item.countryName}</p>
//                     <p className='mb-1 text-sm font-medium text-black font-noto'>{item.airportName}</p>
//                 </div>
//                 <div>
//                     <p className='text-[#282828] text-SM font-light font-noto'>{item.airportCode}</p>
//                 </div>
//             </div>
//         ))}
//       </div>
    
//     </div>             
//     </div>
//   );
// }

// export default airportName

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
