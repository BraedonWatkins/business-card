import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">
          <div className="info">
            <img src="./images/me.png"/>
            <h1>Braedon Watkins</h1>
            <span>Frontend Developer</span>
            <a href="https://github.com/BraedonWatkins">my github</a>
            <button><a href="mailto:watkins.braedon@gmail.com">Email</a></button>
          </div>
          
          <div className="exposition">
            <h1>About</h1>
            <span>Rig Veda are creatures of the cosmos from which we spring with pretty stories 
              for which there's little good evidence prime number Vangelis? Another world finite
              but unbounded shores of the cosmic ocean invent the universe hearts of the stars two 
              ghostly white figures in coveralls and helmets are softly dancing?.</span>
          </div>

          <div className="exposition">
            <h1>Interests</h1>
            <span>Extraordinary claims require extraordinary evidence the ash of stellar alchemy
              Rig Veda vanquish the impossible rich in mystery muse about. Tendrils of gossamer 
              clouds rings of Uranus invent the universe the sky calls to us two ghostly white 
              figures in coveralls and helmets are softly dancing tendrils of gossamer clouds?
              </span>
          </div>

          <footer>
            <img src="linkedin-icon"/>
            <img src="github-icon"/>
          </footer>
      </div>
    </div>
  );
}

export default App;
