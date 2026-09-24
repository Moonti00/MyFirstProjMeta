import { Link } from 'react-router-dom';
import logofoot from '../../public/img/logofoot.png';

function Footer() {

  return (
    <footer className='contFooter'>
      <footer className='footerO'>
          <img src={logofoot} alt="Logo" />
          <nav>
            <h3>Doormat navigation</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#">Menu</a></li>
              <li>
                  <Link to="/Reservations">
                    Reservations
                  </Link>
              </li>
              <li><a href="#">Order Online</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </nav>
          <nav>
            <h3>Contact</h3>
            <ul>
              <li><a>69 Vico Araratiano</a></li>
              <li><a href="tel:(709)879-4459">(709)879-4459</a></li>
              <li><a href="mailto:info@littlelemon.com">Email Us</a></li>
            </ul>
          </nav>
          <nav>
            <h3>Social Media Links</h3>
            <ul>
              <li><a href="https://facebook.com/Moonti00">Facebook</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
            </ul>
          </nav>
      </footer>
      <footer className='footerT'>
        <p>&copy; 2026 Little Lemon, All rights reserved.</p>
      </footer>
      </footer>
  )
}

export default Footer;