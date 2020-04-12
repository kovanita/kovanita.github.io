
let printNumbersTill = (a) => {
  for (let i = 0; i < a; i++) {
    console.log(i)
  }
}





printNumbersTill(20);
let greetingTo = (name) => {
  return ('hello' + name);
}
greetingTo('Mark');
console.log(greetingTo('Mark'))




let printValues = (arr) => {
  for(let i=0; i<arr.length; i++) {
    console.log(arr[i])
  }
}
printValues([0, 3, 6, 7, 9])





let myNumbers = [10, 20, 30, 50, 12];
myNumbers.forEach((number) => {
  console.log(number);
});

