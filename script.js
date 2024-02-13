$(document).ready(function() {
    $('#heart12').click(function() {
        $('#heart12').fadeOut('slow', function() {
            setTimeout(function() {
                window.location.href = 'letter.html';
            }, 500);
        })

        

        
    });
});

