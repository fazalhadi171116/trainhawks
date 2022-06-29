let arr = [
    21, 14, 30, 43, 49, 50, 52, 28, 10, 73, 31, 45, 27, 88, 77, 75, 86, 97, 80,
    46, 10, 39, 13, 39, 97, 54, 11, 21, 42, 39, 45, 71, 50, 30, 3, 45, 61, 11, 48,
    90, 67, 35, 2, 9, 16, 37, 96, 20, 8, 38, 27, 68, 41, 39, 38, 19, 86, 98, 17,
    69, 55, 96, 10, 76, 23, 70, 36, 48, 26, 42, 36, 63, 91, 35, 80, 16, 53, 49,
    18, 66, 45, 28, 81, 27, 90, 95, 94, 60, 65, 14,90,10,50,11, 41, 82, 25, 22, 53, 98,
];
// Q1 sort Array

let newArray = arr.sort(function (a, b) { return a - b; });
console.log(newArray); 

console.log("-----------------------------Q1 End-------------------------------------");


//  Q2-----Find Element------
function findElement(number) {
    let count = 0
    arr.map(function (data,index) {
        //console.log(data)
        if (data == number) {
            console.log("Index " + index + " : " + number);
            count++;
        }
    });
    console.log("Number of repeated Element of Array is = "+count)
    
         
}

findElement(42)

console.log("-----------------------------Q2 End-------------------------------------");


//Q3  slice function;

let newArray1 = (arr.slice(25, -25));
let sum = 0;
newArray1.map(function (data) {
    sum = sum + data;
})
console.log("Total Sum of Array = " + sum);

console.log("-----------------------------Q3 End-------------------------------------");






















/*for (let i = 0; i <= 100; i++){
    let x =Math.floor(Math.random(i) *100);
    console.log(x+",");
}
*/
