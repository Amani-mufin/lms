var id = sessionStorage.getItem("user");
//redirect if is not a user or session has ended
if(id<1){
    window.location.href = "../login.html";
};
