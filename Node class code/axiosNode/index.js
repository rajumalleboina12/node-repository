const axios = require("axios").default;
//var url = "https://jsonplaceholder.typicode.com/users";

var url = "http://localhost:3000/players";
axios.get(url).then((res) => {
  console.log(res.data);
});

// HTTP Methods: GET, POST, PUT, DELETE
