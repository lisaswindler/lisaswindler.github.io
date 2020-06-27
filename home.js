$(document).ready(function () {

      $(".featured").hover(function(){
        var name = $(this).attr("value");
        $(this).text(name);
        }, function(){
        $(this).empty();
      });
    });