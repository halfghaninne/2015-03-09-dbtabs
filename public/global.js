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
          console.log("\n\n\nBegin the loop. 'list' is the UL that contains *all* of our products.");
          console.log("List is this right now: " + list);
          
          var id_st = allProds[i].id.toString();
          var prod_name = allProds[i].gen_info.split(":")[0];
 
          var innerHtmlString = "<li id = 'li" + id_st + "'><a href = '#' id = 'a" + id_st + "'>" + prod_name + "</a></li>";
          var existingHtml = list.innerHTML;
          
          console.log("Delete everything from 'list' (if there even is something in there). Re-add elements into list with new product included.")
          list.innerHTML = existingHtml.concat(innerHtmlString);
          
          //************* show product information *****************// 
          //******************************************************// 
          
          prodLink = document.getElementById("a" + id_st); // This is when prodLink is defined. It's location AT THIS TIME is part of its "definition".
          listItem = document.getElementById("li" + id_st); // Let us not forget: This element contains the DOM element that prodLink refers to.
          var existingListItemAnchorHtml = listItem.innerHTML // This var contains the HTML of listItem

          var genInfo = "<div id='gen_info" + id_st + "' class='tab_content'><p>" + allProds[i].gen_info.split(":")[1] + "</p></div>";
          var techSpecs = "<div id='tech_specs" + id_st + "' class='tab_content'><p>" + allProds[i].tech_specs + "</p></div>";
          var whereToBuy = "<div id='where_to_buy" + id_st + "' class='tab_content'><p>" + allProds[i].where_to_buy + "</p></div>";

          var newString = existingListItemAnchorHtml.concat( genInfo + techSpecs + whereToBuy ); // Combine th existingListItemAnchorHtml with the tab contents.
          listItem.innerHTML = newString; // 1) Delete everything from listItem. 2) Put newString into listItem. Consequence: The DOM element that prodLink refers to is gone.
          
          var divInfo = document.getElementsByClassName("tab_content");
 
          console.log("about to set event listener for #a" + id_st);
          console.log(document.getElementById("a" + id_st));

          document.getElementById("a" + id_st).addEventListener("click", function () {
            alert("clicked!");
            // for (i=0; i < divInfo.length; i++) {
//               divInfo[i].setAttribute("style", "display: block");
//             } //end for loop
          }); //end showDropDown
          
          console.log("Set event listener for #a" + id_st);
          console.log(document.getElementById("a" + id_st));
          
        }; //end of for loop
            
            //******************************************************// 
            //******************************************************// 
    }); //end of request eventListener function
  }; //end of getAll
  
  
  
} //end of window.onload

