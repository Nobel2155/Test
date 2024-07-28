import React from 'react'
import Link from 'next/link'

const SearchBtn = () => {
  return (
    <div>
      <Link href="./../../../pages/searchResult" passHref>
        <button className='bg-green-800 w-[150px] h-[50px] font-bold text-white rounded'>
          Search Flights
        </button>
      </Link>
    </div>
  )
}

export default SearchBtn
