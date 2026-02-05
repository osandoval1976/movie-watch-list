const movies = document.getElementById('movie');
const btn = document.getElementById('btn');
let inputText = document.getElementById('search-site');
let inputValue=[]
let localStorageData=''
let html = document.getElementById('html')
console.log(html)
btn.addEventListener('click',renderHTML)

async  function renderHTML() {
            inputValue.push(inputText.value);
            inputText.value=''
            let poster =''
            
const resp = await fetch(`https://www.omdbapi.com/?t=${inputValue}&apikey=4c9cae68`)
const post = await resp.json()
               
     
                 poster = {
                        title: post.Title,
                        rating: post.imdbRating,
                        time: post.Runtime,
                        genre: post.Genre,
                        anTag: `<img  class="icon" src=${"images/icon-10.svg"}>`,
                        image: `<img  class="icon" src=${"images/icon-20.svg"}>`,
                        plot: post.Plot,
                        poster: `<img class="poster" src=${post.Poster}>`
                    };
    if(movies){     


                
               if (movies !== 'undefined') { // Add a check for movies element as well
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

                } if(movies == 'undefined'){
   
               
                    html.innerHTML = ` 
                     <div class="image">
                    <p class="banner">"Your Watchlist looks a little empty.... </p> 
                     <div class="mainPage">
                    <a id="addList" href="index.html"> 
                    <img  class="icon-1" src="images/icon-20.svg" alt="homepage-add-movies-icon"/> 
                    </a>
                    <p class="icon-2">  Let's add Some Movies!</p>
         
                    </div>
                    </div>` 
     
                }

            }
 /*-Saving the data-*/  
 localStorage.setItem('mobieCard', JSON.stringify(poster))                                 
           
  /*adding movies to watchlist.html*/
let clickedBTN ='' 
 document.getElementById('btn-1').addEventListener('click', htmlRENDER)
    
function  htmlRENDER (e) {   
clickedBTN = e.target.span;  
 
 /*-retriving data to watchlist-*/
const listItems = JSON.parse(localStorage.getItem('mobieCard'))
console.log(listItems)

html.innerHTML = `
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










                 
    
  

                 
             
 
  /*function to save localstorage data and retrieve*/



   

   }
   /*document.getElementById('addList').addEventListener('click', function(e){
    const add =  e.target.span
    alert(add)
    if(add !== null){
        return add
    }
   })*/
