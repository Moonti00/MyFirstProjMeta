import logo from '../../public/logo.svg';

function Footer() {

  return (
    <>
      <footer>
        
          <img src={logo} alt="Logo" />
          <nav>
            <h3>Doormat navigation</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Reservations</a></li>
              <li><a href="#">Order Online</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </nav>
          <nav>
            <h3>Contact</h3>
            <ul>
              <li><a href="#">Address</a></li>
              <li><a href="#">Phone</a></li>
              <li><a href="#">Email</a></li>
            </ul>
          </nav>
          <nav>
            <h3>Social Media Links</h3>
            <ul>
              <li><a href="#">Address</a></li>
              <li><a href="#">Phone</a></li>
              <li><a href="#">Email</a></li>
            </ul>
          </nav>

        
      </footer>
      <footer>
        <p>&copy; 2024 My App. All rights reserved.</p>
      </footer>
      </>
  )
}

export default Footer;