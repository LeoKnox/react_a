let dungeonData = [
  {id: 1, name:"entry", description:"Entrance", width:5, length:5},
  {id: 2, name:"throne", description:"Throne Room", width:6, length:7},
  {id: 3, name:"guard", description:"Guard Room", width:9, length:8}
]

export function allRooms() {
  return (dungeonData)
}

export function roomData(id) {
  return(dungeonData[id-1])
}

export function addRoom(newRoom) {
  //newRoom.id = dungeonData.length++
  console.log(dungeonData.length++)
  console.log(newRoom)
  //dungeonData = [...dungeonData, newRoom]
  //dungeonData.push({newRoom})
  dungeonData[dungeonData.length++] = newRoom
  console.log(dungeonData)
}
