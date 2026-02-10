const movies = document.getElementById('ulHTML');
const btn = document.getElementById('btn');
let inputText = document.getElementById('search-site');
let inputValue=[]
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
if(i !== 'undefined'){
   x += `
       <li>${i.title}</li>
       <li>${i.rating}</li>
       <li style="color: #FFFF00;">&#9733</li>
       <li>${i.time}</li>
      <li>${i.genre}</li>
      <li id="btn-1" class="btn-1" onclick=${clicked}>${i.anTag} </li>
      <li>Watchlist </li>
      <li>${i.plot}</li>
      <li>${i.poster}</li> `

    movies.innerHTML = x
 }else{
  movies.innerHTML = `Search again!`
 }
 }
  
function storageRender(x){

  localStorage.setItem('mobieCard', JSON.stringify(x)) 
}
 
  
   
   
 function clicked(e){  
  const clicked=''     
clicked = e.target.span
 storageRender(items)
 }
   


}







