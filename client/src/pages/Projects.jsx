import { useContractRead } from 'wagmi'
import Voters from '../components/Voters'
import React, { useEffect } from 'react'
import { useStateContext } from '../context'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Project from '../components/Project'

const Projects = () => {
  const { contractAddress, setCandidate, candidate, setVoters,voters, contractAbi } = useStateContext()
  const {id} = useParams()
  const { data: votes} = useContractRead({
    address: contractAddress,
    abi: contractAbi,
    functionName: 'getVotes',
    args: [id]
  })
  setVoters(votes)
    
  useEffect(() => {
    const fetchData= async()=> {
      setVoters(votes)
      
    }
    fetchData()
    console.log(voters)
  },[votes])
  
  return (
      <div className="">
        <Project />
        <Voters />
      </div>
        

  )
}

export default Projects



