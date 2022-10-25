
import './Navbar.css';

export default function Navbar() {
    return <nav className = 'nav'>
      <a href = "/" className = "EBC">EarthBoundCleaning </a>
      <ul className = 'active'>
        <a href = 'about'>About</a>
      </ul>
         
      <ul classhName = 'active'>
      <a href = 'Contact'>Contact</a> 
        </ul>    
        <ul>
        <a href = "Account">Account</a>
        </ul>
      </nav>
  }  