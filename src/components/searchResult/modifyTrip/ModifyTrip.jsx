import React from 'react'

const ModifyTrip = () => {
  return (
    <div><div className="flex mb-2 gap-7  text-black">
    <div className="flex items-center gap-1 relative cursor-pointer">
      <input
        // onClick={oneWay}
        value="oneway"
        defaultChecked
        type="radio"
        name="transport"
        id=""
      />
      <p className="text-sm  font-medium ">
        One Way
      </p>
    </div>

    <div className="flex items-center gap-1 relative cursor-pointer">
      <input
        // onClick={roundWay}
        value="Round way"
        type="radio"
        name="transport"
        id=""
      />
      <p className="text-sm  font-medium text-center">
        Round Way
      </p>
    </div>

    <div className="flex items-center gap-1 relative cursor-pointer">
      <input
        // onClick={multi}
        value="Multi city"
        type="radio"
        name="transport"
        id=""
      />
      <p className="text-sm  font-medium ">
        Multi City
      </p>
    </div>
  </div></div>
  )
}

export default ModifyTrip