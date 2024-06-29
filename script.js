
const jokes = [
    "Knock, knock. Who's there? Boo. Boo who? Don't cry, it's just a joke!",
    "Knock, knock. Who's there? Lettuce. Lettuce who? Lettuce in, it's cold out here!",
    
];

document.getElementById("get-joke").addEventListener("click", generateJoke);

function generateJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById("joke").textContent = jokes[randomIndex];
}
