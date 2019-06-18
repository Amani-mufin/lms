
$(document).ready(function () {
    var id = sessionStorage.getItem("user");
    console.log("normar"+id)
    getAllLeave(id)
    //get all leave related to a staff
    function getAllLeave(id){
      $.ajax({
        method: 'GET',
        url: `http://localhost:3000/leaves?userID=${id}`,
        dataType: 'json'
      }).done(function (data) {
        $.map(data, function (post, i) {
    
          var add = '<tr>';
          add += '<td>' + post.id + '</td>';
          add += '<td>' + post.type + '</td>';
          add += '<td>' + post.reason + '</td>';
          add += '<td>' + post.startDate + '</td>';
          add += '<td>' + post.endDate + '</td>';
          add += '<td>' + post.status + '</td>';
          add += '<td>' + `<button  class="btn  btn-warning">Edit</button>` + '</td>';
          add += '<td>' + '<button   <a href="#" id="' + post.id + '" class="btn deleteItem btn-danger">DELETE</button></a> </td>';
          add += '</tr>';
    
          $('table tbody').append(add);
        });
        if (data.length < 1) {
          $("p").append("You don't have any leave record")
        }
      });
    }
  
    //delet item from database
        $(document).on("click", ".deleteItem", function (e) {
          e.preventDefault();
          var id = $(this).attr("id")
          $.ajax({
            url: 'http://localhost:3000/leaves/'+id,
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
  });
  