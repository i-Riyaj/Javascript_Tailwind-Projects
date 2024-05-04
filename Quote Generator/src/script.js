const quoteField = document.querySelector('#quoteField');
const AuthorNameField = document.querySelector('#AuthorNameField');
const newQuoteBtn = document.querySelector('#newQuoteBtn');
const tweetBtn = document.querySelector('#tweetBtn');

const apiUrl = "https://api.quotable.io/random?tags=technology,famous-quotes";

const getQuote = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    quoteField.innerHTML = data.content;
    AuthorNameField.innerHTML = data.author;
}

const tweet = () => {
    window.open(`https://twitter.com/intent/tweet?text="${quoteField.innerHTML}"        - by ${AuthorNameField.innerHTML}`, "Tweet window");
}
