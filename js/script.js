 const Quotes =[
   {quote:"Success usually comes to those who are too busy to be looking for it.",author:"—Henry David Thoreau"},
   {quote:"Be yourself everyone else is already taken.",author:"Oscar Wilde"},
   {quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
   { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
   { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" }
 ];
 const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const button = document.getElementById("generateBtn");
button .addEventListener("click",function(){
    quoteText.textContent="";
    quoteAuthor.textContent="";
    const randomIndex = Math.floor(Math.random() * Quotes.length);
  const selectedQuote =Quotes[randomIndex];
  setTimeout(() => {
     quoteText.textContent = `"${selectedQuote.quote}"`;
     quoteAuthor.textContent = `— ${selectedQuote.author}`;
     quoteText.style.opacity = 1;
     quoteAuthor.style.opacity = 1;
   }, 300);
});
