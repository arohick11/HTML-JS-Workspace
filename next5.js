/// arrow function

let func = () => console.log("hello")
func()

/// anonymous function 

let func1 = function() {
    console.log("hehehe")
}
func1()

/// default function

let oh = "hi and hello";
    function func3(oh) {
        return oh;
    }
console.log(func3(oh));

/// object oriented

arr = [1,2,3,4,5,6];
console.log(typeof arr)

///negative of input number

let a = prompt("Enter a number:");  
function func4(a) {
    if (a == 0) {
        return(0); 
}
    else {
        return(-a)
    }
}    
func4(a);

/// create array, another method

const arr1 = new Array ("this", "is", "a", "string");
console.log(arr1[1]);


/// reversing the elements of array

let arr3 = [1,2,3,4,5,6,7,8];
for ( let i= arr3.length -1 ; i >= 0; i--) {
    console.log(arr3[i]);
}

array = [1,2,3,4,5,6,7,8]; //another method using push
function reverse(array) {
    let result = [];
    for (let i = array.length -1; i > -1 ; i--) {
        result.push(array[i]);
    }
    console.log(...result);
    return result;
}
reverse(array);

/// array methods

let arr4 = [3,4,5,6,7,8,9,0,1];
console.log(arr4.length);
console.log(arr4.push(4));
console.log(arr4.shift());
console.log(arr4.unshift(0));
console.log(arr4.slice(0,5));
console.log(arr4.splice(0,7));
console.log(arr4.flat());

