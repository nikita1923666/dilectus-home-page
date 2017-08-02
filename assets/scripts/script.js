$(function () {
    var images = $('.circle');

    var els = [
        {r:5, top: 100, left: 23},
        {r: 20, top: 300, left: 150}
    ];



    images.mouseenter(function () {
        var img = $(this);
        img.stop();
        var scrollY = img.height() * 0.05;
        var scrollX = img.width() * 0.05;
        img.animate({zoom: '110%', top: -scrollY, left: -scrollX});
    });
    images.mouseleave(function () {
        var img = $(this);
        img.stop();
        img.animate({zoom: '100%', top:0, left:0});
    });

});