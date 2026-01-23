const movies =  document.getElementById('movie')
const btn = document.getElementById('btn')
const inputText = document.getElementById('search-site')
const html = document.getElementById('html')



btn.addEventListener("click", renderHTML)
function renderHTML(){
    let inputValue = inputText.value

fetch(`https://www.omdbapi.com/?t=${inputValue}&apikey=4c9cae68`)
.then(response=>response.json())
.then(data=>{
console.log(data)
if(data){
movies.innerHTML = `
<div class="poster"><img src=${data.Poster}></div>
<div class="list">
<h3>${data.Title}</h3>
<span>${data.imdbRating}</span>
<span>${data.Runtime}</span>
<span>${data.Genre}</span>
<span id="add"><a href="watchlist.html">+</a>Watchlist</span>
<span>${data.Plot}</span>
</div>`
function renderNewHTML(){
html.innerHTML=`
<div class="poster"><img src='${data.Poster}' width='25px' height='25px'></div>
<div class="list">
<h3>${data.Title}</h3>
<span>${data.imdbRating}</span>
<span>${data.Runtime}</span>
<span>${data.Genre}</span>
<span>${data.Plot}</span>
</div>`
}
})
}
