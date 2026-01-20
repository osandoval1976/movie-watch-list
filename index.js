const movies =  document.getElementById('movie')
const btn = document.getElementById('btn')
const dMovies = document.getElementById('search-site').value
console.log(dMovies)
btn.addEventListener("click", async ()=>{
const response = await fetch(`http://www.omdbapi.com/?t=${dMovies}&apikey=4c9cae68`)
const data = await response.json()
  console.log(data)
  movies.textContent = dMovies
  


})
