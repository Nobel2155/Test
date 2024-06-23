import React from 'react'
import Feedback from '@/components/homeComponent/feedback/Feedback'

const FeedbackSection = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-4 py-20 pb-28 ">
        <div className="text-center mb-1">
            <h2 className="text-3xl p-1">Feedback</h2>
            <p className="text-xl">See what our client say&apos;s about us.</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         <Feedback/>
         <Feedback/>
         <Feedback/>
      </div>
    </div>
    </div>
  )
}

export default FeedbackSection
