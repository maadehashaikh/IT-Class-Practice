var a = 5; //7 
var b = 2; //1
var c;
c = ++a + a++ + --b + b-- + a + b++ + b;
//6   +  6 +     1  + 1  + 7 +  0 +   1   => 22
console.log(c);
// let height = 1.75;
// let weight = 70;
// let result = weight / (height**) ;
//Truthy and Falsy values 
// true ,   "abc" , 1 , [] 
// false , "" , Nan , undefined null 
var num1 = false;
if (NaN) {
    console.log("num1 is printed now as it is true");
}
else if (true) {
    console.log("num1 is printed now as it is false");
}
else {
    console.log("its else condition");
}
