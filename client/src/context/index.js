'use client'
import { createContext, useContext, useState } from "react"
import abi from '../artifacts/abi.json'
import address from '../artifacts/contractAddress.json'
import { useContractRead, useContractReads, useContractWrite, usePrepareContractWrite } from 'wagmi'

const StateContext = createContext()


export const ContextProvider = ({children}) => {
    const contractAddress = address.address
    const contractAbi = abi
    const [account,setAccount] = useState('')
    const [voters, setVoters] = useState()
    const [candidate, setCandidate] = useState()
    const [candidates, setCandidates] = useState([])
    const [participants, setParticipants] = useState([])
    const [createPoll, setCreatePoll] = useState('scale-0')







    return (
        <StateContext.Provider value={{candidate, setCandidate, createPoll, setCreatePoll, 
        contractAddress, contractAbi, account, voters, participants, setParticipants, setAccount,
         setVoters, candidates, setCandidates }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)