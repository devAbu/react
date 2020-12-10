import './App.css';
import Intro from './components/Intro'

/* const Intro = (props) => {
  return(
       <p className="App-Intro">
         Our first functional component</p>
    )
} */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TV SERIES APP</h1>
      </header>
      <Intro message="Here you can find all of your most loved series"/>
    </div>
  );
}

export default App;
