import logo from '../../public/logo.svg';
import cross from '../../public/icon/cross.png';
import { Link } from 'react-router-dom';
import humb from '../../public/icon/hamburger.svg';
import { useState, useRef, useEffect } from 'react';

function Header() {

  // This code makes the header to disappear while going down the page and appear when going up the pag
  // Start
  const [hiding, setHiding] = useState(false);
  const scrollNow = useRef(0);
  const lastScroll = useRef(0);
  const [hideScroll, setHideScroll] = useState(false) // This makes the header to disappear in true and appear in false
  useEffect(() => {
    const scrollAction = () => {
      scrollNow.current = window.scrollY;
      if(scrollNow.current > lastScroll.current){
        setHideScroll(true);
      }else if(scrollNow.current <= lastScroll.current){
        setHideScroll(false);
      }
      lastScroll.current = scrollNow.current;
    }

    window.addEventListener("scroll", scrollAction);


    return () => {
      window.removeEventListener("scroll", scrollAction);
    }
  },[])
  // End


  return (
    <>
    <header style={{top: hideScroll ? "-100%" : "0"}}>
      <img src={logo} alt="Logo" className={"logo"} />
      <nav>
        <ul>
            <li> <Link to="/">Home</Link> </li>
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