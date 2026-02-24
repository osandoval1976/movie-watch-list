const movies = document.getElementById('ulHTML');
const btn = document.getElementById('btn');
let inputText = document.getElementById('search-site');
let inputValue=''
let items = []
let n=[]
let m = JSON.parse(localStorage.getItem('mobieCard')

if(m){

  let d = { 
                        title: m.title,
                        rating: m.rating,
                        time: m.time,
                        genre: m.genre,
                        anTag: `<img  class="icon" src=${"images/icon-10.svg"}>`,
                        image: `<img  class="icon" src=${"images/icon-20.svg"}>`,
                        plot: m.plot,
                        poster: `<img class="poster" src=${m.poster}>`
}
 
 items.push(d)
 console.log(items, d)
}
function storageRender(x){
localStorage.setItem('mobieCard', JSON.stringify(x)) 

 
 renderHTML()
}
btn.addEventListener('click', renderHTML)


async function renderHTML(){
inputValue=inputText.value

 let apiUrls =[
`https://www.omdbapi.com/?apikey=4c9cae68&t=${inputValue}` 
]

const resp = await fetch(`${apiUrls}`)
const post = await resp.json()
               items= [{ title: post.Title,
                        rating: post.imdbRating,
                        time: post.Runtime,
                        genre: post.Genre,
                        anTag: `<img  class="icon" src=${"images/icon-10.svg"}>`,
                        image: `<img  class="icon" src=${"images/icon-20.svg"}>`,
                        plot: post.Plot,
                        poster: `<img class="poster" src=${post.Poster}>`
}]





     
for(let i of items){
  
  n =[ `
  <div class='container-1'>
      <div class='text-1'>
      <h3 class='title'>${i.title}</h3>
      <span class='start' style="color: #e4bd0f">&#9733</span>
      <span class='rating'>${i.rating}</span>
      
      </div>
      <div  class='text-2'>
      <span class='time'>${i.time}</span>
      <span class='genre'>${i.genre}</span>
      </div>
      <div class='text-3'>
      <span  id="btn-1" class="btn-1">${i.anTag} </span>
      <span class='wlist'>Watchlist</span>
      </div>
      <div class='text-4'>
      <span>${i.plot}</span>
      </div>
       <div class='text-5'>
      <span  >${i.poster}</span> 
      </div>
      </div>
      `]
     
}

   movies.innerHTML = n 
  
 




  

 
 let clicked=''  
document.getElementById('btn-1').addEventListener('click', function(e){
clicked = e.target.span
  
storageRender(items)
 }) 






}






