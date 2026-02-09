const movies = document.getElementById('ulHTML');
const btn = document.getElementById('btn');
let inputText = document.getElementById('search-site');
let inputValue=[]
const clickBTN=''
let items = []
let poster=[]
 
btn.addEventListener('click', renderHTML)
async function renderHTML(){ 
inputValue.push(inputText.value);
inputText.value =''    
const resp = await fetch(`https://www.omdbapi.com/?t=${inputValue}&apikey=4c9cae68`)
const post = await resp.json()
items=[{                title: post.Title,
                        rating: post.imdbRating,
                        time: post.Runtime,
                        genre: post.Genre,
                        anTag: `<img  class="icon" src=${"images/icon-10.svg"}>`,
                        image: `<img  class="icon" src=${"images/icon-20.svg"}>`,
                        plot: post.Plot,
                        poster: `<img class="poster" src=${post.Poster}>`
        }]



   poster.push(items)                 
                    
                    
                 
}   
 /*const clickEd=''
    document.getElementById('btn-1').addEventListener('click', function(e){       
    clickEd = e.target.span
   
 })
*/
console.log(poster)
function newRender(items){
   if(items !== 'undefined')     {        
    let x =''
    for(let i of items){                  
      x+= `<li><span>${i.title}</span>
       <a id='btn-1'>${i.anTag}</a>
       </li>`
         }
console.log(x)
         movies.innerHTML = x
   
}
}
newRender(poster)
/*
                  */
