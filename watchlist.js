let x = JSON.parse(localStorage.getItem('mobieCard'));
let newRender =''
let newHTML =[]
function myFunction(n){

localStorage.setItem('text', JSON.stringify(n)) 
let m = JSON.parse(localStorage.getItem('text'))
let items = "<ul>"
for(let i=0; i< m.length;i++) {
 

                                    items = `<li class='ulList'>
                                      <div class='container-2'>
                                      <div class='text-1'>
                                      <span   class='title'>${m[i].title}</span >
                                        <span class='start' style="color: #f7cb06;">&#9733</span >
                                        <span class='rating'>${m[i].rating}</span >
                                        </div>
                                        <div  class='text-2'>
                                        <span class='time'>${m[i].time}</span> 
                                        <span class='genre'>${m[i].genre}</span >
                                        </div>
                                        <div class='text-3'>
                                        <span id="btn-3" class='btn-1'>${m[i].image} </span >
                                        <span class='wlist'>remove  </span>
                                       </div>
                                       <div class='text-4'>
                                        <span>${m[i].plot}</span> 
                                        </div>
                                          <div class='text-5'>
                                        <span>${m[i].poster}</span> 
                                          </div>   
                                          </div>  
                                          </li>`



items+="</ul>"
newHTML.unshift(items)



}

console.log(newHTML)

}

myFunction(x)

document.querySelector('#html').innerHTML +=newHTML












