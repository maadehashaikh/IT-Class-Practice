let a=5; //7 
let b=2; //1
let c;
c = ++a + a++ + --b + b-- + a + b++ + b;
//6   +  6 +     1  + 1  + 7 +  0 +   1   => 22

console.log(c);


// let height = 1.75;
// let weight = 70;
// let result = weight / (height**) ;


//Truthy and Falsy values 
// true ,   "abc" , 1 , [] 
// false , "" , Nan , undefined null 

let num1 = false;
if (NaN){
  console.log("num1 is printed now as it is true");
}
else if(null){
   console.log("num1 is printed now as it is false")
}
else{
  console.log("its else condition");
}
