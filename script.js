//Creating the object to iterate through 
const practice = {
    topic: ['functions', 'arrays', 'objects', 'loops', 'iterators'],
    what: ['syntax', 'case for use', ' writing examples', 'asking a programmer friend what they know'],
    how: ['spend 5 minutes on this', 'search MDN Web Docs', 'revise CodeCademy lesson', 'use the topic to descripe your pet']
  };

//Creating the function that iterates through the object 
//and creates the new string to be output.

function randomPractice() {
    //accessing the object
    for (let method in practice){
    //accessing the topic
        i = Math.floor(Math.random()* practice.topic.length);
        let part1 = practice.topic[i];
    //accessing the what
        j = Math.floor(Math.random()* practice.what.length);
        let part2 = practice.what[j];
    //accessing the how
        k = Math.floor(Math.random()*practice.how.length);
        let part3 = practice.how[k];
    //returning the result        
        return `Today you should try practicing: ${part1}. You can try to practice: ${part2}. How to do it: ${part3}.`;
      }  
  };

 
//select the button and the blockquote
let blockquote;



function changeElement(){
    blockquote.innerHTML = randomPractice();
}


//add event listener to the button

window.addEventListener("load", (event) => {
    blockquote = document.getElementById('myPractice');
    const button = document.getElementById('myButton');
    button.addEventListener('click', changeElement);
});  
  