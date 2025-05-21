import React, { useContext } from 'react'
import { CartContext } from '../CartContext'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
    const {addToCart} = useContext(CartContext)
    const navigate = useNavigate()

    const handleAddCart = () => {
        addToCart(product)
        navigate('/checkout')
    }
  return (
    <div key={product._id} className=" w-full shadow-md">
          <div className="h-[40vh] overflow-hidden mt-6 group">
            <img
              src={product.img}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div className="px-2 py-1 flex justify-between items-center">
            <div className='w-full'>
              <h3 className="text-lg font-semibold ">{product.name}</h3>
              <h2 className="text-lg font-semibold uppercase">{product.type}</h2>

              {product.description.length > 38
    ? product.description.slice(0, 38) + '... more'
    : product.description}
              <p className="text-md font-bold mt-2">₹ {product.price}</p>
               <p className="text-sm mt-1 text-green-600">
              {product.available >= 10
                ? 'Available'
                : `Only ${product.available} left`}
            </p>
            <p className="text-sm mt-1 text-yellow-500">⭐ {product.rating}</p>
            <button className=" mt-3 w-full bg-black text-white py-1 rounded hover:bg-gray-800 text-sm" onClick={handleAddCart}>
              Add to Cart
            </button>
            </div>
          </div>
        </div>
  )
}

export default ProductCard