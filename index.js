const human = {
  name: "Usain Bolt",
  age: 32,

  run: function() {
    console.log(`${human.name} is running in a marathon`);
  },

  speed: function(pace) {
    console.log(`He ran ${pace} km/h!`);
  }
};
human.run();
human.speed(44.16);

const name = {};

name["Egy"] = true;
console.log(name["Egy"]); // console.log(name[Egy]); --> Results will be error

const user = "Egy";
name[user] = true;
console.log(name["Egy"]); // console.log(name[Egy]); --> Results will be error

const userInfo = {
  name: "Yevgeny",
  age: 20
};
const info = prompt("Which one do you want to know? Name or Age?");

console.log(userInfo[info]); //if user type "name" = Yevgeny, if user type "age" = 20

const fruit = prompt("Which fruit do you want to buy?");
const bag = {
  [fruit]: prompt("How many would you like?")
};
console.log(bag);

const runnerName = function(name, age) {
  console.log(name), console.log(age);
};
runnerName("Bolt", 32);
