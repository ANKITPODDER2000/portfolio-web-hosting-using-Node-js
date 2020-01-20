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


/*===============================Image Handeling=============================*/
$('.container .pages .item.design div.container-design .menu-design-item .design-item .about-img').click(function () {
    $('.img-show img').attr("src", $(this).siblings().attr("src"));
    $('.img-show').fadeIn(1000);
    $('.img-show').click(() => {
        $(".img-show").fadeOut(1000);
    })
})
