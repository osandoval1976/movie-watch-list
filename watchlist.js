let items =''
let p=[]
let y =''
let newStorage=''
let x = JSON.parse(localStorage.getItem('mobieCard'));
console.log(x)





document.addEventListener("DOMContentLoaded", function(){
localStorage.setItem('text', JSON.stringify(x))
y = JSON.parse(localStorage.getItem('text'));

myFunction()
})
 

function myFunction(){
items += "<ul>"
for(let i of y) {
  
                                    items += `<li class='ulList'>
                                      <div class='container-2'>
                                      <div class='text-1'>
                                      <span   class='title'>${i.title}</span >
                                        <span class='start' style="color: #f7cb06;">&#9733</span >
                                        <span class='rating'>${i.rating}</span >
                                        </div>
                                        <div  class='text-2'>
                                        <span class='time'>${i.time}</span> 
                                        <span class='genre'>${i.genre}</span >
                                        </div>
                                        <div class='text-3'>
                                        <span id="btn-3" class='btn-1'>${i.image} </span >
                                        <span class='wlist'>remove  </span>
                                       </div>
                                       <div class='text-4'>
                                        <span>${i.plot}</span> 
                                        </div>
                                          <div class='text-5'>
                                        <span>${i.poster}</span> 
                                          </div>   
                                          </div>  
                                          </li>`


 

items+="</ul>"

};
 
newStorage = localStorage.setItem('new', JSON.stringify(items))    
console.log(newStorage)
if(newStorage){
 items=`${newStorage}`
  myFunction()
  
}                         
document.querySelector('#html').innerHTML =items



}















