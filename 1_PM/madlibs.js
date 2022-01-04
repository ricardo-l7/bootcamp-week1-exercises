/* In this task, make a madlibs templates story
using JS string template literals. In the story
variable, write out the template of your madlibs
using string variables in the place of certain
nouns, adjectives, and verbs */

/* Variables, i.e.
const noun1 = ______
const verb1 = ______

Change thses values to generate a different story
*/

const name1 = 'Ricardo';
const time1 = '7:00 AM';
const properNoun = 'DiNicos Pizza';
const pronoun = 'he';
const number = '3';
const noun = 'pizza';
const verb = 'loves';
const action = 'bake';
const name2 = 'Danny';
const name3 ='Ryan';
const name4 = 'Max';

const story = `${name1} went to work at ${time1}. ${name1} works at ${properNoun} and really enjoys it!
He has been working there for ${number} years. You might be asking why ${pronoun} gets to work so early. 
Well, it's because ${pronoun} ${verb} to ${action} the ${noun} fresh everyday! ${name1} works there with all of his best
friends: ${name2}, ${name3}, and ${name4}.`;

console.log(story)
