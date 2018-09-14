var twilio = require('twilio');
var total = 0;

var accountSid = 'AC8441f46328c29dbef2ee07d0bb7dae0f'; // Your Account SID from www.twilio.com/console
var authToken = 'your_auth_token';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accoAC8441f46328c29dbef2ee07d0bb7dae0funtSid, authd03f99937a5e17f622bc4ab1c0208685Token);



$(".submit").on("click", function (event) {
    // event.preventDefault();

    var customerTotal = {
        orderid: sessionStorage.getItem('orderid'),
        total: total

    }

    $.ajax("/api/total", {
        type: "POST",
        data: customerTotal
    }).then(
        function () {
            client.messages.create({
                body: 'Hello from Node',
                to: '+18505446234',  // Text this number
                from: '+13216078227' // From a valid Twilio number
            })
            .then((message) => console.log(message.sid));        }
    )  
});

$(".addSandwich").on("click", function (event) {
    event.preventDefault();

    // if (newOrder.bread == undefined) {
    // newOrder.bread = $(".bread:checked").val().trim();
    // } else {newOrder.bread = newOrder.bread + $(".bread:checked").val().trim();}

    var newSandwich = {
            orderid: sessionStorage.getItem('orderid'),
            type: $(".type:checked").map(function () { return this.value; }).get().join(","),
            bread: $(".bread:checked").map(function () { return this.value; }).get().join(","),
            cheese: $(".cheese:checked").map(function () { return this.value; }).get().join(","),
            veggies: $(".veggies:checked").map(function () { return this.value; }).get().join(","),
            condiments: $(".condiments:checked").map(function () { return this.value; }).get().join(","),
    }

    

    

    // newOrder.bread = newOrder.bread + $(".bread:checked").val().trim();
    // newOrder.meat = $(".meat:checked").map(function () { return this.value; }).get().join(",");
    // newOrder.cheese = $(".cheese:checked").map(function () { return this.value; }).get().join(",");
    // newOrder.veggies = $(".veggies:checked").map(function () { return this.value; }).get().join(",");
    // newOrder.condiments = $(".condiments:checked").map(function () { return this.value; }).get().join(",");



  


    $.ajax("/api/sandwiches", {
        type: "POST",
        data: newSandwich
    }).then(
        function () {

                if (newSandwich) {
                    $("#order-to-table").append( $('<tr><td class="order-font">' + newSandwich.type + '</td><td class="order-font">' + '$5.00' + '</td></tr>'));
                    total = total + 5;
                    $("#total").text( 'Total: $' + total + '.00');
                    console.log(total);

                }
        }
    )
});


$(".addSides").on("click", function (event) {
    event.preventDefault();


    var newSides = {
        orderid: sessionStorage.getItem('orderid'),
        sides: $(".sides:checked").map(function () {return this.value;}).get().join(","),
    }


    $.ajax("/api/sides", {
        type: "POST",
        data: newSides
    }).then(
        function () {
            if (newSides) {
                    $("#order-to-table").append( $('<tr><td class="order-font">' + newSides.sides + '</td><td class="order-font">' + '$1.00' + '</td></tr>'));
                    total = total + 1;
                    $("#total").text( 'Total: $' + total + '.00');
                    console.log(total);

            }
        }
    )
});


$(".addDrinks").on("click", function (event) {
    event.preventDefault();


    var newDrinks = {
        orderid: sessionStorage.getItem('orderid'),
        drinks: $(".drinks:checked").map(function () {return this.value;}).get().join(",")
}

    $.ajax("/api/drinks", {
        type: "POST",
        data: newDrinks
    }).then(
        function () {
            if (newDrinks) {
                $("#order-to-table").append( $('<tr><td class="order-font">' + newDrinks.drinks + '</td><td class="order-font">' + '$1.00' + '</td></tr>'));
                total = total + 1;
                $("#total").text( 'Total: $' + total + '.00');
                console.log(total);
            }
        }
    )
});

//modal

//on show
$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('Congrats ' + sessionStorage.getItem('name'))
    modal.find('.modal-body').text("Your order has been recieved and you will recieve a conformation text shortly")
  })

// on hide
$('#exampleModal').on('hidden.bs.modal', function (event) {
    window.location.href = "/";

})
