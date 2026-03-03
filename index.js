const movies = document.getElementById('ulHTML');
const btn = document.getElementById('btn');
let inputText = document.getElementById('search-site');
let inputValue=[]
let title=[]
let n=''
let newItems=[]
let newTitle=[]
let firstItems=[]
let p =[] 
let r=[]
p=JSON.parse(localStorage.getItem('mobieCard'));

 if (p) { 
  for(let i of p){
   
newTitle = i.title 
 
if(newTitle){
  fetch(`https://www.omdbapi.com/?apikey=4c9cae68&t=${newTitle}`)
  .then(resp=>resp.json())
  .then(post=>{
    console.log(post)
    newItems ={
                        title: post.Title,
                        rating: post.imdbRating,
                        time: post.Runtime,
                        genre: post.Genre,
                        anTag: `<img  class="icon" src=${"images/icon-10.svg"}>`,
                        image: `<img  class="icon" src=${"images/icon-20.svg"}>`,
                        plot: post.Plot,
                        poster: `<img class="poster" src=${post.Poster}>`

    }
    
  })    
  
  renderHTML()
}
} 
}


btn.addEventListener('click', renderHTML)

async function renderHTML() {
  try{     
title=inputText.value
inputText.value = '' 
const response = await fetch(`https://www.omdbapi.com/?apikey=4c9cae68&t=${title}`)
const post = await response.json()
if(!response.ok){
throw Error("Something went wrong", response.status)
}

             firstItems=[{ 
                        title: post.Title,
                        rating: post.imdbRating,
                        time: post.Runtime,
                        genre: post.Genre,
                        anTag: `<img  class="icon" src=${"images/icon-10.svg"}>`,
                        image: `<img  class="icon" src=${"images/icon-20.svg"}>`,
                        plot: post.Plot,
                        poster: `<img class="poster" src=${post.Poster}>`
                  }]
                  
  }catch(err){
console.error(`try again:`,err)
movies.innerHTML = `Opss, try again`
}finally{ 

for(let i of firstItems){
  n = `<li>
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
      </div> </li>`    
}  

 movies.innerHTML = n 


let clicked=''  
document.getElementById('btn-1').addEventListener('click', function(e){
clicked = e.target.span

localStorage.setItem('mobieCard', JSON.stringify(firstItems))

if(firstItems){
 firstItems=[...firstItems, newItems]
}

 })
}
}


 

 

 







