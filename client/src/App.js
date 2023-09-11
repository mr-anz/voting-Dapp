import logo from './logo.svg';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { useStateContext } from './context';

function App() {
  const { isWallectConnected, getCandidates, connectWallet } = useStateContext()

  useEffect(()=>{
    const fetch = async() => {
      await isWallectConnected()
      await getCandidates()
    }
    fetch()
  },[])

  return (
    <div className="h-screen bg-black glass">
    <Navbar />
   
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects/:id' element={<Projects />} />
    </Routes>
    </div>
  );
}

export default App;
