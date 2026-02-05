const html = document.querySelector(#html)
const listItems = JSON.parse(localStorage.getItem('mobieCard'))
console.log(listItems)

html.innerHTML = `
                                    <div id="list" class="list">
                                    <div class="text-1">
                                        <h3>${listItems.title}</h3>

                                        <span>${listItems.rating}</span>
                                    </div>
                                    <div class="text-2">
                                        <span>${listItems.time}</span>
                                        <span>${listItems.genre}</span>
                                        <span id="btn-2">${listItems.image} </span>
                                        <span>Watchlist </span>
                                    </div>
                                    <div class="text-3">
                                        <span>${listItems.plot}</span>
                                        <span>${listItems.poster}</span>
                                    </div>
                                </div>    `
