document.addEventListener('DOMContentLoaded', function () {
    const movies = document.getElementById('movie');
    const btn = document.getElementById('btn');
    const inputText = document.getElementById('search-site');
    const html = document.getElementById('html')
    const anchorHTML = `<img id="icon" class="icon" src=${"images/icon-10.svg"}>`;
    const postList = document.querySelectorAll('anchorHTML[id="icon]')
    let poster = '';
    let post=''
    if (btn) { // Add a check to ensure btn is not null
        btn.addEventListener('click', function () {
            let inputValue = inputText.value;

            fetch(`https://www.omdbapi.com/?t=${inputValue}&apikey=4c9cae68`)
                .then(response => response.json())
                .then(data => {
                    poster = {
                        title: data.Title,
                        rating: data.imdbRating,
                        time: data.Runtime,
                        genre: data.Genre,
                        anTag: anchorHTML,
                        plot: data.Plot,
                        poster: `<img class="poster" src=${data.Poster}>`
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
                                        <span>${poster.anTag} </span>
                                        <span>Watchlist </span>
                                    </div>
                                    <div class="text-3">
                                        <span>${poster.plot}</span>
                                        <span>${poster.poster}</span>
                                    </div>
                                </div>`;
                                
                    }
                    
                   
                
                });
        });
        

/*-icon is clicked*/

    }if(anchorHTML){
    
    postList.addEventListener('click',function(){
        let inputValue = inputText.value;
        fetch(`https://www.omdbapi.com/?t=${inputValue}&apikey=4c9cae68`)
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
                        localStorage.setItem('title', post.title)
                        localStorage.setItem('rating', post.rating)
                        localStorage.setItem('time', post.time)
                        localStorage.setItem('genre', poster.genre)
                        localStorage.setItem('plot', post.plot)
                        localStorage.setItem('poster', post.poster)
                        /*-retriving data to watchlist-*/
                        const newTitle = localStorage.getItem('title')
                        html.innerHTML = newTitle
                    } else {
                        html.innerHTML = "Sorry, no Web storage support!";
                    }

                })
       
            })

    }
    
    if (btn) {
        console.error("Error: Element with ID btn not found.");
    }









});