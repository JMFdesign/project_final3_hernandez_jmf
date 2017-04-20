$(document).ready(function () {
    $('iframe').addClass('iframe');
});

$(document).ready(function () {
    $('img').mouseenter(function () {
        $(this).closest('img').css('filter', 'grayscale(100%)');
        $(this).closest('article').append('<div>You hovered over the image</div>');
    });
});
