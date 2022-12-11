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
  }, [])

  const updateDataItem = (index) => {
    const newDataItems = [...data];
    const item = newDataItems[index];
    let newItem = prompt(`Update ${item.room}?`, item.room);
    let dataObj = { room: newItem, complete: false };
    newDataItems.splice(index, 1, dataObj);
    if (newItem === null || newItem === "") {
      return;
    } else {
      item.room = newItem;
    }
    setData(newDataItems);
  };

  const completeDataItem = (index) => {
    const newDataItems = [...data];
    newDataItems[index].complete === false
      ? (newDataItems[index].complete = true)
      : (newDataItems[index].complete = false);
      setData(newDataItems)
  };

  const createDataItem = (room) => {
    const newRoom = [...data, {room, complete: false }];
    setData(newRoom);
  }

  const deleteDataItem = (room) => {
    const deleteData = [...data]
    deleteData.splice(room, 1);
    console.log("delete data:"+deleteData);
    setData(deleteData);
  }

  return (
    <div className="App">
      <h1>Heading</h1>
      <DataInput  createDataItem={createDataItem} />
      {data.map((aaa, index) => (
        <DataItem key={index} index={index} item={aaa} deleteDataItem={deleteDataItem} completeDataItem={completeDataItem} />
      ))}
    </div>
  );
}

export default App;
