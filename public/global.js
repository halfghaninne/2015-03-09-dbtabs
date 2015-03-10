window.onload = function() {
  
  var allProducts = document.getElementById("all_products"); //=> HTML anchor element
  allProducts.addEventListener("click", getAll ); //end of click listener 
  
  function getAll() {
    var request = new XMLHttpRequest;
    request.open("post", "/all");
    request.send();
    request.addEventListener("load", function() {

      var productDiv = document.getElementById("product_list");
      var list = document.createElement("ul");
      productDiv.appendChild(list);

      var allProds = JSON.parse(this.response);
      
      // var test = document.getElementById("test_block");
      //
      // test.setAttribute("display", "block");
      // test.innerHTML = allProds[0].id;


        for (i = 0; i < allProds.length; i++) {
          
          var id_st = allProds[i].id.toString();
          
          innerHtmlString = ("<li><a href='/product_info/" + id_st + "'>" + allProds[i].gen_info.split(":")[0] + "</a></li>");
          var existingHtml = list.innerHTML;
          list.innerHTML = existingHtml.concat(innerHtmlString) ;
          
          // var listItem = document.createElement("li");
          // var innerLink = document.createElement("a");
          //
          // innerLink.setAttribute("href", "/product_info/" + product.id);
          // innerLink.innerHTML = product.gen_info ;
          //
          // listItem.appendChild(innerLink);
          // productDiv.appendChild(list);
        }; //end of for loop     
    }); //end of eventListener function
  }; //end of getAll
  
} //end of window.onload

