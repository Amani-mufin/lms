$(document).ready(function () {


    var submit = $("#submit");

console.log("yeah just landed")
    var id = sessionStorage.getItem("user");

    submit.click(function (e) {
        e.preventDefault();
        var id = sessionStorage.getItem("user");
        console.log("am seeing you")
        var type = $("#type").val();
        var reason = $("#reason").val();
        var startDate = $("#start-date").val();
        var endDate = $("#end-date").val();

        console.log("list item " + [type, reason, startDate, endDate])
        console.log("am inside function");

        $.ajax({
            url: "http://localhost:3000/leaves",
            type: 'POST',
            dataType: 'json',
            data: {
                "type": type,
                "reason": reason,
                "startDate": startDate,
                "endDate": endDate,
                "userID": id,
                "status": "Not Approve"
            },
            error: function () {
                alert('error')
            },
            success: function (data) {
                alert(" you have successfuly sent leave for approval ")
            }
        });
    });
});