$(document).ready(function () {

    function headingMove() {
        var heading1 = document.getElementById("animate1");
        var heading2 = document.getElementById("animate2");
        var pos = -400;
        var id = setInterval(frame, 5);
        function frame() {
            if (pos === 0) {
                clearInterval(id);
            } else {
                pos++;
                heading1.style.left = pos + 'px';
                heading2.style.right = pos + 'px';
            }
        }
        heading1.style.left = 0;
        heading1.style.right = 0;
        heading2.style.left = 0;
        heading2.style.right = 0;
    }

    headingMove();

    $(".portfolio-box").hover(function(){
        $(this).css("background", "rgb(4, 25, 29)");
        }, function(){
        $(this).css("background", "rgba(0, 0, 0, 0.6)");
      });

    // var imgTag = '<img class="card-img rounded-0 img-fluid p-0" src="images/' + imgName + '.jpg"></a>'

      $(".featured").hover(function(){
        $(this).addClass("card-img-text");
        var name = $(this).attr("value");
        $(this).text(name);
        }, function(){
        $(this).removeClass("card-img-text");
        $(this).empty();
      });
    });