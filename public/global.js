window.onload = function() {
  
  var allProducts = document.getElementById("all_products");
  allProducts.addEventListener("click", getAll() ); //end of click listener

} //end of window.onload
  
  
  function getAll() {
    var request = new XMLHttpRequest;
    request.open("post", "/all");
    request.send();
    request.addEventListener("load", function() {

      var productDiv = document.getElementById("product_list");
      var list = document.createElement("ul");

      var allProds = JSON.parse(this.response);

        for (product in allProds) {
          var listItem = document.createElement("li");
          var innerLink = document.createElement("a");
          innerLink.setAttribute("href", "/product_info");
          innerLink.innerHTML(product.gen_info);   
          listItem.appendChild(innerLink);
          productDiv.appendChild(list);
        }; //end of for loop     
    }); //end of eventListener function
  };

