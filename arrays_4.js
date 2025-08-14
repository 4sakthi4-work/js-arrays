// 1. Create an array with the following strings:
//         - "Mercury"
//         - "Venus"
//         - "Earth"
//         - "Mars"

//     2. Add the string "Jupiter" to the END of the array
//     3. Add the string "Sun" to the START of the array
//     4. Remove the last two strings from the array
//     5. Remove the first two strings from the array

//     *Print out the array after each of these steps ^

var planets = ["mercury", "venus", "Earth", "mars"];
console.log(planets);

planets.push("jupiter");
console.log(planets);

planets.unshift("sun");
console.log(planets);

planets.pop();
planets.pop();
console.log(planets);

planets.shift();
planets.shift();
console.log(planets);
