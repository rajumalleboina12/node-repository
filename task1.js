var array = [
  {
    order_id: "1",

    item_id: "22",

    user_id: "223",
  },

  {
    order_id: "2",

    item_id: "22",

    user_id: "223",
  },

  {
    order_id: "2",

    item_id: "24",

    user_id: "223",
  },

  {
    order_id: "2",

    item_id: "26",

    user_id: "223",
  },

  {
    order_id: "3",

    item_id: "22",

    user_id: "233",
  },

  {
    order_id: "3",

    item_id: "26",

    user_id: "233",
  },
  {
    order_id: "4",

    item_id: "26",

    user_id: "233",
  },
];

//array.map((values) => {
//console.log(values.user_id);});

/*const temp = {};

array.forEach((element) => {
  temp[element.user_id] = temp[element.order_id] || [element.order_id];
});

console.log(temp);

/*var abc = array.filter((values, index) => {
  return array.indexOf(values.order_id) != index;
});

console.log(abc);

let unique = [];

array.forEach((values) => {
  if (!unique.includes(values.item_id)) {
    unique.push(values.item_id);
  }
});

console.log(unique);*/

var data = {};
var abc = array.filter((details) => {
  if (details.user_id in data) {
    data[details.user_id] = data[details.user_id] + " ," + [details.order_id];
  } else {
    data[details.user_id] = details.order_id;
  }

  //data[details.user_id] = details.order_id;
});

console.log(data);
