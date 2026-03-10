
let newItems =[]
let newStorage=''
let p = localStorage.getItem('mobieCard');
let m = JSON.parse(p)
let items =[] 
function newHTML(x){
let itemsLength = x.length;
for(let i=0; i < itemsLength;i++){
/*loop the object for render html on the web*/  
                    
                               
                                 items=[`
                                      <li id='remove' class="ulList" data-id="${[i]}">
                                      <div class="container-2">
                                      <div class="text-1">
                                      <span   class="title">${m[i][0].title}</span >
                                        <span class='start' style="color: #f7cb06;">&#9733</span >
                                        <span class='rating'>${m[i][0].rating}</span >
                                        </div>
                                        <div  class='text-2'>
                                        <span class='time'>${m[i][0].time}</span> 
                                        <span class='genre'>${m[i][0].genre}</span >
                                        </div>
                                        <div class='text-3'>
                                        <button id="btn-3" class='btn-3' data-btn="${[i]}">${m[i][0].image}</button>
                                        <span class='wlist'>remove  </span>"
                                       </div>
                                       <div class='text-4'>
                                        <span>${m[i][0].plot}</span> 
                                        </div>
                                          <div class='text-5'>
                                        <span>${m[i][0].poster}</span> 
                                          </div>   
                                          </div>  
                                          </li>`]
                                         
                                          
    

    
newItems.push(items)

document.getElementById('html').innerHTML = newItems



document.getElementById('btn-3').addEventListener('click', function(e){
const remove = document.querySelector('#btn-3')
let element= remove.dataset.btn
console.log(element)
if(e){
  console.log(e)
  return e.target.button
}
 removeItems(e.target.button)
})
}

}
function removeItems(id){
/*console.log(id)*/
}


newHTML(m)
 


              








