const movies = document.getElementById('ulHTML');
const btn = document.getElementById('btn');
let inputText = document.getElementById('search-site');
let inputValue=[]
let items=[]
let n=''
let newItems
let firstItems=''

let x = JSON.parse(localStorage.getItem('mobieCard'));
console.log(x)

if (x) { // Only parse if it's not null or empty
for(let i of x){
   newItems={ 
                        title: i.Title,
                        rating: i.imdbRating,
                        time: i.Runtime,
                        genre: i.Genre,
                        anTag: `<img  class="icon" src=${"images/icon-10.svg"}>`,
                        image: `<img  class="icon" src=${"images/icon-20.svg"}>`,
                        plot: i.Plot,
                        poster: `<img class="poster" src=${i.Poster}>`
}
 
   }
 
  items=[...items, newItems]
  console.log(items)
  renderHTML()
  
 
}
btn.addEventListener('click', renderHTML)

async function renderHTML(){

  inputValue=[inputText.value]
inputText.value = '' 
 



    fetch(`https://www.omdbapi.com/?apikey=4c9cae68&t=${inputValue}`)
        .then(response => {
            if (!response.ok) {
                // If response is not OK, it might not be JSON.
                // Throw an error or handle accordingly.
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // .json() handles JSON.parse() internally
        })
        .then(post => {
          items=[{ title: post.Title,
                        rating: post.imdbRating,
                        time: post.Runtime,
                        genre: post.Genre,
                        anTag: `<img  class="icon" src=${"images/icon-10.svg"}>`,
                        image: `<img  class="icon" src=${"images/icon-20.svg"}>`,
                        plot: post.Plot,
                        poster: `<img class="poster" src=${post.Poster}>`
}]

            
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    
               


/*for loop to render html on index.html*/  
    
    for(let i of items){
  
  n = `
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
      `
     

}
   movies.innerHTML = n 

 
 let clicked=''  
document.getElementById('btn-1').addEventListener('click', function(e){
clicked = e.target.span
storageRender(items)
 }) 
function storageRender(m){
localStorage.setItem('mobieCard', JSON.stringify(m)) 
renderHTML()
}

}


