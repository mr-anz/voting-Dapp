import Card from "../components/Card";
import Hero from "../components/Hero";
import CreatePoll from '../components/CreatePoll'

export default function Home() {


  return (
      <div className="bg-black glass">
        <CreatePoll />
        <Hero />
        <Card />
      </div>
  )
}
