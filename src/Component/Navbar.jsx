import { HomeIcon, ShoppingBag, ShoppingCart } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fixed top-0 z-[7] w-full py-5 bg-slate-200 px-10 flex gap-10 justify-center'>
        <div className='flex gap-2'>
            <HomeIcon/>
            <Link to='/'>Home</Link>
        </div>

        <div className='flex gap-2'>
            <ShoppingBag/>
            <Link to='/checkout'>Checkout</Link>
        </div>
    </div>
  )
}

export default Navbar