import './App.scss'
import Card from './components/card/Card';
import Header from './components/header/Header';
import data from "./data";


function App() {
  return (
    <div>
    <Header/>
    <Card data={data}/>
    </div>
  );
}

export default App;
