var cities = ["I", "L", "M", "K"];
var userCity = "L";
var isCleanest = false

for (let index = 0; index < cities.length; index++) {
  if(userCity === cities[index]){
      console.log("found");
      isCleanest = true
      break;
  }
  else{
    console.log("not found");
  }
}

if(isCleanest === true){
  var ques = prompt("enter street number")
}
else{
  console.log("dirtiest");
}

// Nested for loop

let num = +prompt("Enter the number");

for (let i = 1; i <= num; i++) {
  console.log("Table of:" + i);
  for (let j = 1; j < 11; j++) {
    console.warn(i + "*" + j + "=" + i * j);
  }
}