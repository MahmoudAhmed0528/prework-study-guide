let topics = ["HTML", "CSS", "Git", "JavaScript"];
let randomTopic = topics[Math.floor(Math.random() * topics.length)];

for (let x = 0; x < topics.length; x++) {
  console.log(topics[x]);
}

// let topic = "HTML";

// if (topic === "HTML") {
//   console.log("Let's study HTML!");
// } else if (topic === "CSS") {
//   console.log("Let's study CSS!");
// } else if (topic === "Git") {
//   console.log("Let's study Git!");
// } else if (topic === "JavaScript") {
//   console.log("Let's study JavaScript!");
// } else {
//   console.log("Please try again!");
// }

// let shapes = ["triangle", "square", "pentagon", "circle"];

// for (let x = 0; x < shapes.length; x++) {
//   console.log(shapes[x]);
// }

function helloWorld() {
  console.log("hello, World, I am a function!");
}

helloWorld();

function listTopics() {
  for (let x = 0; x < topics.length; x++) {
    console.log("Here are the topics we learned through Prework: topics[x]");
  }
}
listTopics();

function selectTopic() {
  if (randomTopic === "HTML") {
    console.log("Let's study HTML!");
  } else if (randomTopic === "CSS") {
    console.log("Let's study CSS!");
  } else if (randomTopic === "Git") {
    console.log("Let's study Git!");
  } else if (randomTopic === "JavaScript") {
    console.log("Let's study JavaScript!");
  } else {
    console.log("Please try again!");
  }
}
console.log("Which topic should we study first?");

selectTopic();
