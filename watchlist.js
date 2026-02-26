let items =[]
let y =[]
let newStorage=''
let m = ''
let x = JSON.parse(localStorage.getItem('mobieCard')); // Example source
if (x) { // Check if the string is not empty or null
  
    for(let i of data) {
 
                                    items +=[`<li class='ulList'>
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
                                          </li>`]


 



};
                 
}

 


 


 
 console.log(items)
  document.querySelector('#html').innerHTML +=items                 








