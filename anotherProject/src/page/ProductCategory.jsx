import React from 'react'
import { useAppContext } from '../Context/AppContext'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/assets'
import ProductCart from '../components/ProductCart'

export default function ProductCategory() {
    const { products } = useAppContext()
    const { category } = useParams()
    const searchCategory = categories.find(item => item.path.toLowerCase() === category)
    const filteredProducts = products.filter((product) => product.category.toLowerCase() === category)
    return (
        <div className='mt-16 flex items-center flex-col border-b-2'>

            <div className='flex flex-col items-start w-max'>
                <p className='text-2xl font-medium'>
                    {searchCategory && searchCategory.text.toUpperCase()}
                </p>
                <div className="w-16 h-0.5  bg-primary rounded-full"></div>
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 my-6">
                        {filteredProducts.map((product) => (
                            <ProductCart key={product._id} product={product}></ProductCart>
                        ))}
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-[60vh]">
                        <p className='text-2xl font-normal text-primary'>No products founded in this category</p>
                    </div>
                )
                }
            </div>
        </div>

    )
}
