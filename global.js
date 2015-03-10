window.onload = function() {
  var request = new XMLHttpRequest;
  request.open("post", "/products");
  request.send();
  request.addEventListener("load", showAllProds);  
   
} //end of window.onload

function showAllProds() {
  var allProds = JSON.parse(this.response);
    for each (product in allProds) {
      var list = document.createElement("ul");
      var listItemOne = document.create
    
    }
  
  
}


//would
function