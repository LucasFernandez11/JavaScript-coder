$(()=>{
    // esconder el carrito

    $("#cart-items").slideUp();
    
    //abrir el carrito cuando clickeo
    $(".cart").on("click", function () {
        $("#cart-items").slideToggle();
        
    })


    //funcion para calcular la cantidad de productos en el carrito

    const itemsCarrito = ()=> {
        $("#items-basket").text(`( ${$("#list-item").children().length} )`)
    }

    //funcion para calcular el precio total de los productos agregados al carrito

    const precioTotal = ()=> {
        let precioTotal = 0;
        $(".eachPrice").each(function () {
            let precioItem = parseFloat($(this).text());
            precioTotal += precioItem;
        })
        $("#total-price").text(`$${precioTotal}`)
    }

    //agregar item cuando lo clikeamos

    $(".item").on("click", function () {
        //se abre el carrito
        $("#cart-items").slideDown();

        //buscamos los datos
        let nombre = $(this).find("h4").text();
        console.log(nombre);
        let precio = `<span class="eachPrice">${parseFloat($(this).find(".price").text())}</span>`;
        //boton para borrar
        let remove =`<button class="remove">X</button>`;

        $("#list-item").append(`<li>${nombre} - $${precio} ${remove}</li>`);
        itemsCarrito();
        
        //calcular el precio total

        precioTotal();

        //remover el producto

        $(".remove").on("click", function () {
            $(this).parent().remove();
            itemsCarrito();
            precioTotal();
            
        })
    })



})