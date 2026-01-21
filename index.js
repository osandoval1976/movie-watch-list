const movies =  document.getElementById('movie')
const btn = document.getElementById('btn')
const inputText = document.getElementById('search-site')


btn.addEventListener("click", function (){
    let inputValue = inputText.value

fetch(`https://www.omdbapi.com/?t=${inputValue}&apikey=4c9cae68`)
.then(response=>response.json())
.then(data=>{
console.log(data)
movies.innerHTML = `<div class="list">
<h3>${data.Title}</h3>
<span>${data.Year}</span>
<span>${data.Ratings[0].Value}</span>
<span>${data.Plot}</span>
</div>`
})

})

