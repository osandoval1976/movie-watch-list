    document.addEventListener('DOMContentLoaded', function() {
        const movies = document.getElementById('movie');
        const btn = document.getElementById('btn');
        const inputText = document.getElementById('search-site');

        const anchorHTML = `<a href=${"watchlist.html"}><img id='icon' class="icon" src=${"images/icon-10.svg"}></a>`;
        let render = '';

        if (btn) { // Add a check to ensure btn is not null
            btn.addEventListener('click', function() {
                let inputValue = inputText.value;

                fetch(`https://www.omdbapi.com/?t=${inputValue}&apikey=4c9cae68`)
                    .then(response => response.json())
                    .then(data => {
                        render = {
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
                                        <h3>${render.title}</h3>
                                        <span>${render.rating}</span>
                                    </div>
                                    <div class="text-2">
                                        <span>${render.time}</span>
                                        <span>${render.genre}</span>
                                        <span>${render.anTag} </span>
                                        <span>Watchlist </span>
                                    </div>
                                    <div class="text-3">
                                        <span>${render.plot}</span>
                                        <span>${render.poster}</span>
                                    </div>
                                </div>`;
                        }
                    });
            });
        } else {
            console.error("Error: Element with ID 'btn' not found.");
        }
    


const html =document.getElementsByClassName('movies')
   console.log(html) 
    if (typeof(Storage) !== "undefined") {
/*-Saving the data-*/
    localStorage.setItem('title', render.title)
    localStorage.setItem('rating', render.rating)
    localStorage.setItem('time', render.time)
    localStorage.setItem('genre', render.genre)
    localStorage.setItem('plot', render.plot)
    /*-retriving data to watchlist-*/
    html.innerHTML =localStorage.getItem('title')
    
  
} else {
  html.innerHTML = "Sorry, no Web storage support!";
}
    





});