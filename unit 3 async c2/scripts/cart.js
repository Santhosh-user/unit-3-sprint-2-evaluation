var allDisplay = document.getElementById("allDisplay")

var str = JSON.parse(localStorage.getItem("ldish"))

final(str)

console.log(str)

var allDisplay = document.getElementById("allDisplay")

var itemDiv = document.createElement("div")

   



     function final(str) {
         str.map(function(disDish){

            var itemDiv = document.createElement("div")

            itemDiv.setAttribute("id", "itemDiv")

            var name = document.createElement("div")

            name.textContent = "Name of dish: " + disDish.strCategory
            
            var img = document.createElement("img")

            img.src = disDish.strCategoryThumb

            var desc = document.createElement("div")

            desc.textContent = "Discription of Dish: "+ disDish.strCategoryDescription

            var price = document.createElement("div")

            price.textContent = "Price of Dish: "+  Math.floor(Math.random() * (500 - 400) + 400);

            var btn = document.createElement("button")
            btn.textContent = "Remove from cart"

            btn.addEventListener("click", function(){
                remove(disDish)
            })


            

            itemDiv.append(name,img, desc, price,btn)

            allDisplay.append(itemDiv)


         
         })

         function remove(e) {
             str.splice(e,1)
             localStorage.setItem("ldish",JSON.stringify(str))
             window.location.reload(true)
         }

         
         var items = document.querySelector("#nol").innerHTML="<p>Price is 1456</p>"

         
        
     }


