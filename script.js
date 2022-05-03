// 1. Sorting a number array //
const number = [3, 4, 56, 7, 889];

number.sort(function(a, b) {
    return b - a;
});
console.log(number); // [3,4,7,56,889].

// 2.Sort a given array of strings //

const str=["sud","sudhanhsu","ritik","abc"];
const sortedString=str.sort();
console.log(str);  //[ 'abc', 'ritik', 'sud', 'sudhanhsu' ]

//3. How to find unique values in an array?  //

const arr=[3,5,45,67,8,5,3];
const uniqueElements=[...new Set(arr)];
// const result = Array.from(new Set(ages)); //both print same result
console.log(uniqueElements); // [ 3, 5, 45, 67, 8 ]

  //using filter method

const ages = [10,22,11,23,22,3,10]
const uniqueAges = ages.filter((item, index, acc) => 
acc.indexOf(item) == index)
console.log(uniqueAges) //[ 10, 22, 11, 23, 3 ]

//Distinct property values of an array of objects
const array=[{name:"sudhanshu",age:22 },{name:"rithik",age:"23",{name:"shubham",age:"24"},{name:"vikku",age:24}]
const uniqueAges=[...new Set(array.map(item=>item.age))];




//Distinct property values of an array of objects

const array=[{name:"sudhanshu",age:22 },{name:"rithik",age:23},{name:"shubham",age:24},{name:"vikku",age:24},{name:"shubham",age:27}]
const uniqueAges=[...new Set(array.map(item=>  item.age))];
const uniqueName=[...new Set(array.map(item=>item.name))]
console.log(uniqueAges,uniqueName); // [ 22, 23, 24, 27 ] [ 'sudhanshu', 'rithik', 'shubham', 'vikku' ]




