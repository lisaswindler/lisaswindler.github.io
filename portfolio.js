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
        $(this).css("background", "rgb(6, 53, 48)");
        }, function(){
        $(this).css("background", "rgba(0, 0, 0, 0.5)");
      });

    // var imgTag = '<img class="card-img rounded-0 img-fluid p-0" src="images/' + imgName + '.jpg"></a>'

      $(".featured-sea").hover(function(){
        var newText = this.name;
        $(this).addClass("featured-text");
        $(this).html(newText);
        }, function(){
        $(this).removeClass("featured-text");
        $(this).html('<a class="featured-sea" name="Hangman-atee: Word Guess Game" href="https://lisaswindler.github.io/Word-Guess-Game/"target="_blank"><img class="card-img rounded-0 img-fluid p-0" src="images/sea-turtle.jpg"></a>');
      });

      $(".featured-train").hover(function(){
        var newText = this.name;
        $(this).addClass("featured-text");
        $(this).html(newText);
        }, function(){
        $(this).removeClass("featured-text");
        $(this).html('<a class="featured-train" name="Train Time" href="https://lisaswindler.github.io/train-time"target="_blank"><img class="featured-img card-img rounded-0 img-fluid p-0" src="images/hogwarts_express.jpg"></a>');
      });

      $(".featured-plant").hover(function(){
        var newText = this.name;
        $(this).addClass("featured-text");
        $(this).html(newText);
        }, function(){
        $(this).removeClass("featured-text");
        $(this).html('<a class="featured-plant" name="Hike & Forage Utah" href="https://lindseypaluso.github.io/project1/"target="_blank"><img class="featured-img card-img rounded-0 img-fluid p-0" src="images/fiddlehead.jpg"></a>');
      });

    });