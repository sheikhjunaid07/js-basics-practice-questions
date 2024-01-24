let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printEven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      console.log(arr[i]);
    }
  }
}
printEven(arr);
console.log("--------------");
function printOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }
  }
}
printOdd(arr);
