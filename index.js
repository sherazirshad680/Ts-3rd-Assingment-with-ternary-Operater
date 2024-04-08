// //1. Write a ts program to find maximum between two numbers.
// var a: any = prompt(`Enter a 1st Value`)
// var b: any = prompt(`Enter a 2nd value`)
// var maxnmbr: any;
// if (a < b) {
//     console.log("b is Grater than a");
// } else if (a = b)
//     console.log("a is equal to b");
// else {
//     console.log("a is Less than b");
// }
// maxnmbr = a > b ? a : b; console.log(`The is number maximum:`, maxnmbr);
// // 2. Write a ts program to find maximum between three numbers.
// var c: any = prompt(`Enter a 1st Value`)
// var d: any = prompt(`Enter a 2nd value`)
// var e: any = prompt(`Enter a 3rd value`)
// if (c > d && c > e) {
//     console.log("c is Grater than d and e");
// } else if (d > c && d > e)
//     console.log("d is grater than c and e");
// else {
//     console.log("e is greater than d and c");
// }
// var c: any
// var d: any
// var e: any
// var max: number = c >= d && c >= e ? c : d >= c && d >= e ? d : e;
// console.log("The is maximum number: ", max);
// //3. Write a ts program to check whether a number is negative, positive or zero
// var f: any = prompt(`Enter a 1st Value`)
// if (f > 0) {
//     console.log(`This is positive number`);
// } else if (f < 0) {
//     console.log(`This is Negative number`);
// }
// else {
//     console.log(`num is equal to Zero`);
// }
// var f: any;
// var result = f < 0 ? "The is negative number ." : f > 0 ? "This is positive number." : "num is equal to Zero.";
// console.log(result);

// // 4. Write a ts program to check whether a number is divisible by 5 and 11 or not.
// var a: any = prompt(`Enter a 1st Value`)
// var b: any = prompt(`Enter a 2nd Value`)
// if (a % 5 == 0) {
//     console.log(`is devided by 5`);
// } else if (b % 11 == 0) {
//     console.log(`is divded by 11`);
// } else {
//     console.log(`Enter a  valid value`);
// }
// var a: any
// var result =
//     a % 5 == 0 && a % 11 == 0 ? "The number is divisible by 5 and 11." : "The number is not divisible by 5 and 11.";
// console.log(result);
// // 5. Write a ts program to check whether a number is even or odd
// var x: any = prompt(`Enter a value`)
// if (x % 2 == 0) {
//     console.log("This is Even Number");
// } else {
//     console.log("This is Odd Number");
// }
// var x: any;
// var result = x % 2 == 0 ? "This is Odd Number." : "This is Even Number.";

var amt = prompt("Give Amount");
var noteCount = 0;
if (amt >= 1000) {
    noteCount += Math.floor(amt / 1000);
    amt %= 1000;
}
if (amt >= 500) {
    noteCount += Math.floor(amt / 500);
    amt %= 500;
}
if (amt >= 200) {
    noteCount += Math.floor(amt / 200);
    amt %= 200;
}
if (amt >= 100) {
    noteCount += Math.floor(amt / 100);
    amt %= 100;
}
if (amt >= 50) {
    noteCount += Math.floor(amt / 50);
    amt %= 50;
}
if (amt >= 20) {
    noteCount += Math.floor(amt / 20);
    amt %= 20;
}
if (amt >= 10) {
    noteCount += Math.floor(amt / 10);
    amt %= 10;
}
if (amt >= 5) {
    noteCount += Math.floor(amt / 5);
    amt %= 5;
}
if (amt >= 2) {
    noteCount += Math.floor(amt / 2);
    amt %= 2;
}
if (amt >= 1) {
    noteCount += Math.floor(amt / 1);
    amt %= 1;
}
console.log("Total notes: ", noteCount);
