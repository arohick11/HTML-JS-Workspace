/// Define an object.
let person = {
    Pname: function() {
        console.log(this.name + ","+this.age+","+this.Cohort+","+this.City);
        return this.age;
    }
}
let aa = {
    name : "Sakshi",
    age : 18,
    Cohort : "Elon Musk",
    City: "Mumbai"
};
person.Pname.call(aa);
person.Pname.apply(aa); //Second way to call


///using for of for iterating
ar = [1,2,3,4,5];
for(i of ar){
    console.log(i)
}

/// using symbol or iterators in array
let arr = [1,2,3,4,5,6,7,8,9,10];
let iter = arr [Symbol.iterator]();

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())


///generator function

function *gen() {
    console.log("Hello");
    yield 12;
    console.log("World");
    yield 2;
    console.log("Goodbye")

}

    const g = gen();
    console.log(g.next());
    console.log(g.next());
    console.log(g.next());
    console.log(g.next());

/// "*" pattern minimum 6

function star_ptr() {
    for ( let i = 1; i <= 6 ; i++) {
        let line = "";
        for(let  j =1 ; j <= i; j++ ) {
            line += '*';
    

        }
        console.log(line);
        
    }
}
star_ptr()

/// promise function using call back func(func inside func using parameter)

let myPromise = new Promise(function(myResolve,myReject) {
    let x = 0;

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);},
)



// example of call back    
        
function checkstatus(yes,no){
    let x = 0;

    if (x == 0) {
        yes("OK");
    } else {
        no("Error");
    }
}

let myPromise1 = new Promise(function(papersolved,papernotsolved) {
    checkstatus(papersolved,papernotsolved)
});

myPromise.then(
    function(value) {console.log(value);},
    function(error) {console.log(error);},
)


/// sync and async functions together example

function fetchData(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: "This is the fetched data" });
            
        }, 2000)
    })
}

async function processData() {
    try {
        console.log("Fetching Data...");
        const result = await fetchData();
        console.log("Data fetched:" , result.data);
        return result.data;
    }   catch (error) {
        console.error("Error fetching Data:" , error);
        throw error;
    }
}

processData()
    .then(processedData => {
        console.log(" Processed Data:", processedData);
    })
    .catch(error => {
        console.error("Final error:", error);
    });