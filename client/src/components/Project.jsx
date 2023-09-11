import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useStateContext } from '../context'

const Project = () => {
  
    const {  vote, getParticipants, getVotes, getCandidate, account, candidate, } = useStateContext()
    const {id} = useParams()

    const fetch = async(id) => {
        await getParticipants?.(id)
        await getCandidate?.(Number(id)-1)
        await getVotes?.(id)
    }
    const handleClick = (id) => async(e) => {
      e.preventDefault()
      if(account){
        await vote(id)
    } else{
        alert('Connect to metamask')
    }   
    }
      
    useEffect(() => {
      fetch(id)
  }, [handleClick]);

  return (
    <section class=" dark:bg-gray-900">
   
    <div  class="p-8  px-4 flex items-center flex-wrap justify-between mx-auto max-w-[1280px] lg:py-16">
      <img src={candidate?.imageUri}  alt="This is an " className='rounded-lg md:w-1/2'/>
      <div className="px-3 pl-8 pt-5 md:pt-0 md:w-1/2">
        <h2 class=" mb-2 text-xl font-semibold leading-none text-gray-200 md:text-2xl dark:text-white">{candidate?.name}</h2>
        <div className="flex my-2 h-full w-full justify-start items-center space-x-4">
          <img src='/identi.png'  alt="voter" className="h-6 w-6 object-contain rounded-full shadow-md"/>
          <p class=" text-lg font-extrabold leading-none text-gray-200 md:text-lg dark:text-white">{(candidate?.creator)?.slice(0,6)+ '....' + (candidate?.creator)?.slice(36)}</p>
          </div>
        <dl>
            <dt class="mb-2 font-semibold leading-none text-gray-300 dark:text-white">Description</dt>
            <dd class="mb-4 font-light text-white sm:mb-5 dark:text-gray-400">{candidate?.description}</dd>
        </dl>
  
        <div class="flex items-center space-x-4">
            <button onClick={handleClick} type="button" class="text-white inline-flex items-center bg-[#b6e206] hover:bg-warning focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-9 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                <svg aria-hidden="true" class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
                Vote
            </button>  
        </div>
        </div>
    </div>
      
    </section>
  )
}

export default Project