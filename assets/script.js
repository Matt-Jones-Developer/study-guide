
// variable array to hold topics
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

// add a random func to choose a topic to study
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

// put the for iteration loop inside a function 
function listTopics() {
    // iterate through array
    for (var x = 0; x < topics.length; x++) {
        // print to console
        console.log(topics[x]);
    }
}

/* create a conditional that will switch to whichever 
topic we want to focus on!
wrap this inside a new function */

function selectTopic() {
    // accessing an array means topic[0]
    // NOT 'topics' - returned 'please try again'
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    
    } else {
        console.log('Please try again')
    }
}

// update user with info
console.log("Here are the topics we learned through Prework:");
listTopics();

console.log("Which topic should we study first?");
// call conditional selectTopic
selectTopic();