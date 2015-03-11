window.onload = function() {
  
  var allProducts = document.getElementById("all_products"); //=> HTML anchor element
  allProducts.addEventListener("click", getAll ); //end of allProducts event listener
  
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
          var prod_name = allProds[i].gen_info.split(":")[0];
 
          var innerHtmlString = "<li id = 'li" + id_st + "'><a href = 'javascript:void(0)' id = 'a" + id_st + "'>" + prod_name + "</a></li>";
          var existingHtml = list.innerHTML;
          list.innerHTML = existingHtml.concat(innerHtmlString);
          
          //************* show product information *****************// 
          //******************************************************// 
          
          prodLink = document.getElementById("a" + id_st);
          listItem = document.getElementById("li" + id_st);
          var existingListItemAnchorHtml = listItem.innerHTML
          prodLink.addEventListener("click", infoAppears(i)); 
          
          }; //end of for loop 
         
          function infoAppears (i) {
              // var prodInfoRequest = new XMLHttpRequest;
              // prodInfoRequest.open("post", "/product_info/" + id_st );
              // prodInfoRequest.send();
              // prodInfoRequest.addEventListener("load", function() {
              //   var product = JSON.parse(this.response)
                var genInfo = "<div id='gen_info' class='tab_content'><p>" + allProds[i].gen_info.split(":")[1] + "</p></div>";
                var techSpecs = "<div id='tech_specs' class='tab_content'><p>" + allProds[i].tech_specs + "</p></div>";
                var whereToBuy = "<div id='where_to_buy' class='tab_content'><p>" + allProds[i].where_to_buy + "</p></div>";

                var newString = existingListItemAnchorHtml.concat( genInfo + techSpecs + whereToBuy );
                listItem.innerHTML = newString;
            }; //end of infoAppears
            
            //******************************************************// 
            //******************************************************// 
    }); //end of request eventListener function
  }; //end of getAll
  
} //end of window.onload

