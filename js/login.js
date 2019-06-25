$(document).ready(() => {
    var submit = $("#submit");
  
    submit.click(function (e) {
      e.preventDefault()
      var userName = $("#username").val();
      var pass = $("#password").val();
      //console.log(pass)
  
      $.ajax({
        url: "http://localhost:3000/users",
        type: 'GET',
        error: function () {
          alert('error')
        },
        success: function (data) {
          console.log('done')
          data.map(user => {
            // console.log(user.username)
            if (user.username === userName && user.password == pass) {
              if (user.roleID == 1) {
                sessionStorage.setItem("user", user.id);
                return window.location.href = "./staff/home.html";
                
              }else{
                sessionStorage.setItem("user", user.id);
                window.location.href = "./management/home.html";
                
              }
            }
            return
        })
        let warn = $(".bg-warning")
        warn.append("Opps..! incorrect credentials, try again")
        // warn.remove();
        }
    }
    );
  
  
    })
  })