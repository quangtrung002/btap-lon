import './App.css';
import Contact from './Component/contact';
import Container from './Component/container';
import Footer from './Component/footer';
import Navbar from './Component/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
