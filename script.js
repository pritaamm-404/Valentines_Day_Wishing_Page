const quotes = [
  "Love is when the other person's happiness is more important than your own!💞",
  "Love is not finding someone to live with, it's finding someone you can't live without!💖",
  "Love is composed of a single soul inhabiting two bodies! 💍",
  "To love and be loved is to feel the sun from both sides!💘",
  "Love is the closest thing we have to magic!🌟",
  "Love is not about how many days you have been together, it's about how much you love each other every day! ❤️",
  "Love is the strongest force in the universe. 🌟",
  "Love is friendship that has caught fire. 🔥",
  "Love is the bridge between you and everything. 🌉",
  "To love and be loved is to feel the sun from both sides. ☀️",
  "Love is a promise that never fades. 💍",
];

function showLove() {
  const quoteElement = document.querySelector(".quote");
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.textContent = randomQuote;
  quoteElement.style.opacity = 1;
  createHearts();
}

function createHearts() {
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }
}
