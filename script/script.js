'use strict';
const ratingWrapper = document.querySelector('.rating-wrapper');
const rating = document.querySelectorAll('.rating');
const submit = document.querySelector('.submit');
const container = document.querySelector('.container');
const afterSubmit = document.querySelector('.after-submit-container');
let selectedRating = document.querySelector('.selected-rating');

let number = 0;

rating.forEach(e => {
    e.addEventListener('click', function () {
        number = e.id;
    })
});

submit.addEventListener('click', function () {
    if (number !== 0) {
        container.style.display = 'none';
        afterSubmit.style.display = 'flex';
        selectedRating.textContent = `You selected ${number} out of 5`;
    } else {
        return;
    }
});
