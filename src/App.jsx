import Bar from "./components/Bar";
import Menu from "./components/Menu";
import Name from "./components/Name";
import Player from "./components/Player";
import './App.css';


function App() {
  return (
    <div id='root' className='container'>
      <main className="main">
        <Menu />
        <Bar />
        <Name />
        </main>
        <div className="bar">
        <Player />
        </div>
    </div>
);
}

export default App;
