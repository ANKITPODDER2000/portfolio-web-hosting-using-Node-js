document.querySelector('.red').addEventListener("click", function () {
    document.documentElement.style.setProperty('--col', 'red');
})
document.querySelector('.blue').addEventListener("click", function () {
    document.documentElement.style.setProperty('--col', 'rgb(0, 118, 253)');
})
document.querySelector('.yellow').addEventListener("click", function () {
    document.documentElement.style.setProperty('--col', 'rgba(255, 187, 0, 0.993)');
})
document.querySelector('.purple').addEventListener("click", function () {
    document.documentElement.style.setProperty('--col', 'rgb(255, 0, 136)');
})

$('.settings div.set').click(function(){
	$('.settings div').toggleClass('active');
})



setInterval(function () {
    if (window.innerWidth < 1000) {
        $('.pages').css("height", "100vh");
    }
});