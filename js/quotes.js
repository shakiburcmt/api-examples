const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(quote => displayQuotes(quote))
}

const displayQuotes = quote => {
    // console.log(quote);
    const blockQuote = document.getElementById('quote');
    blockQuote.innerText = quote.quote;
}
