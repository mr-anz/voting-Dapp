
import React from 'react'
import { Web3Button } from '@web3modal/react'
import { Link } from 'react-router-dom'
const la = process.env.REACT_APP_API_KEY
const Navbar = () => {
  console.log(la)
  return (
    <div className="navbar bg-black glass">
        <div className="flex-1">
            <Link to={'/'} className="btn btn-ghost normal-case text-[#c6f219] text-xl">Timeless</Link>
        </div>
        <div className="flex-none">
            
          <Web3Button/>
        </div>
    </div>
  )
}

export default Navbar