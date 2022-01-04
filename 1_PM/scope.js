/**
 * Part 1:
 *    What will print and why? 
 *     - 1, 2, undefined.
 * 
 *    What will change if we delete line 15? Why? 
 *     - It will print 1, 2, 1 because you are no longer creating an empty variable.
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

 const x = () => {
  let a = 2;
  console.log(a);
}

const y = () => {
  let a = 2;
  console.log(a);
  x();
}

let a = 1;
console.log(a);
y();
