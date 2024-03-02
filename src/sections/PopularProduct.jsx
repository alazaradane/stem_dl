import React from 'react'
import {products} from '../constants/index'
import PopularProductCard from '../components/PopularProductCard'

const PopularProduct = () => {
  return (
    <section 
      id='products'
      className=' max-container max-sm:mt-12 px-6 py-3'>
        <div className=' flex flex-col justify-start gap-5'>
          <h2 className=' text-4xl font-bold font-palanquin'>Our <span className=' text-coral-blue'>Popular</span> Books</h2>
          <p className=' lg:max-w-lg mt-2 font-montserrat text-slate-gray text-lg leading-7'>
            Discover the captivating stories that have captured the hearts and minds of readers worldwide in our Popular Books
          </p>
        </div>
        <div className=' mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
          {products.map((product)=>
            <PopularProductCard key={product.name} {...product}/>
          )}
        </div>
      </section>
  )
}

export default PopularProduct;