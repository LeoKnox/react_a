import { useContext, createContext, useCallback, useReducer } from 'react'

let dungeonData = [
  {id: 1, name:"entry", description:"Entrance", width:5, length:5},
  {id: 2, name:"throne", description:"Throne Room", width:6, length:7},
  {id: 3, name:"guard", description:"Guard Room", width:9, length:8}
]

export const redContext = createContext({id: 3, name:"guard", description:"Guard Room", width:9, length:8})

export function allRooms() {
  return (dungeonData)
}

export function deleteRoom(id=1) {
  dungeonData = dungeonData.splice(0, 1)
  //return (redContext = createContext({id: 3, name:"guardzzz", description:"Guard Room", width:9, length:8}))
}
