
  
 // submit session
 function submitclick(){
        var user=document.getElementById("username").value;
        var password= document.getElementById("password").value;
            if(details.username==user && details.password==password){
                 location.href="./home.html";
            }else{              
                var error=document.getElementById("error").innerHTML="invalid username or password"; 
            }
        }
    
    //login page session
    var details={
        "username":"eranna",
        "password":"Eranna@123"
    };
    //body load session
    function bodyload(){
        getproducts("https://fakestoreapi.com/products");
       
        getelectronics("https://fakestoreapi.com/products/category/electronics");
        getfashion("https://fakestoreapi.com/products/category/women's clothing");
        getjewelery("https://fakestoreapi.com/products/category/jewelery");
        GetCartCount()
    }
   
    // getproducts session
    function getproducts(url){
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            for(var item of data){
                var card=document.createElement("div");
                card.className="card p-2 m-4"
                card.style.width="200px";
                card.innerHTML=`
                  <img src=${item.image} height="150px" class="card-img-top">
                  <div class="card-header" style="height:140px;">
                    <p>${item.title}</p>
                  </div>
                  <div class="card-body">
                    <dl>
                        <dt>Price</dt>
                        <dd>${item.price}</dd>
                        <dt>Rating</dt>
                        <dd>${item.rating.rate}</dd>
                    </dl>
                   </div>
                   <div class="card-footer">
                     <button onclick="AddToCartClick(${item.id})" class="btn btn-danger w-100">Add to Cart</button>
                    </div>
                `;
                document.getElementById("main").appendChild(card);
            }
        })
        
    }

    //electronics

    function getelectronics(url){
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            for(var item of data){
                var card=document.createElement("div");
                card.className="card p-2 m-4"
                card.style.width="200px";
                card.innerHTML=`
                  <img src=${item.image} height="150px" class="card-img-top">
                  <div class="card-header" style="height:140px;">
                    <p>${item.title}</p>
                  </div>
                  <div class="card-body">
                    <dl>
                        <dt>Price</dt>
                        <dd>${item.price}</dd>
                        <dt>Rating</dt>
                        <dd>${item.rating.rate}</dd>
                    </dl>
                   </div>
                   <div class="card-footer">
                     <button onclick="AddToCartClick(${item.id})" class="btn btn-danger w-100">Add to Cart</button>
                    </div>
                `;
                document.getElementById("main1").appendChild(card);
            }
        })
        
    }

    //fashion

    function getfashion(url){
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            for(var item of data){
                var card=document.createElement("div");
                card.className="card p-2 m-4"
                card.style.width="200px";
                card.innerHTML=`
                  <img src=${item.image} height="150px" class="card-img-top">
                  <div class="card-header" style="height:140px;">
                    <p>${item.title}</p>
                  </div>
                  <div class="card-body">
                    <dl>
                        <dt>Price</dt>
                        <dd>${item.price}</dd>
                        <dt>Rating</dt>
                        <dd>${item.rating.rate}</dd>
                    </dl>
                   </div>
                   <div class="card-footer">
                     <button onclick="AddToCartClick(${item.id})" class="btn btn-danger w-100">Add to Cart</button>
                    </div>
                `;
                document.getElementById("main2").appendChild(card);
            }
        })
        
    }
    
    //jewelery

    function getjewelery(url){
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            for(var item of data){
                var card=document.createElement("div");
                card.className="card p-2 m-4"
                card.style.width="200px";
                card.innerHTML=`
                  <img src=${item.image} height="150px" class="card-img-top">
                  <div class="card-header" style="height:140px;">
                    <p>${item.title}</p>
                  </div>
                  <div class="card-body">
                    <dl>
                        <dt>Price</dt>
                        <dd>${item.price}</dd>
                        <dt>Rating</dt>
                        <dd>${item.rating.rate}</dd>
                    </dl>
                   </div>
                   <div class="card-footer">
                     <button onclick="AddToCartClick(${item.id})" class="btn btn-danger w-100">Add to Cart</button>
                    </div>
                `;
                document.getElementById("main3").appendChild(card);
            }
        })
        
    }
    //count session
    var Count = 0;
    var CartItems = [];
    function GetCartCount(){
       document.getElementById("Count").innerHTML = CartItems.length;
    }
    function AddToCartClick(id){
        fetch(`http://fakestoreapi.com/products/${id}`)
        .then(function(response){
           return response.json();
        })
        .then(function(data){
            CartItems.push(data);
            alert(data.title + " Added to Cart");
            GetCartCount();
        })
    }
    function LoadCartItems(){
        document.getElementById("cartBody").innerHTML ="";
        for(var item of CartItems)
        {
            var tr = document.createElement("tr");
            var tdTitle = document.createElement("td");
            var tdPrice = document.createElement("td");
            var tdImage = document.createElement("td");
    
            tdTitle.innerHTML = item.title;
            tdPrice.innerHTML = item.price;
    
            var img = document.createElement("img");
            img.src=item.image;
            img.width="50";
            img.height="50";
    
            tdImage.appendChild(img);
    
            tr.appendChild(tdTitle);
            tr.appendChild(tdPrice);
            tr.appendChild(tdImage);
    
            document.getElementById("cartBody").appendChild(tr);
        }
    }