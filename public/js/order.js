$(".submit").on("click", function (event) {
    event.preventDefault();

    var newOrder = {
        bread: $(".bread:checked").val().trim(),
        meat: $(".meat:checked").map(function () {
            return this.value;
        }).get().join(","),
        meat: $(".meat:checked").map(function () {
            return this.value;
        }).get().join(","),
        cheese: $(".cheese:checked").map(function () {
            return this.value;
        }).get().join(","),
        veggies: $(".veggies:checked").map(function () {
            return this.value;
        }).get().join(","),
        condiments: $(".condiments:checked").map(function () {
            return this.value;
        }).get().join(","),
        chips: $(".chips:checked").map(function () {
            return this.value;
        }).get().join(","),
        drinks: $(".drinks:checked").map(function () {
            return this.value;
        }).get().join(","),
        
    }
    


    console.log(newOrder);
})
