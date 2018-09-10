

$(".submit").on("click", function (event) {

    // var newInfo = {
    //     name: $("#fullname").val().trim(),
    //     address: $("#streetaddress").val().trim(),
    // };

    // console.log(newInfo)

    sessionStorage.setItem('fullname', JSON.stringify($("#fullname").val().trim()));
    sessionStorage.setItem('streetaddress', JSON.stringify($("#streetaddress").val().trim()));


    console.log(sessionStorage.getItem('fullname'));
    console.log(sessionStorage.getItem('streetaddress'));

    

    // $.ajax("/api/orders", {
    //     type: "POST",
    //     data: newOrder
    // }).then(
    //     function () {
    //         console.log(newOrder);
    //     }
    // )
});
