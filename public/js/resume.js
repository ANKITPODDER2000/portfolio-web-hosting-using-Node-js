;$('.pages').isotope({
    itemSelector : '.item',
    layoutMode : 'fitRows'
});
$('.container .menu ul li').click(function (){
    $('.container .menu ul li').removeClass("active");
    $(this).addClass("active");
    var selector = $(this).attr('data-filter');
    $('.pages').isotope({
        filter: selector,
    });
    return false;
})


var a = document.querySelectorAll('.container .pages .item.resume .box2 .skills-it > div div.bar span');
for(var j=0;j<a.length+1;j++){
	var k = j+1;
	a[j].style.width = $('body > div.container > div.pages > div.item.resume > div.box2 > div.skills-it > div:nth-child('+k+') > div > span').attr('data-filter');
	console.log($('body > div.container > div.pages > div.item.resume > div.box2 > div.skills-it > div:nth-child('+k+') > div > span').attr('data-filter'),k);
}


//body > div.container > div.pages > div.item.resume > div.box2 > div.skills-it > div:nth-child(1) > div > span