var id = sessionStorage.getItem("user");
if(id<1){
    window.location.href = "../login.html";
};

//logout
// $(document).ready(function () {
// var logout = $("#logout")
//     console.log("am good")
//     logout.click(function (e) {
//         alert("is working")
//         sessionStorage.removeItem("user");
//         sessionStorage.clear();
//         window.location.href = "./index.html";  
//     })
// })