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


//4.check anagram of a string

function checkAnagram(){
    const str1="sud";
    const str2="dus";
    let sortedStr1=str1.split("").sort().join("");
    // console.log(sortedStr1); //dsu
      let sortedStr2=str2.split("").sort().join("");
    // console.log(sortedStr2); //dsu
    if(sortedStr1===sortedStr2 ){
        return true;
    }
    return false;
}
checkAnagram();


//5.check a string is palindrome or not
function checkPalindrome(string){

const strVal=string.split(""); // [ 'r', 'o', 't', 'a', 't', 'o', 'r' ]
const reverseEl=strVal.reverse();// [ 'r', 'o', 't', 'a', 't', 'o', 'r' ]

const reversedString=reverseEl.join("");  //rotator

if(string===reversedString){
    return true;
}
return false;
    
}
console.log(checkPalindrome("rotator")) //True

//5.How to empty an array
 // 1st method
let arr=[2,34,5,6]
arr=[];
console.log(arr) // []
console.log(arr.length) //0
//2nd method
const array=["sud","sudhanhsu"]
array.length =0;
console.log(array);  //[]
console.log(array.length); //0

//using splice method
array.splice(0.array.length);


//6.How do you combine two or more arrays?

let array1=[2,34,5,6]
let array2=[3,34,5,55];
//using spread operator
const combinedArray=[...array1,...array2]
//using array.concat(method)
const mergeResult = array1.concat(array2);
console.log(combinedArray,mergeResult) //[ 2, 34, 5, 6, 3, 34, 5, 55 ] [ 2, 34, 5, 6, 3, 34, 5, 55 ]


//7.how to combine two or more objects?
const person = {
    name: "sudhanshu",
    age: 22
}
const jobs = {
    job: "unemployed",
    location: "India"
}

const me= {...person, ...jobs};

console.log(me); //{ name: 'sudhanshu', age: 22, job: 'unemployed', location: 'India' }
 

// 8.Remove duplicates from 2 arrays
function uniquefromArrays(array1, array2){
 let arr = [...array1, ...array2]
 let unique = [...new Set(arr)];
 return unique
}
console.log(uniquefromArrays([13,12,41,3], [22,3,4,13]))  //[ 13, 12, 41, 3, 22, 4 ]

//9.How can you uppercase the first character in a string array

 const str="sudhanhsu";
// const str2=str.charAt(0).toUpperCase(); //S
const str2=str.charAt(0).toUpperCase()+str.slice(1); //Sudhanshu
 console.log(str2);



const str = 'i am learning to code';

//split the above string into an array of strings 
//whenever a blank space is encountered
const arr = str.split(" ");
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
//Join all the elements of the array back into a string 
//using a blankspace as a separator 
const str2 = arr.join(" ");
console.log(str2);//I Am Learning To Code

//10.simple example of callback function

function modifyArray(arr, callback) {
  // do something to arr here
  arr.push(100);
  // then execute the callback function that was passed
  callback();
}

var arr = [1, 2, 3, 4, 5];

modifyArray(arr, function() {
  console.log("array has been modified", arr);
});


//11.Remove the last N Characters from a String in JavaScript 
// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

function myFunction(a) {
   return a.slice(0, -3);
}
myFunction('abcdefg')  //Expected 'abcd'

myFunction('1234') //Expected '1'

//12.Count number of negative values in array

function myFunction(a) {
   return a.filter((item) => item < 0).length;
}
myFunction([1,-2,2,-4])  //Expected 2

myFunction([0,9,1]) //Expected 0

 //method-2 using for loop

function myFunction(a){
   let  neg_count = 0;
    for (let i = 0; i <a.length; i++) {
        if (a[i] < 0)
            neg_count++;
    }
    return neg_count;
}
myFunction([1,-2,2,-4])  //Expected 2


// 12. program to count the number of vowels in a string

function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;  //The pattern /[aeiou]/gi checks for all the vowels (case-insensitive) in a string

    // return number of vowels
    return count;
}
const result = countVowel("vowel"); //2

