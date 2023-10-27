var items = ["a", "b", "c"];
items.shift(); //removes the first item|Result [b,c]
items.unshift("A", "B") //adds these items at the start| Result [A,B,a,b,c]
console.log("Array", items);