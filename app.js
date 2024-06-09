// #1 Ek array mein integers ki series banao, aur phir usmein slice() ka istemal karke
// kisi specific range ke elements ko nikaal kar ek naya array banao.
console.log('Task #1');
let numArr = ['one', 'two', 'three', 'four', 'five', 'six'];
let numSlice = numArr.slice(2,3);
console.log(numSlice);

// #2 Ek array di gayi hai. Us array mein splice() ka istemal karke kuch elements
// hatao aur unhein ek alag array mein store karo.
console.log('Task #2');
let fruitList = ['apple', 'kiwi', 'mango', 'grapes', 'pineapple', 'banana'];
let fruitSplice = fruitList.splice(1,2);
console.log(fruitSplice);
console.log(fruitList);

// #3 Ek array di gayi hai. Us array ko shift() karke
// uska pehla element hatao aur usse ek variable mein store karo.
console.log('Task #3');
console.log('==> Shift()');
let nameList = ['ashfaq', 'afaq', 'jahanzeb', 'shahzeb', 'hamza'];
let nameShift = nameList.shift();
console.log(nameList);
console.log(nameShift);

// #4 Ek array di gayi hai. Us array mein unshift() ka istemal karke ek naya element add karo.
console.log('Task #4');
console.log('==> Unshift()');
nameList.unshift('omar');
console.log(nameList);

// #5 Ek array di gayi hai. Us array mein push() ka istemal karke ek naya element add karo.
console.log('Task #5');
console.log('==> Push()');
nameList.push('salman');
console.log(nameList);

// #6 Ek array di gayi hai. Us array mein pop() ka istemal karke
// ek element remove karo aur usse ek variable mein store karo.
console.log('Task #6');
console.log('==> Pop()');
let namePop = nameList.pop();
console.log(namePop);

// #7 Ek array di gayi hai. Us array ko slice() ka istemal karke
// uske kuch elements ko naye array mein move karo aur original array ko intact rakho.
console.log('Task #7');
console.log('==> Slice()');
let nameSlice = nameList.slice(0, 3);
console.log(nameSlice);
console.log('Original: ' + nameList);

// #8 Ek array di gayi hai. Us array mein splice() ka istemal karke
// kuch elements ko remove karo aur unhein ek naye array mein store karo.
console.log('Task #8');
console.log('==> splice()');
let nameSlice2 = nameList.splice(1, 2);
console.log(nameList);
console.log(nameSlice2);

// #9 Ek array di gayi hai. Us array mein shift() ka istemal karke elements ko ek ek karke
// remove karo aur unhein alag - alag variables mein store karo.
console.log('Task #9');
console.log('==> Shift()');
let alphabets = ['A', 'B', 'C', 'E', 'F', 'G', 'H', 'I'];
console.log(alphabets);
let letter1 = alphabets.shift();
let letter2 = alphabets.shift();
let letter3 = alphabets.shift();
let letter4 = alphabets.shift();
let letter5 = alphabets.shift();
let letter6 = alphabets.shift();
let letter7 = alphabets.shift();
let letter8 = alphabets.shift();
console.log(letter1);
console.log(letter2);
console.log(letter3);
console.log(letter4);
console.log(letter5);
console.log(letter6);
console.log(letter7);
console.log(letter8);

// #10 Ek array di gayi hai. Us array mein push() ka istemal karke multiple elements ek saath add karo.
console.log('Task #10');
console.log('==> Push()');
let carBrandList = [];
carBrandList.push('Nissan', 'Toyota', 'Hunyadi');
console.log(carBrandList);
