let paragraphOne = document.querySelector('.paragraph-1');
let plusOne = document.querySelector('.question-1 .plus');
let minusOne = document.querySelector('.question-1 .minus');
let questionOne = document.querySelector('.question-1 .faq-icons h3');

plusOne.addEventListener('click', function() {
    paragraphOne.classList.remove('hidden');
    plusOne.classList.add('hidden');
    minusOne.classList.remove('hidden');
});

questionOne.addEventListener('click', function() {
    paragraphOne.classList.remove('hidden');
    plusOne.classList.add('hidden');
    minusOne.classList.remove('hidden');
});

minusOne.addEventListener('click', function() {
    paragraphOne.classList.add('hidden');
    plusOne.classList.remove('hidden');
    minusOne.classList.add('hidden');
});

let paragraphTwo = document.querySelector('.paragraph-2');
let plusTwo = document.querySelector('.question-2 .plus');
let minusTwo = document.querySelector('.question-2 .minus');
let questionTwo = document.querySelector('.question-2 .faq-icons h3');

plusTwo.addEventListener('click', function() {
    paragraphTwo.classList.remove('hidden');
    plusTwo.classList.add('hidden');
    minusTwo.classList.remove('hidden');
});

questionTwo.addEventListener('click', function() {
    paragraphTwo.classList.remove('hidden');
    plusTwo.classList.add('hidden');
    minusTwo.classList.remove('hidden');
});

minusTwo.addEventListener('click', function() {
    paragraphTwo.classList.add('hidden');
    plusTwo.classList.remove('hidden');
    minusTwo.classList.add('hidden');
});

let paragraphThree = document.querySelector('.paragraph-3');
let plusThree = document.querySelector('.question-3 .plus');
let minusThree = document.querySelector('.question-3 .minus');
let questionThree = document.querySelector('.question-3 .faq-icons h3');

plusThree.addEventListener('click', function() {
    paragraphThree.classList.remove('hidden');
    plusThree.classList.add('hidden');
    minusThree.classList.remove('hidden');
});

questionThree.addEventListener('click', function() {
    paragraphThree.classList.remove('hidden');
    plusThree.classList.add('hidden');
    minusThree.classList.remove('hidden');
});

minusThree.addEventListener('click', function() {
    paragraphThree.classList.add('hidden');
    plusThree.classList.remove('hidden');
    minusThree.classList.add('hidden');
});

let paragraphFour = document.querySelector('.paragraph-4');
let plusFour = document.querySelector('.question-4 .plus');
let minusFour = document.querySelector('.question-4 .minus');
let questionFour = document.querySelector('.question-4 .faq-icons h3');

plusFour.addEventListener('click', function() {
    paragraphFour.classList.remove('hidden');
    plusFour.classList.add('hidden');
    minusFour.classList.remove('hidden');
});

questionFour.addEventListener('click', function() {
    paragraphFour.classList.remove('hidden');
    plusFour.classList.add('hidden');
    minusFour.classList.remove('hidden');
});

minusFour.addEventListener('click', function() {
    paragraphFour.classList.add('hidden');
    plusFour.classList.remove('hidden');
    minusFour.classList.add('hidden');
});