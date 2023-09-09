import Card from "../components/Card";
import Hero from "../components/Hero";
import CreatePoll from '../components/CreatePoll'
import { useContractRead } from 'wagmi'
import { useEffect } from "react";
import { useStateContext } from "../context";

export default function Home() {
  const{contractAddress, contractAbi, candidates, setCandidates} = useStateContext()
  
  const { data } = useContractRead({
    address: contractAddress,
    abi: contractAbi,
    functionName: 'getCandidates',

 })

  useEffect(() => {
    setCandidates(data)
    console.log(candidates)
  })
  return (
      <div className="bg-black glass">
        <CreatePoll />
        <Hero />
        <Card />
      </div>
  )
}
