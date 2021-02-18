
$(document).ready(function () {
    $('#check').on('click',(e)=>{
        const user = $('#user').val();
        // console.log(user);
        $.ajax({
            data : {user} ,
            url : '/user/getUser',
            method: 'POST',
            success: function (data) {
                console.log(data);
                console.log(2555);
            },
            error: function (err) {
               console.log('error');
            }
        })

    })
});
