function menui() {
    let url = "https://www.themealdb.com/api/json/v1/1/categories.php"

    async function getMenu() {
        try {
            let res = await fetch(url)
            let data = await res.json();
            let dishes = data.categories
            console.log(dishes)
            disDishes(dishes)
        }
        catch(err) {
            console.log("error:", err)
        }
    }


    var allDisplay = document.getElementById("allDisplay")

    var itemDiv = document.createElement("div")

   

    getMenu()

     function disDishes(c) {
         c.map(function(disDish){

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
            btn.textContent = "Add to cart"

            btn.addEventListener("click", function(){
                addCart(disDish)
            })


            

            itemDiv.append(name,img, desc, price,btn)

            allDisplay.append(itemDiv)


         
         })

         var items = document.querySelector("#nol").innerHTML="<p>Price is 1456</p>"
         

        
     }


}

menui()


function addCart(b) {
    var str =  JSON.parse(localStorage.getItem("ldish")) || [];
    

    str.push(b)
    
   localStorage.setItem("ldish", JSON.stringify(str))

 
   
}

