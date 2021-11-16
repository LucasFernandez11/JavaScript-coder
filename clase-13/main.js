$(()=>{
$("#show").on("click", function() {
    $("#box").show("slow");
})

$("#hiden").on("click", function () {
    $("#box").hide("fast");
})

$("toggle").on("click", function () {
    $("#box").toggle(4000, function () {
        console.log("termino de cargar")
    });    
})

$("#fadeIn").on("click", function () {
    $("box").fadeIn(3000), function () {
        $("h1").animate({
            "left": "200px",
            "opacity": 0.5
        }, "slow", function () {
            console.log("termino la animacion")
            
        })
    };
    
})
$("#fadeOut").on("click", function () {
    $("box").fadeOut(3000);
    
})


$("#slideDown").on("click", function () {
    $("#box").slideDown((3000));
})

$("#slideUp").on("click", function () {
    $("#box").slideUp((3000));
})
$("#slideToggle").on("click", function () {
    $("#box").slideToggle((3000));
})

// $("h1").css("propiedad", "valor")

$("#h1").css("color", "red")

//varios cambios a la vez

$("#h1").css({
    "color": "red",
    "font-size": "40px",
    "border-bottom": "3px solid #ccc"

})

//$("h1").animate(propiedades, duracion, callback)
$("h1").animate({
    "left": "200px",
    "opacity": 0.5
}, "slow", function () {
    console.log("termino la animacion");
    
})



})