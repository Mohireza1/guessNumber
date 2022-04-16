"use strict";
setTimeout(() => {
  const random = Math.floor(Math.random() * (100 - 1)) + 1;
  alert(`I have a number in mind, what could it be?`);
  let target = prompt(`What could the numebr be?`);
  if (target === null) return;
  let temp = Number(target);
  while (isNaN(temp)) {
    target = prompt("Please enter a number between 1 and 100");
    temp = Number(target);
  }
  let turn = 1;
  while (temp !== random && target !== null) {
    if (temp > 100 || temp < 1) {
      target = prompt("Please enter a number between 1 and 100");
      temp = Number(target);
    } else if (random < temp) {
      turn = turn + 1;
      target = prompt("Too High!");
      temp = Number(target);
    } else if (temp < random) {
      turn = turn + 1;
      target = prompt("Too Low");
      temp = Number(target);
    }
  }
  
  if (temp === random) {
    alert(
      `You win! The number was ${random} and it took you ${turn} guesse\(s\) to guess it!`
    );
  }
}, 10);
