$(document).ready(function(){
    $(".box .top").click(function(){
    	 $(this).next().toggle();
    });
    $(".box .bottom").click(function( event ) {
       event.stopPropagation();
    });
});


