const baseURL = 'https://api.giphy.com/v1/gifs/random' 
const key = 'SEWFqfP3lrGYmPNh5291ZA8YzpbQ8b2x'
let url;

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const rating = document.querySelector('.rating');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');



//Results Display
const section = document.querySelector('section');

searchForm.addEventListener('submit', fetchResults);


function fetchResults(e) {
    e.preventDefault();
    url = `${baseURL}?api_key=${key}&tag=${searchTerm.value}&rating=${rating.value}`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayResults(data)
    })
}

function displayResults(data){
    let giphy = document.createElement('iframe');
    giphy.src = data.data.embed_url
    section.appendChild(giphy)
    
}