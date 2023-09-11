'use client'
import { createContext, useContext, useState } from "react"
import abi from '../artifacts/abi.json'
import {ethers} from 'ethers'
import address from '../artifacts/contractAddress.json'

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
    let { ethereum } = window
    let tx
    
    const connectWallet  = async() => {
        try {
            if(!ethereum) return alert('plz install metamask')
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
            setAccount(accounts[0]?.toLowerCase())
        } catch (error) {
            console.log(error)
        }  
    }

    const isWallectConnected = async () => {
        try {
          if (!ethereum) return alert('Please install Metamask')
          const accounts = await ethereum.request({ method: 'eth_accounts' })
          setAccount( accounts[0]?.toLowerCase())
      
          window.ethereum.on('chainChanged', (chainId) => {
            window.location.reload()
          })
      
          window.ethereum.on('accountsChanged', async () => {
            setAccount( accounts[0]?.toLowerCase())
            await isWallectConnected()
          })
      
          if (accounts.length) {
            setAccount( accounts[0]?.toLowerCase())
          } else {
            alert('Please connect wallet.')
            console.log('No accounts found.')
          }
        } catch (error) {
          console.log(error)
        }
      }

    const getContract = async() => {
        if (address) {
            const provider = new ethers.providers.Web3Provider(ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(contractAddress, contractAbi, signer)
            return contract
        } else {
            console.log('plz connect wallet')
         }
    }

    const addCandidate = async({name, description, image}) => {
        if(!ethereum) return ('plz install metamsk') 
        const contract = await getContract()
        tx = await contract.addCandidate(name, description, image)
        await tx.wait()
        await getCandidates()        
    }

    const addVote = async(id) => {
        if(!ethereum) return ('plz install metamsk') 
        const contract = await getContract()
        tx = await contract.vote(id)
        await tx.wait()
        await getVotes(id)        
    }

    const getCandidates = async() => {
        if (address) {
            const contract = await getContract()
            tx = await contract.getCandidates()
            setCandidates(tx)      
        } 
    }

    const getCandidate = async(id) => {
        if (address) {
            const contract = await getContract()
            tx = await contract.getCandidate(id)
            setCandidate(tx)
        } 
    }

    const getVotes = async(id) => {
        if (address) {
            const contract = await getContract()
            tx = await contract.getVotes(id)
            setVoters(tx)
        } 
    }

    const getParticipants = async(id) => {
        if (address) {
            const contract = await getContract()
            tx = await contract.getParticipants(id)
            setParticipants(tx)
        } 
    }



    return (
        <StateContext.Provider value={{candidate, setCandidate, createPoll, setCreatePoll, 
        contractAddress, contractAbi, account, voters, participants, setParticipants, setAccount,
         setVoters, candidates, setCandidates, addVote, getParticipants, getVotes, getCandidate, 
         getCandidates, addCandidate, connectWallet, isWallectConnected }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)