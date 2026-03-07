
let newItems =[]
let newStorage=''
let p = localStorage.getItem('mobieCard');
let m = JSON.parse(p)
let items =[] 
if(m){
for(let i of m){
console.log(i[0].title)
                              items +=`
                                      <li class="ulList">
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
                                        <span id="btn-3" class='btn-1'>${i[0].image} </span >
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
  }
let removeItems=''  
document.getElementById('btn-3').addEventListener('click', function(e){
removeItems = e.target.span
if(items){
localStorage.removeItem('mobieCard')
}
})
    


 
  

 


              








