const messages = [
{
text: "Someone is proud of how far you've come. 💜",
hint: "Keep going. You're doing better than you think."
},
{
text: "Your future self is rooting for you. ✨",
hint: "Make them proud, one little step at a time."
},
{
text: "Plot twist: you're the main character. 🎬",
hint: "Start acting like it."
},
{
text: "Drink water. Romanticize your life. Repeat. 🥤",
hint: "Even the smallest rituals can change your day."
},
{
text: "Your next idea might change everything. 🚀",
hint: "Never underestimate your curiosity."
},
{
text: "Resting is productive too. 🌙",
hint: "You don't have to earn your right to rest."
},
{
text: "You survived 100% of your hardest days. 🫶",
hint: "Give yourself a little more credit."
},
{
text: "The glow-up is happening behind the scenes. 🦋",
hint: "Trust the process. Keep becoming."
},
{
text: "Delete the draft. Send the application. Try. 💌",
hint: "You deserve to give yourself a chance."
},
{
text: "One day, this will be your origin story. 🌌",
hint: "Keep writing it."
},
{
text: "Breaking news: you're allowed to start over. 📰",
hint: "A new beginning doesn't need permission."
},
{
text: "You clicked a button. That's character development. 😂",
hint: "Your curiosity has officially paid off."
}
];

const messageElement = document.getElementById("message");
const button = document.getElementById("surpriseButton");
const buttonText = document.getElementById("buttonText");
const hintElement = document.getElementById("hint");

let lastIndex = -1;
let clickCount = 0;

button.addEventListener("click", () => {
let randomIndex;

do {
    randomIndex = Math.floor(Math.random() * messages.length);
} while (randomIndex === lastIndex && messages.length > 1);

lastIndex = randomIndex;
clickCount++;

const surprise = messages[randomIndex];

messageElement.classList.add("changing");

window.setTimeout(() => {
    messageElement.textContent = surprise.text;
    hintElement.textContent = surprise.hint;
    messageElement.classList.remove("changing");
}, 180);

buttonText.textContent =
    clickCount === 1 ? "Again? You're curious!" :
    clickCount < 5 ? "Give me another surprise" :
    "Okay, one last surprise...";

button.querySelector(".arrow").textContent = "✦";

});