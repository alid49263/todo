import React,{useState} from 'react'
import './App.css';
import Input from './Input';
import List from './List';

function App() {
  const [itemToAdd, setItemToAdd] = useState("")
  const [id, setId] = useState(0)
  const getAddedItem=(item)=>{
    setItemToAdd(item)
    setId(id+1);
  }
  
  return (
    <div className="App">
      <Input callback={getAddedItem}/>
      <List item={itemToAdd} id={id}/>
    </div>
  );
}

export default App;
