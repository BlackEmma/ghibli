import Header from './Header.jsx';
import FilmList from './FilmList.jsx';
import logo from '../logo6.jpg';

function App() {
  return (
    <div className='container'>
      <Header />
      <main>
        <FilmList />
      </main>
      <footer>
        <img id="footerimg" src={logo} alt="logo" />
      </footer>
    </div>
  );
}

export default App;
