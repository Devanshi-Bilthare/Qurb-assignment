import React, { useContext } from 'react'
import { CartContext } from '../CartContext'

const CheckOutDetails = ({totalAmount,freeItems}) => {
    const {clearCart} = useContext(CartContext)
  return (
     <div className="w-full md:w-1/3 bg-white rounded shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
          <div className="flex justify-between text-lg font-medium mb-4">
            <span>Total Amount:</span>
            <span>£{totalAmount.toFixed(2)}</span>
          </div>

          {freeItems.length > 0 && (
  <div className="mt-6 border-t pt-4">
    <h3 className="text-xl font-semibold mb-2">Free Items</h3>
    <ul>
      {freeItems.map((item) => (
        <li key={item.id} className="flex items-center gap-4 py-2 border-b">
          <div className="w-20 h-16">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-green-600">Free Offer</p>
            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
)}

          <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 cursor-pointer transition">
            Proceed to Payment
          </button>
          <button
            onClick={clearCart}
            className="mt-3 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            Clear Cart
          </button>
        </div>
  )
}

export default CheckOutDetails