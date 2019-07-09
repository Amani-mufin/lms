
$(document).ready(function () {
    var id = sessionStorage.getItem("user");
    getAllLeave(id)
    //get all leave related to a staff
    function getAllLeave(id) {
        $.ajax({
            method: 'GET',
            url: `http://localhost:3000/leaves`,
            dataType: 'json'
        }).done(function (data) {
            $.map(data, function (post, i) {

                var add = '<tr>';
                add += '<td>' + post.id + '</td>';
                add += '<td>' + post.type + '</td>';
                add += '<td>' + post.reason + '</td>';
                add += '<td>' + post.status + '</td>';
                add += '<td>' + '<button type="button"  <a href="#" id="' + post.id + '" class="btn viewItem btn-primary" data-toggle="modal" data-target="#exampleModal">VIEW</button></a> </td>';
                add += '<td>' + '<button type="button"  <a href="#" id="' + post.id + '" class="btn approve btn-secondary">Approve</button></a> </td>';
                add += '<td>' + '<button   <a href="#" id="' + post.id + '" class="btn deleteItem btn-danger">DELETE</button></a> </td>';
                add += '</tr>';

                $('table tbody').append(add);
            });
            if (data.length < 1) {
                $("p").append("You don't have any leave record")
            }
        });
    }

    //delete single item from database
    $(document).on("click", ".deleteItem", function (e) {
        e.preventDefault();
        var id = $(this).attr("id")
        $.ajax({
            url: 'http://localhost:3000/leaves/' + id,
            type: 'DELETE',
            error: function () {
                alert('oopp!.. error something when wrong')
            },
            success: function () {
                alert('done! leave deleted')
                window.location.href = "./view-leave.html"
            }
        });
    })

    //view single leave
    $(document).on("click", ".viewItem", function (e) {
        e.preventDefault();
        var ten = $(this).attr("id")
        console.log("working edit " + id)
        $.ajax({
            method: 'GET',
            url: `http://localhost:3000/leaves?id=${ten}`,
            dataType: 'json'
        }).done(function (data) {

            $.map(data, function (post) {
                var add = '<ul>';
                add += '<li> <b> ID: </b>' + post.id + '</li>';
                add += '<li> <b>Type of Leave: </b>' + post.type + '</li>';
                add += '<li> <b>Reason for Leave: </b>' + post.reason + '</li>';
                add += '<li> <b>Start Date: </b>' + post.startDate + '</li>';
                add += '<li> <b>End Date: </b>' + post.endDate + '</li>';
                add += '<li> <b>State: </b>' + post.status + '</li>';
                add += '</ul>';
                $('.modal-body').html(add);
            });

        });
    })

    //approve leave
    $(document).on("click", ".approve", function (e) {
        e.preventDefault();
        var ten = $(this).attr("id")
        $.ajax({
            method: 'GET',
            url: `http://localhost:3000/leaves?id=${ten}`,
            dataType: 'json'
        }).done(function (data) {
            $.map(data, function (post) {
                $.ajax({
                    url: "http://localhost:3000/leaves/" + ten,
                    type: 'PUT',
                    dataType: 'json',
                    data: {
                        "type": post.type,
                        "reason": post.reason,
                        "startDate": post.startDate,
                        "endDate": post.endDate,
                        "userID": post.userID,
                        "status": "Approved"
                    },
                    error: function () {
                        alert('Oops! something wrong happen')
                    },
                    success: function (data) {
                        alert(" You have successfuly Approve leave")
                    }
                });
            });
        });
    });

});
