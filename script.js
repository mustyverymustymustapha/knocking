
const jokes = [

    "Knock, knock. Who's there? Boo. Boo who? Don't cry, it's just a joke!",
    "Knock, knock. Who's there? Lettuce. Lettuce who? Lettuce in, it's cold out here!",
   "Knock, knock. Who's there? Annie. Annie who? Annie thing you can do?",
    "Knock, knock. Who's there? Orange. Orange who? Orange you going to let me in?",
    "Knock, knock. Who's there? Spell. Spell who? W, H, O!",
    "Knock, knock. Who's there? Nobel. Nobel who? Nobel, that.",
    "Knock, knock. Who's there? Cow says. Cow says who? No, a cow says moooo!"
];

document.getElementById("get-joke").addEventListener("click", generateJoke);

function generateJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById("joke").textContent = jokes[randomIndex];
}
