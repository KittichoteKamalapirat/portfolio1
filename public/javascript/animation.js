// make background change

const symbols = ['Ai', '{ }', 'JS','</>',"$","node"];

let count1 = 0;
const element1 = document.getElementById("change1");
const iteration1 = () => {
  element1.innerHTML = symbols[parseInt(count1 / 2, 10) % symbols.length];
  if (count1 % 2 !== 0) {
    element1.classList.add("out");
  } else {
    element1.classList.remove("out");
  }
  count1++;
  // if you're affraid the code could run for so long that it could fail,
  // 6 is enough (number of elems * 2)
  if (count1 === symbols.length * 2) {
      count1 = 0;
  }
};
let inthandle1 = setInterval(iteration1, 2500);
iteration1();

// second one 
let count2 = 5;
const element2 = document.getElementById("change2");
const iteration2 = () => {
  element2.innerHTML = symbols[parseInt(count2 / 2, 10) % symbols.length];
  if (count2 % 2 !== 0) {
    element2.classList.add("out");
  } else {
    element2.classList.remove("out");
  }
  count2++;
  // if you're affraid the code could run for so long that it could fail,
  // 6 is enough (number of elems * 2)
  if (count2 === symbols.length * 2) {
      count2 = 0;
  }
};
let inthandle2 = setInterval(iteration2, 2500);
iteration2();


// second one 
let count3 = 2;
const element3 = document.getElementById("change3");
const iteration3 = () => {
  element3.innerHTML = symbols[parseInt(count2 / 2, 10) % symbols.length];
  if (count3 % 2 !== 0) {
    element3.classList.add("out");
  } else {
    element3.classList.remove("out");
  }
  count3++;
  // if you're affraid the code could run for so long that it could fail,
  // 6 is enough (number of elems * 2)
  if (count3 === symbols.length * 2) {
      count3 = 0;
  }
};
let inthandle3 = setInterval(iteration3, 2500);
iteration3();
