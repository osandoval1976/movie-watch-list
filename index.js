const movies = document.getElementById('ulHTML');
const btn = document.getElementById('btn');
let inputText = document.getElementById('search-site');
let inputValue=[]
let items = []
let poster=[]

btn.addEventListener('click', renderHTML)
async function renderHTML(){
inputValue.push(inputText.value);
const resp = await fetch(`https://www.omdbapi.com/?t=${inputValue}&apikey=4c9cae68`)
const post = await resp.json()
items=[{         title: post.Title,
                        rating: post.imdbRating,
                        time: post.Runtime,
                        genre: post.Genre,
                        anTag: `<img  class="icon" src=${"images/icon-10.svg"}>`,
                        image: `<img  class="icon" src=${"images/icon-20.svg"}>`,
                        plot: post.Plot,
                        poster: `<img class="poster" src=${post.Poster}>`
                        
        }]


 
    

for(let i of items){
  



 x = `
      
      <li class='text-1'>${i.title}</li>
      <li class='text-1'>${i.rating}</li>
      <li class='text-1' style="color: #FFFF00;">&#9733</li>
      <li class='text-2'>${i.time}</li>
      <li class='text-2'>${i.genre}</li>
      <li id="btn-1" class="btn-1">${i.anTag} </li>
      <li class='text-2'>Watchlist </li>
      <li class='text-3'>${i.plot}</li>
      <li class='text-3'>${i.poster}</li> `
}

if(typeof x === 'undefined'){
  movies.innerHTML = x
}else{
  movies.innerHTML = x
}






  let clicked=''  
 document.getElementById('btn-1').addEventListener('click', function(e){
clicked = e.target.span

 storageRender(items)
 }) 
function storageRender(x){

  localStorage.setItem('mobieCard', JSON.stringify(x)) 
}
 
  
   
   
 
   

}







