// Create a variable called "total" that starts at 0

//     Create an array called "grades" with the following values:
//         - 55
//         - 63
//         - 82
//         - 98
//         - 91
//         - 43
        
//     Figure out how to print out the AVERAGE grade
//     (This is the sum of all grades divided by the number of grades)

var total = 0;
var grades = [55,63,82,98,91,43];

for(let i=0; i<grades.length; i++){
    total = total+grades[i];
}

var average = total/grades.length;

console.log(`Total marks : ${total}`);
console.log(`Average : ${average} %`);