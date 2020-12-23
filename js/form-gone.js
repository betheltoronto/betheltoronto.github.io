var submitted=false;

$('#contactForm').on('submit', function(e) {
    $('#contactForm *').fadeOut(1000);
    $('#contactForm').prepend('Message sent.  Thanks!');
});