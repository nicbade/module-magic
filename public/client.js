$(document).ready(function() {

    $.ajax({
        method: "GET",
        url: '/balance',
        success: function(response) {
            $('body').append("<p>" + response + "</p>");
        }


    })
})