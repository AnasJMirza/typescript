let data: [string, number] = ["s", 1];
console.log(data);
data.push(1, "string"); // Od behavior of the tuples: You can apply all the methods of arrays and modify the tuple data
console.log(data);

