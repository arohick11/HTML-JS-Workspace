var age = 20; ///codes for console
if(age < 18){
    console.log("Underage");
}
else if (age == 18){
    console.log("Adult");
}
else{
    console.log("Age:", age);
}

///
var username = "arohic11";
var password = "Abc";
if(password === "Abc" && username === "arohic11") {
    console.log("Correct password ");
}
else{
c    console.log("Incorrect password")
}


///

let value = 7;
for ( i = 0 ; i<7 ; i++) {
    console.log(`${value}*${1} = ${value*1}`)
}
///

let value1 = 7;
for (let i = 0; i <= 10; i++) {
    console.log(`${value} * ${i} = ${value * i}`);

}
///

console.log("while loop")
let i = 0;
while ( i <= 10) {
    console.log(`${value} * ${i} = ${value * 1}`);
    i++;
}

///

let day = prompt("Enter the day of the week:");
switch(day) {
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
    case "7":
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
        break;
}

///

obj = {name : " john" , age : 80}
obj.age;