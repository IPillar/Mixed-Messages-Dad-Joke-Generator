// Store a few dad jokes here in this array:
const dadJokes = ["I'm afraid for the calendar. Its days are numbered.", "My wife said I should do lunges to stay in shape. That would be a big step forward.", "Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!", "Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera.", "What do a tick and the Eiffel Tower have in common? They're both Paris sites.", "What do you call a fish wearing a bowtie? Sofishticated.", "How do you follow Will Smith in the snow? You follow the fresh prints.", "If April showers bring May flowers, what do May flowers bring? Pilgrims.", "I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along.",  "What do you call a factory that makes okay products? A satisfactory.", "Dear Math, grow up and solve your own problems.", "What did the janitor say when he jumped out of the closet? Supplies!", "Have you heard about the chocolate record player? It sounds pretty sweet.", "What did the ocean say to the beach? Nothing, it just waved.", "Why do seagulls fly over the ocean?, Because if they flew over the bay, we'd call them bagels.", "I only know 25 letters of the alphabet. I don't know y.", "How does the moon cut his hair? Eclipse it.", "What did one wall say to the other? I'll meet you at the corner.", "What did the zero say to the eight? That belt looks good on you.", "A skeleton walks into a bar and says, 'Hey, bartender. I'll have one beer and a mop.'", "Where do fruits go on vacation? Pear-is!", "I asked my dog what's two minus two. He said nothing.", "What did Baby Corn say to Mama Corn? Where's Pop Corn?", "What's the best thing about Switzerland? I don't know, but the flag is a big plus.", "What does a sprinter eat before a race? Nothing, they fast!", "Where do you learn to make a banana split? Sundae school.", "What has more letters than the alphabet? The post office!"];

//Store a few names of dads:
const dadNames = ['Andrew', 'Bill', 'David', 'Douglas', 'Frank', 'Greggory', 'Jeff', 'Jeffery', 'Jim', 'Larry', 'Lewis', 'Martin', 'Michael', 'Nathaniel', 'Raymond', 'Richard', 'Steven', 'Thomas', 'Timothy', 'Vernon'];

//Store a few names of dads:
const childrenNames = ['James', 'Mary', 'Robert', 'Patricia', 'John', 'Jennifer', 'Michael', 'Linda', 'William', 'Elizabeth', 'David', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica', 'Thomas', 'Sarah', 'Charles', 'Karen', 'Christopher', 'Nancy'];

// Function that takes in an array and randomly returns one of the items:
function selectRandomFromArray(array) {
    let randomNum = Math.floor(Math.random() * array.length);
    return array[randomNum];
}

//Function returns a random age between given ages:
function age(minAge, maxAge) {
    let tempAge = Math.floor(Math.random()*(maxAge-minAge));
    return (tempAge + minAge);
}

//Function returns a given array in the form 'item1, item2 and item 3':
function arrayFormatter(list) {
    let out = [];
    for (let i = 0; i < list.length; i++) {
      if (i === list.length-2 && list.length > 1) {
        out.push(list[i]);
        out.push('and');
        out.push(list[i+1]);
        break;
      } else if (list.length > 1){
        out.push(list[i]+',');
      } else {
        out.push(list[i]);
      }
    }
    return(out.join(' '));
  }
//Function to process and output the dad joke:
function dadJoke(dadJokes, dadNames, childrenNames, minAge, maxAge, maxNumberOfChildren) {
    const dadJoke = selectRandomFromArray(dadJokes);
    const dadName = selectRandomFromArray(dadNames);
    const numberOfChildren = Math.floor(Math.random()*maxNumberOfChildren);
    const chosenChildrenNames = [];
    for (let i = 0; i < numberOfChildren; i++) {
        chosenChildrenNames.push(selectRandomFromArray(childrenNames));
    }
    let children;
    if(numberOfChildren) {
        children = arrayFormatter(chosenChildrenNames);
    } else{
        children = "whoever's out there";
    }
    
    const dadAge = age(minAge, maxAge);

    console.log(`Dear ${children}, I came across the most excellent joke today and i just had to share it with you! Here it is: "${dadJoke}" I hope you enjoyed it as much as I did. Love from your dad, ${dadName}, ${dadAge} years old.`);

}

dadJoke(dadJokes, dadNames, childrenNames, 35, 103, 5);