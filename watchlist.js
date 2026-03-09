
let newItems =[]
let newStorage=''
let p = localStorage.getItem('mobieCard');
let m = JSON.parse(p)
let items =[] 
if(m){

for(let i=0; i < m.length;i++){
  console.log([i])

/*loop the object for render html on the web*/  
for(let x of m){
                          
                               
                                 items +=`
                                      <li id='remove' class="ulList" data-id="${[i]}">
                                      <div class="container-2">
                                      <div class="text-1">
                                      <span   class="title">${x[i].title}</span >
                                        <span class='start' style="color: #f7cb06;">&#9733</span >
                                        <span class='rating'>${x[i].rating}</span >
                                        </div>
                                        <div  class='text-2'>
                                        <span class='time'>${x[i].time}</span> 
                                        <span class='genre'>${x[i].genre}</span >
                                        </div>
                                        <div class='text-3'>
                                        <span id="btn-3" class='btn-3'>${x[i].image} </span >
                                        <span class='wlist'>remove  </span>
                                       </div>
                                       <div class='text-4'>
                                        <span>${x[i].plot}</span> 
                                        </div>
                                          <div class='text-5'>
                                        <span>${x[i].poster}</span> 
                                          </div>   
                                          </div>  
                                          </li>`
                                         
                                          
    

    
};
  
document.querySelector('#html').innerHTML = items
document.getElementById('btn-3').addEventListener('click', function(e){
const removeElement =  document.getElementById('remove')
let element = document.querySelector('li')
let id = element.dataset.id
console.log(id)
if(e.target=== id){


  if(id == m[i]){
    removeElement.remove()
  }if(m[i]){
  localStorage.removeItem('mobieCard') 
}
}
})
}
} 

 


              








