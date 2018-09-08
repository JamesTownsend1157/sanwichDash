

var newSandwich = {};
var newSides = {};
var newDrinks = {};
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
        data: newSandwich
    }).then(
        function () {
            console.log(newSandwich);
        }
    )
});

$(".addSandwich").on("click", function (event) {
    event.preventDefault();



    newSandwich.bread = $(".bread:checked").val().trim();
    newSandwich.meat = $(".meat:checked").map(function () { return this.value; }).get().join(",");
    newSandwich.cheese = $(".cheese:checked").map(function () { return this.value; }).get().join(",");
    newSandwich.veggies = $(".veggies:checked").map(function () { return this.value; }).get().join(",");
    newSandwich.condiments = $(".condiments:checked").map(function () { return this.value; }).get().join(",");

    $.ajax("/api/sandwiches", {
        type: "POST",
        data: newSandwich
    }).then(
        function () {
            console.log(newSandwich);
        }
    )
});


$(".addChips").on("click", function (event) {
    event.preventDefault();


    newSides.chips = $(".chips:checked").map(function () {return this.value;}).get().join(",");

    $.ajax("/api/Sides", {
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


    newDrinks.drinks = $(".drinks:checked").map(function () {
        return this.value;
    }).get().join(",")

    $.ajax("/api/Drinks", {
        type: "POST",
        data: newDrinks
    }).then(
        function () {
            console.log(newDrinks);
        }
    )
});
