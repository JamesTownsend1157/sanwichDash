
var newSandwich = [];

var newOrder = [];

$(".submit").on("click", function (event) {
    event.preventDefault();

    // var newOrder = {
    //     bread: $(".bread:checked").val().trim(),
    //     meat: $(".meat:checked").map(function () {
    //         return this.value;
    //     }).get().join(","),
    //     cheese: $(".cheese:checked").map(function () {
    //         return this.value;
    //     }).get().join(","),
    //     veggies: $(".veggies:checked").map(function () {
    //         return this.value;
    //     }).get().join(","),
    //     condiments: $(".condiments:checked").map(function () {
    //         return this.value;
    //     }).get().join(","),
    //     chips: $(".chips:checked").map(function () {
    //         return this.value;
    //     }).get().join(","),
    //     drinks: $(".drinks:checked").map(function () {
    //         return this.value;
    //     }).get().join(","),

    // };

    $.ajax("/api/orders", {
        type: "POST",
        data: newOrder
    }).then(
        function () {
            console.log(newOrder);
        }
    )
});

$(".addSandwich").on("click", function (event) {
    event.preventDefault();

    // if (newOrder.bread == undefined) {
    // newOrder.bread = $(".bread:checked").val().trim();
    // } else {newOrder.bread = newOrder.bread + $(".bread:checked").val().trim();}

    var newSandwich = {
            orderid: sessionStorage.getItem('orderid'),
            bread: $(".bread:checked").map(function () { return this.value; }).get().join(","),
            meat: $(".meat:checked").map(function () { return this.value; }).get().join(","),
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
            console.log(newSandwich);
        }
    )
});


$(".addSides").on("click", function (event) {
    event.preventDefault();


    var newSides = {
        orderid: sessionStorage.getItem('orderid'),
        chips: $(".chips:checked").map(function () {return this.value;}).get().join(","),
    }


    $.ajax("/api/sides", {
        type: "POST",
        data: newSides
    }).then(
        function () {
            console.log(newSides);
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
            console.log(newDrinks);
        }
    )
});
