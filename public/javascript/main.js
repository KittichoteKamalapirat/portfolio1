// // express router

// make background change

// const symbols = ['HTML', 'CSS', 'JavaScript','Ai'];
// let count = 0;
// const element = document.getElementById("change");
// const iteration = () => {
//   element.innerHTML = symbols[parseInt(count / 2, 10) % symbols.length];
//   if (count % 2 !== 0) {
//     element.classList.add("out");
//   } else {
//     element.classList.remove("out");
//   }
//   count++;
//   // if you're affraid the code could run for so long that it could fail,
//   // 6 is enough (number of elems * 2)
//   if (count === symbols.length * 2) {
//       count = 0;
//   }
// };
// let inthandle = setInterval(iteration, 1000);
// iteration();

// responsive navigation

// turn 3 stripes to X
$("#hamburger").click(function(){
  $("#hamburger").toggleClass("is-active")
});

// toggle nav bar
$("#hamburger").click(function(){
  $("ul").toggleClass("active")
});

$("#hamburger").click(function(){
  $(".navbar").toggleClass("not-active")
});