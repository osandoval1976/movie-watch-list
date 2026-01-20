const movies =  document.getElementById('movie')
const searchMovies = document.querySelector('input')
movies.addEventListener("submit", {
fetch("https://www.omdbapi.com/?s=tt3896198&apikey=4c9cae68")
.then(response=>response.json())
.then(data=>{
  searchMovies.value = data.search
}
)
                      })
