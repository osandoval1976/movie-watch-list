const movies =  document.getElementById('movie')
fetch("https://www.omdbapi.com/?s=tt3896198&apikey=4c9cae68")
.then(response=>response.json())
.then(data=>{
  movies.value = data.search.title
}
)
