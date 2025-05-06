///convert to farenheight

let a = prompt("Enter a degree in Celsius");
function dtof(a) {
    return (a * 9/5) + 32;
}
console.log(dtof(a));

///string methods

let str = "This is a string";
console.log(str);
console.log(str.toLowerCase(2));
console.log(str.split(3));
console.log(str.replace(3));
console.log(str.match(5));

let str1= "This is a \"string\"";
console.log(str1);

///index value returner

let ab = "Hello World";
console.log(ab.at(1));

///length of string comparison

let strr1 = prompt("Enter a string:");
let strr2 = prompt("Enter second string:");
function string_checker(strr1,strr2){
    if (strr1.length === strr2.length) {
        console.log("It is the same string");
    }
    else {
        console.log("Not the same string");
    }
}    
string_checker(strr1,strr2);



let s1 = prompt("Enter first string");
let s2 = prompt("Enter second string");
function equalcheck(s1, s2) {
    console.log(s1.length === s2.length);
}
equalcheck(s1, s2);

///first letter removal

let s3 = prompt("Enter a string:");
console.log(s3.slice(1));

///indexing of string

let arr1 = ["sakshi" , "arohi", "arham","mahesh"];
let s4 = prompt("Enter a string from the array");
function index(arr1, s4) {
    console.log(arr1.indexOf(s4));
}
index(arr1,s4);


///
string = "Hello world";
let padded = string.padStart(5,)
console.log(string.padEnd(3));