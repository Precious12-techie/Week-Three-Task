// task1 student grade system

let score = 87;

if (score <= 0 && score > 100) {
  console.log("invalid score");
} else if (score >= 90 && score <= 100) {
  console.log("you made an A");
} else if (score >= 80 && score <= 89) {
  console.log("you made a B");
} else if (score >= 70 && score <= 79) {
  console.log("you made a C");
} else if (score >= 60 && score <= 69) {
  console.log("you made a D");
} else if (score >= 50 && score <= 59) {
  console.log("you made an E");
} else {
  console.log("you made an F");
}
let result = score >= 50 ? "passed" : "failed";
console.log("result:" + result);
