
$(document).ready(function () {
   
    //password validation
    var password = $("#password");
    password.blur(function () {
        $(".error").remove(); //remove previous error messages
        let passwordVal = password.val();
        if (passwordVal === "") { //empty username
            $(".word").after("<span class='error'>Password can not be empty!</span>");
        }
        else if (passwordVal.length < 7) { //if length of username is less than 7 is should throw error
            $(".word").after("<span class='error'>Password can not be less than 6 character</span>");

        }
    });


     //comfirm password validation
    var comfirmedPassword = $("#compass");
    comfirmedPassword.blur(function () {
        let passwordVal = $("#password").val();
        let comfirmedPasswordVal = comfirmedPassword.val();
        $(".error").remove(); //remove previous error messages

        if (comfirmedPasswordVal === "") { // empty password
            $(".word").after("<span class='error'>Comfirm Password can not be empty!</span>");
        }
        else if (comfirmedPasswordVal != passwordVal) { //checking password and comfirmed password
            $(".word").after("<span class='error'>Your Passwords Must Match!</span>");
        }
    })


    var submit = $("#submit");
    submit.click(function (e) {
        // e.preventDefault();
        console.log("am seeing you")
        var fName = $("#fName").val();
        var lName = $("#lName").val();
        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val()


        console.log("list item " + [lName, username, fName, email, password])
        console.log("am inside function");

        $.ajax({
            url: "http://localhost:3000/users",
            type: 'POST',
            dataType: 'json',
            data: {
                "first-name": fName,
                "last-name": lName,
                "email": email,
                "username": username,
                "password": password,
                "roleID": 1
            },
            error: function () {
                alert('error')
            },
            success: function (data) {
                alert(fName + " you have successfuly sign up")
                window.location.href = "./login.html";
            }
        });
    });
});