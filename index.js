
const movies =  document.getElementById('movie')
const btn = document.getElementById('btn')
const inputText = document.getElementById('search-site')
const html = document.getElementById('html')

btn.addEventListener("click", function(){
 let inputValue = inputText.value
fetch(`https://www.omdbapi.com/?t=${inputValue}&apikey=4c9cae68`)
.then(response=>response.json())
.then(data=>{
    
 movies.innerHTML = `
 <div class="list">

<div class="text-1">
<h3>${data.Title}</h3>
<span>${data.imdbRating}</span>
</div>
<div class="text-2">
<span>${data.Runtime}</span>
<span>${data.Genre}</span>
<span id="add"><a href="watchlist.html" >+</a>Watchlist</span>
</div>
<div class="text-3">
<span>${data.Plot}</span>
</div>
<img  class="poster" src=${data.Poster}>
</div>`
})
})
const add = document.getElementsByTagName('a')







