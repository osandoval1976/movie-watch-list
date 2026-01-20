const movies =  document.getElementById('movie')
const btn = document.getElementById('btn')
let dMovies = document.querySelector('input[type="text"]').value
console.log()
btn.addEventListener("click", async ()=>{
  
const response =  await fetch(`https://www.omdbapi.com/?t=${dMovies}&apikey=4c9cae68`)
const data = await response.json()
console.log(data)
movies.innerHTML =  data
})

