 
 document.addEventListener('DOMContentLoaded', function () {
    const movies = document.getElementById('movie');
    const btn = document.getElementById('btn');
    const inputText = document.getElementById('search-site');
    
    btn.addEventListener('click', newFetch)
        
function newFetch() {
            let inputValue = inputText.value;
            let poster =''
            fetch(`https://www.omdbapi.com/?t=${inputValue}&apikey=4c9cae68`)
                .then(response => response.json())
                .then(post => {
                 poster = {
                        title: post.Title,
                        rating: post.imdbRating,
                        time: post.Runtime,
                        genre: post.Genre,
                        anTag: `<a id="icon" target=${'_blank'} href=${'watchlist.html'}><img  class="icon" src=${"images/icon-10.svg"}></a>`,
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

  /*function to save localstorage data and retrieve*/


async function renderHTML(){
let post=''
let addData = []
let inputValue1 = inputText.value;
const html = document.getElementById('html') 
const response = await fetch(`https://www.omdbapi.com/?t=${inputValue1}&apikey=4c9cae68`)
const data = await response.json()
post = {
        title: data.Title,
        rating: data.imdbRating,
        time: data.Runtime,
        genre: data.Genre,
        lessTag: `<a id="icon" target=${'_blank'} href=${'watchlist.html'}><img  class="icon" src=${"images/icon-20.svg"}></a>`,
        plot: data.Plot,
        poster: `<img class="poster" src=${data.Poster}>`
        };   
        
        if (typeof (Storage) !== "undefined") {
            /*-Saving the data-*/
            localStorage.setItem('mobieCard', JSON.stringify(post))
            /*-retriving data to watchlist-*/
            addData.push(JSON.parse(localStorage.getItem(' movieCard'))) 
            console.log(addData)
            }
            
    }   console.log(addData)    
      html.innerHTML =addData      
     })     
 }
    }) 
        
            
          
        

/*-HTML Content*/
   
document.getElementById('addList').addEventListener('click', function(e){
    const add =  e.target.span
    alert(add)
   })
