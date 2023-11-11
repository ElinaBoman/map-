  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];

for (let num of nums) {
  results.push(num * 2)
};

console.log(results);

// Using map()
const multiplyByTwo = function (num) {
  return num * 2;
};

let mapResult = nums.map(multiplyByTwo);
console.log(mapResult)
// Simplified w/ map()
let mapSimp = nums.map(function(num)  {return num * 2})
console.log(mapSimp)
// Simplfied w/ map() + arrow function
let mapSimplify = nums.map(num => num *2)
console.log(mapSimplify)

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentWithIds = students.map(({name, id, skill, age}) => ({name, id, skill}))
console.log (studentWithIds);