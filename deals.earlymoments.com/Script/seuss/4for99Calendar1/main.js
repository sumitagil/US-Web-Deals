


$(document).ready(function () {

    //pretty photo section
    var totalItems = $('.item').length;
    var currentIndex = $('div.active').index() + 1;
    console.log(totalItems + " /" + currentIndex);

    $('.num').html('' + currentIndex + '/' + totalItems + '');

    $('#myCarousel').carousel({
        interval: 2000
    });

    $('#myCarousel').bind('slide.bs.carousel', function () {
        currentIndex = $('div.active').index() + 1;
        $('.num').html('' + currentIndex + '/' + totalItems + '');
        console.log(currentIndex);
    });


    $('#playButton').hide();
    $('#pauseButton').show();
    //pause play on click
    $('#playButton').click(function () {
        $('#myCarousel').carousel('cycle');
        $('#pauseButton').show();
        $('#playButton').hide();
    });

    $('#pauseButton').click(function () {
        $('#myCarousel').carousel('pause');
        $('#pauseButton').hide();
        $('#playButton').show();
    });
    //ends pretty photo section


    //for the cols interchange		
    enquire.register("screen and (max-width:767px)", {
        match: function () {
            $('#headerImage').attr("src", "/Images/seuss/4for99Calendar1/mobile_headerfall.png");
            $('#step1').attr("src", "/Images/seuss/4for99Calendar1/step1.png");

        },
        unmatch: function () {
            $('#headerImage').attr("src", "/Images/seuss/4for99Calendar1/top.gif");
            $('#step1').attr("src", "/Images/seuss/4for99Calendar1/step1.png");
        }
    })

    //end of interchange

});
