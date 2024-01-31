//----------------------- output-------------
// alert("linked")
// document.write(" <h2>Bangladesh</h2> ")
// document.getElementById("one") .innerHTML ="Bangladesh"
// document.getElementsByClassName ("one") [0] .innerHTML="Bangladesh"
// document.getElementsByTagName("h2")[0] .innerHTML ="Bangladesh"
// console.log("Bangladesh");


//--------------- Type --------------
// number
// string
// object
// arry object
// boolean
// undefined
// null
// 


//---------------------- variable ----------------
// var
// let
// const


// var x = 20
// var x = 30

// let x = 20
//     x = 40

// const x = 20

// var x = 30

// console.log(x);

// for(i=1; i <= 10; i++){
//     console.log(i);
// }

// for(i=2024; i >= 1970; i--){
//     console.log(i);
// }

// condition

// var age=20

// if (age < 23){
// console.log("amra biye korte parbo");
// }else{
// console.log("amra biye korte parbona");
// }

// let ami = document.querySelector("h2")
// console.log(ami.innerHTML);

var input = document.querySelector(".one")
var btn = document.querySelector(".btn")
var err = document.querySelector(".err")

btn.addEventListener("click", function(){
    if(input.value){
        for( i=1; i <= 10; i++){
            document.write(input.value + " X " + i + " = " + input.value*i + "<br/>");
        }
    }else{
        err.innerHTML="Please Input Some Value"
    }
})