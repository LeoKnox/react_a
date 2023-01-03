import './App.css';
import {useEffect, useState, useReducer} from 'react';
import DataInput from "./components/DataInput";
import DataItem from "./components/DataItem";
import DataUpdate from "./components/DataUpdate";

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

  const whatDataItem = (dataItem, index) => {
    const newItem = data;
    console.log("what say what " + JSON.stringify(newItem));
    //newItem.map((i) => i.room=='Red' ? dataItem.room="boo" : i)
    newItem[index] = dataItem;
    console.log("what say what " + JSON.stringify(newItem));
    return(() => setData(newItem));
    alert(JSON.stringify(data));
  }

  const updateDataItem = (index) => {
    const newDataItems = [...data];
    const item = newDataItems[index];
    let newItem = prompt(
      `Update ${item.room}?`, item.room
    );
    let dataObj = { room: newItem, complete: false };
    newItem = prompt(`update ${item.width}?`);
    newDataItems.splice(index, 1, dataObj);
    if (newItem === null || newItem === "") {
      return;
    } else {
      console.log("**** update data item ****" + newItem);
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
    const newRoom = [...data, room];
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
        <>
        <DataItem key={index} index={index} item={aaa} updateDataItem={updateDataItem} deleteDataItem={deleteDataItem} completeDataItem={completeDataItem} />
        <DataUpdate key={index+"a"} index={index} item={aaa} whatDataItem={whatDataItem} />
        </>
      ))}
    </div>
  );
}

export default App;
