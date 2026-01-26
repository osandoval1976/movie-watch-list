 
 document.addEventListener('DOMContentLoaded', function () {
    const movies = document.getElementById('movie');
    const btn = document.getElementById('btn');
    const inputText = document.getElementById('search-site');
    
     if (btn) { // Add a check to ensure btn is not null
        btn.addEventListener('click', function () {
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
                        anTag: `<img id="icon" class="icon" src=${"images/icon-10.svg"}>`,
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
                      
 document.getElementById('btn-1').addEventListener('click', function(event) {
 const clickedBTN = event.target.span;

 let post=''
 let addData = []
 const html = document.getElementById('ulLi')
if(clickedBTN !== false){  
    let inputValue1 = inputText.value;
fetch(`https://www.omdbapi.com/?t=${inputValue1}&apikey=4c9cae68`)
                .then(response => response.json())
                .then(data => {
                  
                 post = {
                        title: data.Title,
                        rating: data.imdbRating,
                        time: data.Runtime,
                        genre: data.Genre,
                        plot: data.Plot,
                        poster: `<img class="poster" src=${data.Poster}>`
                    };
       
                    if (typeof (Storage) !== "undefined") {
                        /*-Saving the data-*/
                        localStorage.setItem('mobieCard', JSON.stringify(post))
                                        
                        /*-retriving data to watchlist-*/
                        let movieCard =JSON.parse(localStorage.getItem('mobieCard'))
                       
                       const newMovies = addData.push(movieCard)
                        
                       let listItems=''
                         
                        for(let i=0; i < newMovies.lenght;i++){
                           listItems +=`
                           <li>
                        <a target='_blank' href='${watchlist.html}'>
                          ${newMovies[i]}
                        </a>
                        </li> `   
                       }
                        html.innerHTML=listItems
                        alert(listItems)
                    } else {
                        html.innerHTML = "Sorry, no Web storage support!";
                    }

                
       

                })

}  

});
  
                    }
                    
                
                });
        });
        

/*-icon is clicked*/

    }
    
    if (btn) {
        console.error("Error: Element with ID btn not found.");
    }









});

document.getElementById('addList').addEventListener('click', function(e){
    const add =  e.target.span
    alert(add)
   })