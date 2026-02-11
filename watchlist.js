const html = document.querySelector('#html')
let newRender=''
let listItems = JSON.parse(localStorage.getItem('mobieCard'))
console.log(listItems)
newRender+= `
                                    
                                    
                                        <li class='text-1'>${listItems.title}</li>

                                        <li class='text-1'>${listItems.rating}</li>
                                  
                                        <li class='text-1' style="color: #FFFF00;">&#9733</li>
                                        <li class='text-1'>${listItems.time}</li>
                                        <li class='text-1'>${listItems.genre}</li>
                                        <li id="btn-2" class='text-1'>${listItems.image} </li>
                                        <li class='text-1'>Watchlist </li>
                                   
                                        <li class='text-1'>${listItems.plot}</li>
                                        <li class='text-1'>${listItems.poster}</li>
                                        `
html.innerHTML=newRender
