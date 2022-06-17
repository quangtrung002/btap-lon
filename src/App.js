import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Contact from './Component/contact';
import Container from './Component/container';
import Footer from './Component/footer';
import Navbar from './Component/navbar';
import Admin from './Component/page/admin';
import { customer, data, visiter } from './data';

function App() {
  const [amountItems, setAmountItems] = useState(0)
  const [carts, setCarts] = useState([])
  useEffect(() => {
    const getLocalStorage = () => {
      localStorage.setItem("data", JSON.stringify(data))
      localStorage.setItem("customer", JSON.stringify(customer))
      localStorage.setItem("visiter", JSON.stringify(visiter))
    }
    getLocalStorage()
  }, [])

  return (
    <Routes>
      <Route path='/*' element={<themeContextApp.Provider
        value={[amountItems, setAmountItems, carts, setCarts]}
      >
        <div className="App">
          <Navbar />
          <Container />
          <Contact />
          <Footer />
        </div>
      </themeContextApp.Provider>}></Route>
      <Route path='/admin/*' element={<Admin />}></Route>
    </Routes>
  );
}

export const themeContextApp = createContext()
export default App;
