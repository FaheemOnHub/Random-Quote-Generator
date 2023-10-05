const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const named = document.querySelector(".name");
const copy = document.querySelector(".copy");
const twitter = document.querySelector(".twitter");

randomQuote = () => {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "loading...";
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      quoteText.textContent = result.content;
      named.textContent = result.author;
      quoteBtn.classList.remove("loading");
      quoteBtn.innerText = "New Quote";
    });
};
randomQuote();
quoteBtn.addEventListener("click", () => {
  randomQuote();
});
copy.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.innerText);
});

twitter.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
  window.open(tweetUrl, "_blank");
});
