const topics = ["HTML", "CSS", "Git", "JavaScript"];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

function selectTopic(topic){
    
    if (topic === 'HTML') {
        console.log("Let's study HTML!");
    } 
    else if (topic === 'CSS') {
        console.log("Let's study CSS!");
    } 
    else if (topic === 'Git') {
        console.log("Let's study Git!");
    }
    else if (topic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    }
    else {
        console.log('Please try again!');
    }
    
}

function listTopics(){
    for(let topic = 0; topic < topics.length; topic++){
        console.log(topics[topic]);
    }
}

console.log("Here are the topics we learned through PreWork?");
listTopics();
console.log("Which topic should we study first?");
selectTopic(randomTopic)

/*function helloWorld(){
    //code block
    console.log("Hello world, I am a function");
}*/
//helloWorld();
