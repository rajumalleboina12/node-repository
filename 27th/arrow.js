const person = {
  name: "Avinash",
  actions: ["eat", "cook", "sleep", "surf", "learn"],
};

person.actions.forEach((action) => {
  console.log(person.name + "likes to" + action + "action");
});
