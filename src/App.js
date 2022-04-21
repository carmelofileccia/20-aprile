import {useState} from "react"
import {Header} from "./components/header";
import {Sidebar} from "./components/sidebar"
import {List} from "./components/list";
import './App.css';

function App() {
  const [category, setCategory] = useState ("");
  const [filtered, setFiltered]= useState("")

  const catSelection =(value) => {
    console.log(value);
    setCategory(value);
  }

  const filSelection =(value) => {
    console.log(value);
    setFiltered(value);

  }
  return (
    <main>
      <Header filSelection={filSelection}/>
      <div className="flex">
        <Sidebar catSelection={catSelection} />
        <List category={category} filtered={filtered}/>
      </div>
    </main>
  );
}

export default App;