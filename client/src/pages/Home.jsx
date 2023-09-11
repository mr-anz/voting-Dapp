import Card from "../components/Card";
import Hero from "../components/Hero";
import CreatePoll from '../components/CreatePoll'
import { useEffect } from "react";
import { useStateContext } from "../context";

export default function Home() {
  const{contractAddress, contractAbi, candidates, setCandidates} = useStateContext()
  
 


  return (
      <div className="bg-black glass">
        <CreatePoll />
        <Hero />
        <Card />
      </div>
  )
}
