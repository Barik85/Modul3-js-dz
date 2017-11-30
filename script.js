const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const line1 = alphabet.slice(0, 12);
const line2 = alphabet.slice(12, 23);
const line3 = alphabet.slice(23, );
document.writeln(line1 + '<br>' + line2 + '<br>' + line3 + '<br>');
const keyboard = [line1, line2, line3];
document.writeln(keyboard);

const word1 = keyboard[1].slice(5,6) + keyboard[0].slice(2, 3) + keyboard[1].slice(8, 9) +
keyboard[1].slice(8, 9) + keyboard[0].slice(8, 9);

console.log(word1);

const word2 = keyboard[1].slice(6, 7) + keyboard[1].slice(0,1) + keyboard[2].slice(3, 4) +
keyboard[1].slice(0,1) + keyboard[1].slice(1, 2) + keyboard[2].slice(2, 3) + 
keyboard[0].slice(3, 4) + keyboard[0].slice(7, 8) + keyboard[0].slice(9, 10) + keyboard[0].slice(4, 5);
console.log(word2);

const word3 = keyboard[0].slice(4, 5) + keyboard[0].slice(3, 4) + keyboard[1].slice(0, 1) +
keyboard[0].slice(7, 8) + keyboard[2].slice(5, 6) + keyboard[0].slice(2, 3) + keyboard[0].slice(3, 4);
console.log(word3);