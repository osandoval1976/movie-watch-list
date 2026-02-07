const movies = document.getElementById('movie');
const btn = document.getElementById('btn');
let inputText = document.getElementById('search-site');
let inputValue=[]
const clickBTN=''
let items = []
let poster=''

btn.addEventListener('click', async function(){ 
inputValue.push(inputText.value);
inputText.value =''    
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
                  
                    
                    
                    
                 
            })   
console.log(poster)

   if(items == 'undefined')     {        
      movies.innerHTML = `
                                <div id="list" class="list">
                                    <div class="text-1">
                                        <h3>${items.title}</h3>
                                        <span>${items.rating}</span>
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
                           
      

    const clickEd=''
    document.getElementById('btn-1').addEventListener('click', function(e){       
    clickEd = e.target.span
    localStorage.setItem('mobieCard', JSON.stringify(items)) 
 })

}