// i wanted to be debugger so biased for debugger jokes

//used some basic : css in 1 video code with harry -> 4 hours
//html from html in one video -> 3 hours

let jokes = [`What did the snail who was riding on the turtle's back say? Wheeeee!`,
  `I was going to tell a time traveling joke, but you guys didn't like it.`,
  `What do you call a lazy kangaroo? A pouch potato.`,
  `I used to run a dating service for chickens, but I was struggling to make hens meet.`,
  `Why do we tell actors to "break a leg?" Because every play has a cast.`,
  `What does a pig put on dry skin? Oinkment.`,
  `What do you call it when a snowman throws a tantrum? A meltdown.`,
  `Where does Batman go to the bathroom? The batroom.`,
  `What do you call a pony with a sore throat? A little horse.`,
  `What did the left eye say to the right eye? Between you and me, something smells.`,
  `What did the mama tomato say to the baby tomato? Catch up!`,
  `Why didn't the melons get married? Because they cantaloupe.`,
  `What do you call a fake noodle? An impasta.`,
  `How did the pig get to the hogspital? In a hambulance.`,
  `I'm so good at sleeping I can do it with my eyes closed!`,
  `Why does Humpty Dumpty love autumn? Because he had a great fall.`,
  `What happens when a strawberry gets run over crossing the street? Traffic jam.`,
  `Why did the cow jump over the moon? The farmer had cold hands.`,
  `A termite walks into a bar and says, "So, is the bar tender here?"`,
  `How does an octopus go into battle? Well-armed.`,
  `What do you call a pudgy psychic? A four-chin teller.`,
  `What do you get when you mix a cocker spaniel, a poodle, and a ghost? A cocker-poodle boo.`,
  `How do celebrities stay cool? They have many fans.`,
  `What does a pickle say when he wants to play cards? "Dill me in!"`,
  `How much money does a pirate pay for corn? A buccaneer.`,
  `Where do young trees go to learn? Elementree school.`,
  `Why do bees have sticky hair? Because they use a honeycomb.`,
  `How did the student feel when he learned about electricity? Totally shocked.`,
  `What do you call a bee that can't make up its mind? A Maybe.`,
  `Why was six afraid of seven? Because 7-8-9.`,
  `If April showers bring May flowers, what do May flowers bring? Pilgrims.`, `Noodles : <strong>Maggie</strong><br>content : <strong>Youtube</strong><br>Hotel : <strong>Trivago</strong><br>Frontend : <strong>Bootstrap</strong><br> `, `building logics doesnt hurts , naming functions does`, `harry sir : Why Programmers like dark mode? <br>
me : Because light attracts bugs`, `Q: Why Java Programmer have to wear glasses ?<br>
A: Because they can't C#`, `
harry sir : there are four Booleans.It depends on .... <br>
me :(interrupting) But sir, you taugth us there are only two. <br>
harry sir : <strong>! (false)</strong> <br>
me : hecker :(:
`, `harry sir : Today we will use <strong>c++ in javascript....</strong> <br>
me : (interrupting) But sir, thats impossible. <br>
harry sir : <strong> for (let c = 0 ; c < 5 ; c++ )...</strong> <br>
me : hecker :(:
`, `harry sir : whats the reason for your insomnia <br>
me : Bugs : /` , `harry sir: give me cheers <br> me : hip hip <strong>array!</strong>`, `harry sir : (teaching) There are two ways to write error-free programs; <br>me : (interrupting sadly) only the third works.debugging : (`, `harry sir : What is debugging? <br>
me : Removing the needles from the haystack.`, `harry sir : What did the colon say to the semicolon?<br> me: Stop winking at me ; )`, `There are only 10 types of people in this world…
Those who understand binary and those who don’t.`,]
// used basic css and html taught by harry sir in 1 video
let i = 0;
const random = () => {
  return i = Math.floor(Math.random() * jokes.length);
}
// either refresh or press next button new joke automatically generates

const getjokes = () => {
  random();
  document.getElementById("jokes").innerHTML = `${jokes[i]}`;
               
}  
getjokes();

