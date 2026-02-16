const html = document.querySelector('#html')
let i = ''
let newHTML = []
let  listItems = JSON.parse(localStorage.getItem('mobieCard'))
console.log( listItems)
for (let newRender of  listItems) {
    i += newRender            
     console.log(i)                                        
                                          
    
}

html.innerHTML = `<div class='container-2'>
                                        <div class='text-1'>
                                        <span   class='title'>${i.title}</span >
                                        <span class='start' style="color: #e4bd0f;">&#9733</span >
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
                                          </div>    `
