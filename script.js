const quotes = [{
    quote: 'I am going to admin to read',
    author:'Ella'
}, {
    quote: 'Please sign attendance for me',
    author:'Tony'
}, {
    quote: 'Class dey?',
    author:'Faruk'
}, {
    quote: 'As a department, we should always work together',
    author:'Osabuohen'
}, {
    quote: 'Good afternoon everybody, fellowship by 5pm today',
    author:'Samuel'
}, {
    quote: 'I have not read at all',
    author:'Inu John the liar'
}, {
    quote: 'let us create group chat so we can read together',
    author:'Racheal'
}, {
    quote: '*recording voice note*',
    author:'Osabohien'
}, {
    quote: 'Which assignment',
    author:'Princewill'
}, {
    quote: 'Do assignment for me, I will pay',
    author:'Don Princey'
}, {
    quote: 'Abeg write my name for attendance',
    author:'IK'
}];
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})