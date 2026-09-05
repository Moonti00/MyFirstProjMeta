import logo from '../../public/logo.svg';


function Header() {

  return (
    <header>
      <img src={logo} alt="Logo" />
      <nav>
        <ul>
            <li> <a href="/">Home</a> </li>
            <li> <a href="/">About</a> </li>
            <li> <a href="/">Menu</a> </li>
            <li> <a href="/">Reservations</a> </li>
            <li> <a href="/">Order Online</a> </li>
            <li> <a href="/">Login</a> </li>
        </ul>
      </nav>
    </header>
  );
}


export default Header;