 
const movies = document.getElementById('movie');
const btn = document.getElementById('btn');
const inputText = document.getElementById('search-site');
const html = document.getElementById('movies') 
console.log(html)
   
        

btn.addEventListener('click',async  function() {
            let inputValue = inputText.value;
            let poster =''
const resp = await fetch(`https://www.omdbapi.com/?t=${inputValue}&apikey=4c9cae68`)
const post = await resp.json()
               
                 poster = {
                        title: post.Title,
                        rating: post.imdbRating,
                        time: post.Runtime,
                        genre: post.Genre,
                        anTag: `<img  class="icon" src=${"images/icon-10.svg"}>`,
                        plot: post.Plot,
                        poster: `<img class="poster" src=${post.Poster}>`
                    };
          
                
                if (movies) { // Add a check for movies element as well
                        movies.innerHTML = `
                                <div id="list" class="list">
                                    <div class="text-1">
                                        <h3>${poster.title}</h3>
                                        <span>${poster.rating}</span>
                                    </div>
                                    <div class="text-2">
                                        <span>${poster.time}</span>
                                        <span>${poster.genre}</span>
                                        <span id="btn-1">${poster.anTag} </span>
                                        <span>Watchlist </span>
                                    </div>
                                    <div class="text-3">
                                        <span>${poster.plot}</span>
                                        <span>${poster.poster}</span>
                                    </div>
                                </div>`;

                }
                
            
        
  /*adding movies to watchlist.html*/
 let clickedBTN ='' 
document.getElementById('btn-1').addEventListener('click', function(event) {
clickedBTN = event.target.span; 
renderHTML()
})
 })

async function renderHTML(){
let post=''
let addData = []
let inputValue1 = inputText.value;
let listItems = ''

const response = await fetch(`https://www.omdbapi.com/?t=${inputValue1}&apikey=4c9cae68`)
const data = await response.json()

post = {
        title: data.Title,
        rating: data.imdbRating,
        time: data.Runtime,
        genre: data.Genre,
        image: `<img  class="icon" src=${"images/icon-20.svg"}>`,
        plot: data.Plot,
        poster: `<img class="poster" src=${data.Poster}>`
        };  
 
 addData.push(post)
  if(typeof (Storage) !== 'undefined'){ 
    /*-Saving the data-*/        
     localStorage.setItem('mobieCard', JSON.stringify(addData))
     /*-retriving data to watchlist-*/
    listItems =JSON.parse(localStorage.getItem('mobieCard') )
    console.log(listItems)
  }if(Storage !==null){
    html.innerHTML += `
    <div id="list" class="list">
                                    <div class="text-1">
                                        <h3>${listItems.title}</h3>
                                        <span>${listItems.rating}</span>
                                    </div>
                                    <div class="text-2">
                                        <span>${listItems.time}</span>
                                        <span>${listItems.genre}</span>
                                        <span id="btn-2">${listItems.image} </span>
                                        <span>Watchlist </span>
                                    </div>
                                    <div class="text-3">
                                        <span>${listItems.plot}</span>
                                        <span>${listItems.poster}</span>
                                    </div>
                                </div>    `
  }
 
 }                 
    
  

                 
             
 
  /*function to save localstorage data and retrieve*/


/*-HTML Content
   
document.getElementById('addList').addEventListener('click', function(e){
    const add =  e.target.span
    alert(add)
   })*/
