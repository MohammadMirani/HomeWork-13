$(document).ready(function () {


    $.ajax({
        method: "POST",
        url: "/user/profile",
        success: function (response) {
            console.log(response);

            let image = $(".card-img-top")
            let id = $(".card-title");
            let fName = $('.card-text1');
            let lName = $('.card-text2')
            let emaile = $('.card-text3')

            image[0].src = response.avatar;
            id[0].innerHTML = "ID: " + response.id;
            fName[0].innerHTML = "First Name: " + response.first_name;
            lName[0].innerHTML = "Last Name: " + response.last_name;
            emaile[0].innerHTML = "Email: " + response.email; 

        }
    });





});