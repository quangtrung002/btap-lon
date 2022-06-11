import { createContext, useState } from 'react';

import './App.css';
import Contact from './Component/contact';
import Container from './Component/container';
import Footer from './Component/footer';
import Navbar from './Component/navbar';

function App() {
  const [amountItems, setAmountItems] = useState(0)
  const [carts, setCarts] = useState([])

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
