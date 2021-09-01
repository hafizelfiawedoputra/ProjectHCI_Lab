$(document).ready(function () {
    var currentPosition = 0;
    var slideWidth = 100;
    var slides = $('.slide');
    var numberOfSlides = slides.length;
    var interval = "";

    $('.banner-container').css('overflow', 'hidden');

    for(i = 0; i < numberOfSlides; i++){
        $('.dot-container').append("<span class='slideshow-dot' id='slide-dot" + i + "'></span>")
    }
    
    slides
        .wrapAll('<div id="slideInner"></div>')
        .css({
            'float': 'left',
            'width': slideWidth + 'vw'
        });

    $('#slideInner').css('width', slideWidth * numberOfSlides + 'vw');

    $('.banner')
        .prepend('<a class="control" id="leftControl">&#10094;</a>')
        .append('<a class="control" id="rightControl">&#10095;</a>');

    manageControls(currentPosition);
    
    autoSlide();

    $('.control')
        .bind('click', function () {
            currentPosition = ($(this).attr('id') == 'rightControl')
                ? currentPosition + 1 : currentPosition - 1;

            RemoveInterval();
                
            manageControls(currentPosition);
            $('#slideInner').animate({
                'marginLeft': slideWidth * (-currentPosition) + 'vw'
            });
            
            autoSlide();
        });

    $('span.slideshow-dot').click(function(){
        var dotId = $(this).attr('id');
        var currentPositionString = dotId.replace('slide-dot','');
        
        currentPosition = parseInt(currentPositionString);

        RemoveInterval();

        manageControls(currentPosition);
        $('#slideInner').animate({
            'marginLeft': slideWidth * (-currentPosition) + 'vw'
        });

        autoSlide();
    });

    function autoSlide(){
        
        interval = window.setInterval(function(){
            currentPosition++;
            manageControls(currentPosition);
    
            $('#slideInner').animate({
                'marginLeft': slideWidth * (-currentPosition) + 'vw'
            });
       
           }, 3000);
    }
    
   
    function RemoveInterval() {
        clearInterval(interval);
    }

    
    // manageControls
    function manageControls(position) {
        var currentDotVar = "#slide-dot" + position;
        $(currentDotVar).addClass(" active");

        for(i = 0; i < numberOfSlides; i++){
            if(position != i){
                $("#slide-dot" + i).removeClass("active");
            }
        }

        if (position == 0-1) { 
            currentPosition = numberOfSlides-1;
            manageControls(currentPosition);
        }
        if (position == numberOfSlides) { 
            currentPosition = 0;
            manageControls(currentPosition);
        }
    }
});