import React from 'react'
import ProductCart from './ProductCart'
import { useAppContext } from '../Context/AppContext'
export default function BestSeller() {
  const {products} = useAppContext()
  return (
    <div className='mt-16 '>
        <p className='text-2xl mb-6 md:text-2xl font-medium'>BestSeller</p>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 xl:grid-cols-5 xl:gap-6'>
          {products.filter((product)=>product.inStock).slice(0,5).map((product,index)=>(
            <ProductCart key={index} product={product}></ProductCart>
          ))}
        </div>

    </div>
  )
}
