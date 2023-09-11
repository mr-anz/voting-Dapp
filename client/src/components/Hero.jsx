
import React from 'react'
import { useStateContext } from '../context'

const Hero = () => {
  const { setCreatePoll, account} = useStateContext()
  const handle = (e) => {
    e.preventDefault()
    if(account){
      setCreatePoll('scale-100')
    } else{
      alert('connect to wallet')
    }
  }

  return (
    <div className="hero min-h-screen z-10" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
        <div className="hero-overlay z-10 bg-opacity-60"></div>
        <div className="hero-content z-10  flex-col lg:flex-row text-center text-neutral-content">
            <div className="max-w-lg mt-20 md:pt-0">
              <h1 className="mb-5 text-5xl font-bold capitalize"> Vote without rigging</h1>
              <p className="mb-5">This online voting system offers the highest level of transparency, control, security and efficiency of election proccesses using Blockchain Technology.</p>
              <button className="btn bg-[#c6f219] glass" onClick={handle}>Create Poll</button>
            </div>
            <img src={'/pl.svg'}  alt="hero" className='w-[500px] h-[500px]'/>
        </div>
        
    </div>
  )
}

export default Hero