const movies = document.getElementById('ulHTML');
const btn = document.getElementById('btn');
let inputText = document.getElementById('search-site');
let inputValue=''
let items = []
let poster=[]

btn.addEventListener('click', renderHTML)
async function renderHTML(){
inputValue=inputText.value

 const apiUrls =[
`https://www.omdbapi.com/?apikey=4c9cae68&t=${inputValue}` 
]
const resp = await fetch(`${apiUrls}`)
const post = await resp.json()
if(!post.ok){
items=[{                title: post.Title,
                        rating: post.imdbRating,
                        time: post.Runtime,
                        genre: post.Genre,
                        anTag: `<img  class="icon" src=${"images/icon-10.svg"}>`,
                        image: `<img  class="icon" src=${"images/icon-20.svg"}>`,
                        plot: post.Plot,
                        poster: `<img class="poster" src=${post.Poster}>`
}]

}try{
 movies.innerHTML= throw Error("oops");
}catch(error=>{
 console.error('Try Again')
})
 
console.log(items)

let x=''
     
for(let i of items){
  
  x = `
  <div class='container-1'>
      <div class='text-1'>
      <h3 class='title'>${i.title}</h3>
      <span class='start' style="color: #e4bd0f">&#9733</span>
      <span class='rating'>${i.rating}</span>
      
      </div>
      <div  class='text-2'>
      <span class='time'>${i.time}</span>
      <span class='genre'>${i.genre}</span>
      </div>
      <div class='text-3'>
      <span  id="btn-1" class="btn-1">${i.anTag} </span>
      <span class='wlist'>Watchlist</span>
      </div>
      <div class='text-4'>
      <span>${i.plot}</span>
      </div>
       <div class='text-5'>
      <span  >${i.poster}</span> 
      </div>
      </div>
      `
}
 
   movies.innerHTML = x 
  }
 





  let clicked=''  
 document.getElementById('btn-1').addEventListener('click', function(e){
clicked = e.target.span
 
 storageRender(items)
 }) 
function storageRender(x){
 localStorage.setItem('mobieCard', JSON.stringify(x)) 
}
}







