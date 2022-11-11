//here js going to create new space with allocating same value

/*let name1 = "raju";
let name2 = name1;

console.log(name1); //raju
console.log(name2); //raju

//if we change or assign a new value to name2 , here changes only name2
name2 = "sai";

console.log(name1); //raju
console.log(name2); //sai*/

//here js is going to create new space in memory for objects with allocating same object

let person1 = {
  name1: "raju",
  age: 24,
};

//here person2 object is creating by the reference of person1 object
//person1.study = 15;
let person2 = person1;

console.log(person1);
console.log(person2);

//if we asign a value for person2 , here changes both person1 and person2
person2["name1"] = "sai";

person2["address"] = "jangaon"; //here address object adds to both the objects

//person2[name1] = "swamy";

console.log(person1);
console.log(person2);

//now copying object by using spread operater to resolve

/*let person1 = {
  name1: "raju",
  age: 24,
};
//by using spread operator we can create our object safely and create a new instance of object
person2 = { ...person1 };

person2.name1 = "sai";

person2["address"] = "jangaon"; //address key only adds to person2 object only

console.log(person1); //{name1:"raju",age:24}
console.log(person2); //{name1:"sai",age:24}*/
