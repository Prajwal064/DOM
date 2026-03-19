// let btn = document.querySelectorAll("button")


// btn.forEach(function(ele){
//     ele.addEventListener("click", function(){
//         console.log("Hello");
//         if(ele.innerHTML === 'Add Friend'){
//             ele.innerHTML === 'Remove'
//         }
//         else{
//             ele.innerHTML == "Add Friend"
//         }
        
//     })
// })


// class Book{
//     constructor (name,price, author){
//         this.name = name;
//         this.price = price;
//         this.author = author;
//     }
// }


// let b1 = new Book("DSA", "400","Bidisha")
// let b2 = new Book("JS", "800", "Prajwal")
// let b3 = new Book("C++", "100", "Dhole")





// Learnign the prototpe


// class Sketch{
//     constructor(){
//         this.character = "Ninja";
//         this.age = 20;
//         this.address = "out of the world";
//     }
// }

// Sketch.prototype.walk(){}
// Sketch.prototype.speak(){}
// let char = new Sketch


// global--> window
// function --> window
//es5 function inside oject --> object
// es6 function insde object --> window
// es5 finction inside es5 function inside onject --> window
// es6 function inside es5 function inside onkect -->object


let obj = {
    name : "prajwal",
}
function abc(){
    console.log(this);
    

}
abc.call(obj)

