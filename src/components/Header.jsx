import logo22 from '../logo22.png';
import logo from '../logo5.png';

function Header() {
  return (
    <header>
      <img className='logo' src={logo} alt="logo" />
      <h1 id="header-title">Studio Ghibli Encyclopedia</h1>
      <img className='logo' src={logo22} alt="logo" />
    </header>
  );
}

export default Header;
