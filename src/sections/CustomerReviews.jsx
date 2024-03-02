import React from 'react'
import {reviews} from '../constants/index'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className=' max-container px-6 py-10'>
      <h3 className=' font-palanquin text-4xl font-bold text-center text-black'> What Our <span className=' text-coral-blue'>Readers</span> Say?</h3>
      <p className=' info-text m-auto mt-4 max-w-lg text-center text-xl font-montserrat'>
        Hear a genuie stories from our satsfied customers about their execptional experinces with us.
      </p>
      <div className=' mt-20 flex flex-1 justify-evenly items-center max-sm:flex-col max-md:gap-3 gap-14'> 
        {reviews.map((review)=>(
          <ReviewCard
            key={review.customerName}
            customerName={review.customerName}
            imgURL={review.imgURL}
            feedback= {review.feedback}
            rating={review.rating}
            />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews