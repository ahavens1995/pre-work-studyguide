const topics = ["HTML", "CSS", "Git", "JavaScript"];

for(let topic = 0; topic < topics.length; topic++){

    if (topics[topic] === 'HTML') {
        console.log("Let's study HTML!");
    } 
    else if (topics[topic] === 'CSS') {
        console.log("Let's study CSS!");
    } 
    else if (topics[topic] === 'Git') {
        console.log("Let's study Git!");
    }
    else if (topics[topic] === 'JavaScript') {
        console.log("Let's study JavaScript!");
    }
    else {
        console.log('Please try again!');
    }
}
