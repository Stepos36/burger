$(function() {
    $(".change-status").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newstate");
    
        var newDevourState = {
          devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevourState
        }).then(
          function() {
            console.log("changed state to", newDevour);
            location.reload();
          }
        );
      });

    $(".create-form").on("submit", function(event) {
      event.preventDefault();

      var newBurger = {
        name: $("#ca").val().trim(),
        devoured: false
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });
  