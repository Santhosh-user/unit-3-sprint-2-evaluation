

    
function orderPlace () {
    var a = setTimeout (function(){
        alert("Your order is accepted")
        clearTimeout(a)
    }, 3000)

    var b = setTimeout (function(){
        alert("Your order is being cooked")
        clearTimeout(b)
    }, 8000)


    var c = setTimeout (function(){
        alert("Your order is ready")
        clearTimeout(c)
    }, 10000)

    var d = setTimeout (function(){
        alert("Order out for delivery")
        clearTimeout(d)
    }, 12000)

    var e = setTimeout (function(){
        alert("Order delivered")
        clearTimeout(e)
    }, 14000)
}

