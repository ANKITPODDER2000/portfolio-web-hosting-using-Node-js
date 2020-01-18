$('.menu-design-item').isotope({
    itemSelector: '.design-item',
    layoutMode: 'fitRows'
});
$('.container-design .menu-design ul li').click(function () {
    $('.container-design .menu-design ul li').removeClass("active");
    $(this).addClass("active");
    var s = $(this).attr('data-filter');
    console.log(s);
    $('.container-design .menu-design-item').isotope({
        filter: s,
    });
    return false;
});