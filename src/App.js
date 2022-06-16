import { createContext, useEffect, useState } from 'react';

import './App.css';
import Contact from './Component/contact';
import Container from './Component/container';
import Footer from './Component/footer';
import Navbar from './Component/navbar';
import { data } from './data';

function App() {
  const [amountItems, setAmountItems] = useState(0)
  const [carts, setCarts] = useState([])
  useEffect(() => {
    const getLocalStorage = ()=>{
      localStorage.setItem("data", JSON.stringify(data))
    }
    getLocalStorage()
  }, [])

  return (
    <themeContextApp.Provider
      value={[amountItems, setAmountItems, carts, setCarts]}
    >
      <div className="App">
        <Navbar />
        <Container />
        <Contact />
        <Footer />
      </div>
    </themeContextApp.Provider>
  );
}

export const themeContextApp = createContext()
export default App;
