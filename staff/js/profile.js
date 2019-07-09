$(document).ready(function () {
   

    //view user profile
    let profile = $(".profile")
    
    let id = sessionStorage.getItem("user");
    console.log("working edit " + id)
        $.ajax({
            method: 'GET',
            url: `http://localhost:3000/users?id=${id}`,
            dataType: 'json'
        }).done(function (data) {
            $.map(data, function (post, i) {
                var add = '<ul>';
                add += '<li> <b> ID: </b>' + post.id + '</li>';
                add += '<li> <b>First Name: </b>' + post.fName + '</li>';
                add += '<li> <b>Last Name: </b>' + post.lName + '</li>';
                add += '<li> <b>Email: </b>' + post.email + '</li>';
                add += '<li> <b>UserName: </b>' + post.username + '</li>';
                add += '<li> <b>Password: </b>' + post.password + '</li>';
                add += '</ul>';
                $('.modal-body').html(add);
                
            });
            
        });
    })

