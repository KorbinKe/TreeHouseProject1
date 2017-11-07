// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
'use strict'


let famousQuotes = [
    {
        quote: "I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best." ,
        author: 'Marilyn Monroe',
        catalog: 'love',
        tags: 'best, life, love, mistakes, out-of-control, truth, worst',
        likes: 0
    },
    {
        quote: 'You\'ve gotta dance like there\'s nobody watching, Love like you\'ll never be hurt, Sing like there\'s nobody listening, And live like it\'s heaven on earth.',
        author: 'William W. Purkey',
        catalog: 'life',
        tags:' dance, heaven, hurt, inspirational, life, love, sing',
        likes: 0
    },
    {
        quote: 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.',
        author: ' Martin Luther King Jr.',
        catalog: 'inspiration',
        tags:' darkness, drive-out, hate, inspirational, light, love, peace',
        likes: 0
    },
    {
        quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
        author: 'Albert Einstein',
        catalog: 'humor',
        tags:' attributed-no-source, human-nature, humor, infinity, philosophy, science, stupidity, universe',
        likes: 0
    },
    {
        quote: 'The reason I talk to myself is because I’m the only one whose answers I accept.',
        author: 'George Carlin',
        catalog: 'truth',
        tags:' humor, insanity, lies, lying, self-indulgence, truth',
        likes: 0
    },
]

let getRandomQuote = function() {
    let randomQuoteIndex = Math.floor(Math.random()*famousQuotes.length + 1);
    return randomQuoteIndex;
    }

document.getElementById('loadQuote').addEventListener("click", function printQuote() {
        let articleOfQuote = famousQuotes[getRandomQuote()];
        let displayHTML = '<p class="quote">' + articleOfQuote.quote + '</p>' +
                          '<p class="tags">Tags: ' + articleOfQuote.tags + '</p>' +
                          '<p class="source">' + articleOfQuote.author + '<span class="catalog">Catalog: ' + articleOfQuote.catalog + '</span></p>' +
                          '<p class="likes">' + articleOfQuote.likes + '  Likes<button class="thumbUp" style="margin-left: 10px">Like it!</button></p>'
                           
document.getElementById('quote-box').innerHTML = displayHTML;
    }, false)