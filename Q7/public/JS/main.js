$(document).ready(function () {


    $.ajax({
        type: "GET",
        url: "https://reqres.in/api/users?page=1",

        success: function (user) {
            let image = $(".card-img-top")
            let name = $(".card-title")
            let emails = $(".card-text")



            $(".btn-primary").on('click', (e) => {
                let id = e.target.id - 1;
                const profileData = user.data[id];
                console.log(profileData);
                window.open('./HTML/profile.html', 'window name', 'window settings');

                $.ajax({
                    data: profileData,
                    url: '/user/getProfile',
                    method: 'POST',
                    success: function (data) {
                        console.log(data);
                    },
                    error: function (err) {
                        console.log('error');
                    }
                })
            })


            for (let i = 0; i < user.data.length; i++) {
                image[i].src = user.data[i].avatar
                emails[i].innerHTML = user.data[i].email;
                name[i].innerHTML = user.data[i].first_name + " " + user.data[i].last_name;

            }



        }
    });



});


