const movies =  document.getElementById('movie')
const btn = document.getElementById('btn')
const searchMovies = document.querySelector('input')
btn.addEventListener("submit", {
fetch("http://www.omdbapi.com/?s=tt3896198&apikey=4c9cae68")
.then(response=>response.json())
.then(data=>{
  const dMovies = searchMovies.value = data.search
  movies.innerHTML = dMovies
}
)
                      })
