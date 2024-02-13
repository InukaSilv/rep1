$(document).ready(function() {
    $('#heart12').click(function() {
        $('#heart1').css({
            animationName: 'fadeOut',
            animationDuration: '0.5s'
        });

        setTimeout(function() {
            window.location.href = 'letter.html';
        }, 1000);
        // Load letter.html content
        
        
    });
});


