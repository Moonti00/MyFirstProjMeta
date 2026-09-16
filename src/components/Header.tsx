import logo from '../../public/logo.svg';
import cross from '../../public/icon/cross.png';
import { Link } from 'react-router-dom';
import humb from '../../public/icon/hamburger.svg';
import { useState } from 'react';

function Header() {

  const [hiding, setHiding] = useState(false);


  return (
    <>
    <header>
      <img src={logo} alt="Logo" className={"logo"} />
      <nav>
        <ul>
            <li> <a href="/">Home</a> </li>
            <li> <a href="/#about">About</a> </li>
            <li> <a href="/">Menu</a> </li>
            <li> <Link to="/Reservations">Reservations</Link> </li>
            <li> <a href="/">Order Online</a> </li>
            <li> <a href="/">Login</a> </li>
        </ul>
      </nav>
      <img src={humb} alt="menue" className={"humIcon"} onClick={() => setHiding(true)} />

    </header>
    <div className={hiding ? "header" : "hidden header"} >
      <img src={cross} alt="cross icon" onClick={() => setHiding(false)} />
      <nav>
        <ul>
            <li> <a href="/">Home</a> </li>
            <li> <a href="/#about" onClick={() => setHiding(false)}>About</a> </li>
            <li> <a href="/">Menu</a> </li>
            <li> <Link to="/Reservations" onClick={() => setHiding(false)}>Reservations</Link> </li>
            <li> <a href="/">Order Online</a> </li>
            <li> <a href="/">Login</a> </li>
        </ul>
      </nav>
    </div>
    </>
  );
}


export default Header;