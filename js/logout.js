
$(document).ready(function () {
var logout = $("#logout")
    logout.click(function (e) {
        alert("Thanks for your time")
        sessionStorage.removeItem("user");
        sessionStorage.clear();
        window.location.href = "../index.html";  
    })
})
