/*let car="Fait";
console.log(car);

var car1={type:"swift", model:"600", color:"Black"}
console.log(car1.type);
console.log(car1.color);

const company={name:"proclink", address:"hyderabad", project:"OMS"};
company1 = ("the project in " + company["name"] + " company is " + company["project"]);
console.log(company1);

var person = {
    firstName: "Raju",
    lastName: "Malleboina",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName + " and id is " + this.id;
    }
  };
  
  console.log(person.fullName());

  var bike = {
    name : "pulsar",
    model : "Ns200",
    type : "shaowroom",
    bikedetails : function() {
        return "bike name is " + this["name"] + " and model is " + this.model;
    }
  }

  console.log(bike.bikedetails());

  var raju = "Avinash guntupalli";
  console.log(raju.replace("Avinash","avi"));*/

/* var obj = {name:"react" , name:"node",
      age:"26",details:{
        email:"mrcnsc@gmail.com",address:{
            pin:"506302"
        }
      }};
 var age="details";
 console.log(obj[age]);
console.log(obj.details["email"]);
console.log(obj["details"].email);
console.log(obj.details.address.pin);
console.log(obj["details"]["address"]["pin"]);*/

var obj = {
  name: "react",
  details: { pin: 506302 },
};

obj.language = "java";

var language = "Programming";

obj[language] = {};
obj[language].code = "yes";

obj[language].data = "no";
//console.log(obj);

obj[language]["code"] = "no";

let keys = Object.keys(obj);
console.log(keys);
