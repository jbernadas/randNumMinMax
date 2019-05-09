function randomNumber(lower, upper) {
  return Math.floor( Math.random() * (upper - lower + 1) ) + lower;
}
var counter = 0;
var list = [];
// While loop to print out random numbers
while (counter < 100) {
  var randNum = randomNumber(12989, 21017);
  list.push(parseInt(randNum));
  document.write(randNum + ' ');
  counter++;
}

// Tests to see what the max and min numbers returned by randomNumber
document.write("<br/>The lowest number in the array of random numbers is " + Math.min(...list) + ".<br/>");
document.write("The highest number in the array of random numbers is " + Math.max(...list) + ".<br/>");
