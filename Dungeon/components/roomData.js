let roomData = [
  {id: 1, name:"Entry", description:"Entrance", width:5, length:5},
  {id: 2, name:"Throne", description:"Throne room", width:7, length:6},
  {id: 3, name:"Guard", description:"Guard room", width:6, length:8}
]

export function displayAll() {
  return roomData
}

export function displayOne(roomId) {
  return (roomData[roomId])
}
