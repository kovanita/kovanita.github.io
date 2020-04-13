
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



let printValues = [0, 3, 6, 7, 9];

printValues.forEach((arr) => {
  console.log(arr);
});






let myNumbers = [10, 20, 30, 50, 12];
myNumbers.forEach((number) => {
  console.log(number);
});





let col= 'purple';
let num= 10;
let wor= "cool";
let backgroundColor = $('.elso').css('background');
let sectext= $('.masodik');
sectext=100;
let thirtext = $('.harmadik') .text ('South');


if ( backgroundColor === col ) {
  $('.elso').css('background', 'purple');
}else{
  $('.elso').css('background','red')
}

if ( num > sectext ) {
  $ ( '.masodik' ) .text ( "whoah, that's a big number." )
} else {
  $ ('.masodik') .text ( "just a regular number, please.")
}

if ( thirtext === wor ) {
  $( '.harmadik' ) .text ( "Power of DOM")
} else {
  $( '.negyedik' ) .text ( "Power of DOM")
}