console.log("Homework Week2 Day3")
{
    const words ={
        number: "77",
        adjective: "sloppy",
        pluralNoun: "yarn balls",
        adverb:"waywardly",
        anotherAdjective: "sheepish fame"

    }
}
function startMadlib() {
    words.number = prompt('Enter a number:');
    words.adjective = prompt('Enter an adjective:');
    words.pluralNoun = prompt('Enter a plural noun:');
    words.adverb = prompt('Enter an adverb:');
    words.anotherAdjective = prompt('Enter another adjective:');
  }
  startMadlib();


  let story = `Once upon a time a group of ${words.number} General Assembly graduates got together and made a startup called ${words.adjective} Technologies. Their goal was to create smart ${words.pluralNoun}. They approached the challenge ${words.adverb} which ultimately lead them to ${words.anotherAdjective} fame.`;
  console.log(story);
  alert(story);