const movies = document.getElementById('ulHTML');
const btn = document.getElementById('btn');
let inputText = document.getElementById('search-site');
let inputValue=[]
const clickBTN=''
let items = []
let poster=[]

btn.addEventListener('click', renderHTML)

async function renderHTML(){ 
inputValue.push(inputText.value);
inputText.value =''    
const resp = await fetch(`https://www.omdbapi.com/?t=${inputValue}&apikey=4c9cae68`)
const post = await resp.json()
items=[{                title: post.Title,
                        rating: post.imdbRating,
                        time: post.Runtime,
                        genre: post.Genre,
                        anTag: `<img  class="icon" src=${"images/icon-10.svg"}>`,
                        image: `<img  class="icon" src=${"images/icon-20.svg"}>`,
                        plot: post.Plot,
                        poster: `<img class="poster" src=${post.Poster}>`
        }]
       
 let x =''
 for(let i of items){
  x += `
  <div id="list" class="list">
  <div class="text-1">
  <h3>${i.title}</h3>
       <span>${i.rating}</span>
       <span style="color: #FFFF00;">&#9733</span>
       </div> 
       <div class="text-2">
      <span>${i.time}</span>
      <span>${i.genre}</span>
      <button id="btn-1" class="btn-1">${i.image} </button>
    <span>Watchlist </span>
      </div>
      <div class="text-3">
    <span>${i.plot}</span>
   <span>${i.poster}</span>
</div>
 </div>`
       
  console.log(x)
 }
  

   movies.innerHTML = x
   poster.push(items)


}
 document.getElementById('btn-1').addEventListener('click', clicked)
 const clickEd=''
 
   
function clicked(e){       
clicked = e.target.span
localStorage.setItem('mobieCard',JSON.stringify(poster))
 }






