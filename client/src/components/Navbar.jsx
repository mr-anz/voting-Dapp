import React from 'react'
import { Link } from 'react-router-dom'
import { useConnect, useAccount, useDisconnect } from 'wagmi'
import { useStateContext } from '../context'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

const Navbar = () => {
  const { setAccount, account } = useStateContext()
  const { address } = useAccount()
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  })
  const { disconnect } = useDisconnect()
  
  setAccount(address)
  const handleDisconnect = async(e) => {
    e.preventDefault()
    await disconnect()
    setAccount('')
  }

  const handleClick = async(e) => {
    e.preventDefault()
    await connect()
    setAccount(address)
  }
  return (
    <div className="navbar bg-black glass">
        <div className="flex-1">
            <Link to={'/'} className="btn btn-ghost normal-case text-[#c6f219] text-xl">Timeless</Link>
        </div>
        <div className="flex-none p-1">
        {account ?
        ( <button className="btn bg-[#c6f219] opacity-70 glass" onClick={handleDisconnect} >{account?.slice(0,4) + '....' + account?.slice(38)}</button> ):
        ( <button className="btn  bg-[#c6f219] opacity-70 glass"  onClick={handleClick}>Connect Wallet</button>)
        } 
       
        </div>
    </div>
  )
}

export default Navbar