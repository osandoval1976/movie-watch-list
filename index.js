
const movies =  document.getElementById('movie')
const btn = document.getElementById('btn')
const inputText = document.getElementById('search-site')



const anchorHTML = `<a href=${"watchlist.html"}><img  id='icon' class="icon" src=${"images/icon-10.svg"}></a>`

btn.addEventListener('click',function(){
let inputValue = inputText.value

fetch(`https://www.omdbapi.com/?t=${inputValue}&apikey=4c9cae68`)
.then(response=>response.json())
.then(data=>{
 const render = {
    title: data.Title,
    rating:data.imdbRating,
    time:data.Runtime,
    genre: data.Genre,
    anchor: anchorHTML,
    plot:data.Plot,
    poster:data.Poster
 }
 
movies.innerHTML = `
<div id="list" class="list">
<div class="text-1">
<h3>${render.title}</h3>
<span>${render.rating}</span>
</div>
<div class="text-2">
<span>${render.time}</span>
<span>${render.genre}</span>
<span>${render.anchor} </span>
<span>Watchlist </span>
</div>
<div class="text-3">
<span>${render.plot}</span>
</div>
<img  class="poster" src=${render.poster}>
</div>
`


 
})
})







