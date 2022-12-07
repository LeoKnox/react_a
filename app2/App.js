import './App.css';
import {useEffect, useState, useReducer} from 'react';
import DataInput from "./components/DataInput";
import DataItem from "./components/DataItem";

function App() {
  const [a, setA] = useState([]);
  const [data, setData] = useState(
    [
      {room: 'Entry', width:5, height:5},
      {room: 'Blue', width:4, height:6},
      {room: 'Red', width:8, height:7},
    ]
  )
  const aData = [11,22];

  useEffect(() => {
    setA(aData)
  })

  const createDataItem = (room) => {
    const newRoom = [...data, { room, complete: false }];
    setData(newRoom);
  }

  return (
    <div className="App">
      <h1>Heading</h1>
      {data.map((aaa, index) => (
        <DataItem key={index} index={index} item={aaa} />
      ))}
      <DataInput  createDataItem={createDataItem} />
    </div>
  );
}

export default App;
