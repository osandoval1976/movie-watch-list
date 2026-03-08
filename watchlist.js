
let newItems =[]
let newStorage=''
let p = localStorage.getItem('mobieCard');
let m = JSON.parse(p)
let items =[] 
if(m){
for(let i of m){
                              items +=`
                                      <li id='remove' class="ulList">
                                      <div class="container-2">
                                      <div class="text-1">
                                      <span   class="title">${i[0].title}</span >
                                        <span class='start' style="color: #f7cb06;">&#9733</span >
                                        <span class='rating'>${i[0].rating}</span >
                                        </div>
                                        <div  class='text-2'>
                                        <span class='time'>${i[0].time}</span> 
                                        <span class='genre'>${i[0].genre}</span >
                                        </div>
                                        <div class='text-3'>
                                        <span id="btn-3" class='btn-3'>${i[0].image} </span >
                                        <span class='wlist'>remove  </span>
                                       </div>
                                       <div class='text-4'>
                                        <span>${i[0].plot}</span> 
                                        </div>
                                          <div class='text-5'>
                                        <span>${i[0].poster}</span> 
                                          </div>   
                                          </div>  
                                          </li>`
    

        
};
  

 
    document.querySelector('#html').innerHTML = items
  

const element = document.getElementById('remove')
document.getElementById('btn-3').addEventListener('click', removeHTML)
  
  
function removeHTML(e){
  
 if(e.target.span === 0){
  return e.target.span
  
 }if(element.length === 0){
  element.remove()
 }if(m.length ===0){
  localStorage.removeItem('mobieCard')
}

    
}

}
  

 


              








