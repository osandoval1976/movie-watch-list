let items =[]
let y =[]
let newStorage=''
let m = ''
// watchlist.js:5 (original line)
// const data = JSON.parse(somePossiblyEmptyString);

// Suggested fix:
let x = localStorage.getItem('mobieCard'); // Example source

if (x) { // Check if the string is not empty or null
  try {
    const data = JSON.parse(x);
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
                 
    // Continue with your logic using 'data'
  } catch (e) {
    if (e instanceof SyntaxError) {
      console.error("Failed to parse JSON data:", e);
      // Handle the error, e.g., by initializing with default data
      const data = {}; // Or [] depending on expected JSON structure
    } else {
      throw e;
    }
  }
} else {
  // Handle cases where the string is empty or null (e.g., first time loading)
  console.warn("No JSON data found or data was empty, initializing default.");
  const data = {}; // Or []
}

 


 


 
 console.log(items)
  document.querySelector('#html').innerHTML +=items                 








