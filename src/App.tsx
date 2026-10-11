import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import BookingPage from './components/Reservations';

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Reservations" element={<BookingPage />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
