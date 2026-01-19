const movies =  document.getElementById('movie')
fetch("http://www.omdbapi.com/?i=tt3896198&apikey=4c9cae68")
.then(response=>response.json())
.then(data=>{
  movies.innerHTML = data.search.title
}
)
