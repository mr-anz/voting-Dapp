import React from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '../context'

const Navbar = () => {
  const { account, connectWallet } = useStateContext()

  return (
    <div className="navbar bg-black glass">
        <div className="flex-1">
            <Link to={'/'} className="btn btn-ghost normal-case text-[#c6f219] text-xl">Timeless</Link>
        </div>
        <div className="flex-none p-1">
        {account?
        ( <button className="btn bg-[#c6f219] opacity-70 glass"  >{account?.slice(0,4) + '....' + account?.slice(38)}</button> ):
        ( <button className="btn  bg-[#c6f219] opacity-70 glass"  onClick={connectWallet}>Connect Wallet</button>)
        } 
       
        </div>
    </div>
  )
}

export default Navbar