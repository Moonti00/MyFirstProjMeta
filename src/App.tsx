import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Reservations from './components/Reservations';

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Reservations" element={<Reservations />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
