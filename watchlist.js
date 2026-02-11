const html = document.querySelector('#html')
let newRender = ''
let listItems = JSON.parse(localStorage.getItem('mobieCard'))
console.log(listItems)
for (let i of listItems) {
    newRender += `
                                    
                                    
                                        <li class='text-1'>${i.title}</li>

                                        <li class='text-1'>${i.rating}</li>
                                  
                                        <li class='text-1' style="color: #FFFF00;">&#9733</li>
                                        <li class='text-1'>${i.time}</li>
                                        <li class='text-1'>${i.genre}</li>
                                        <li id="btn-2" class='text-1'>${i.image} </li>
                                        <li class='text-1'>Watchlist </li>
                                   
                                        <li class='text-1'>${i.plot}</li>
                                        <li class='text-1'>${i.poster}</li>
                                                                              `
    
}

html.innerHTML = newRender