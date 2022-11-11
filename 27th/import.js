//importing from json file and getting all keys

var players = require("./players.json");

function getPlayers() {
  Object.keys(players).forEach((id) =>
    console.log(
      players[id].id + " " + players[id].name + " " + players[id].category
    )
  );
}

getPlayers();

Object.keys(players).forEach((id) => console.log(players[id].category));
