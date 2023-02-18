// ANSWER TO QUESTION 3
let classGroup = "Arts";
let scienceSubjects = "physics, Chemistry, biology, Technical Drawing,";
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography,";
let artsSubjects = " Government, Economics, Literature, History,";
let generalSubjects = "English, Mathematics.";

if (classGroup === "science") {
  console.log(scienceSubjects, generalSubjects);
} else if (classGroup === "social") {
  console.log(socialScienceSubjects, generalSubjects);
} else if (classGroup === "Arts") {
  console.log(artsSubjects, generalSubjects);
} else {
  console.log(generalSubjects);
}

// ANSWER TO QUESTION FIVE
let num = 70;
function pwr() {
  return Math.pow(2, 6);
}
console.log(`The number ${pwr()} is the power of 2 nearest to ${num}.`);
