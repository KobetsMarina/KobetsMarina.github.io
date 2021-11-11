$('.button-js').click((e) => {
    $('.nav-js').toggleClass('active');
    $('.button-js').toggleClass('active');
})




$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('.page-header').addClass('black');
    } else {
        $('.page-header').removeClass('black');
    }
})



var lastId,
    topMenu = $("#mainNav"),
    topMenuHeight = topMenu.outerHeight() + 1,

    menuItems = topMenu.find(".main-nav__link"),
    scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

menuItems.click(function(e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 850);
    e.preventDefault();
});


$(window).scroll(function() {

    var fromTop = $(this).scrollTop() + topMenuHeight;

    var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop)
            return this;
    });

    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;

        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
});



document.addEventListener("scroll", handleScroll);
// get a reference to our predefined button
var scrollToTopBtn = document.querySelector(".vector");

function handleScroll() {
    var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var GOLDEN_RATIO = 0.5;

    if ((document.documentElement.scrollTop / scrollableHeight) > GOLDEN_RATIO) {
        //show button
        if (!scrollToTopBtn.classList.contains("showScrollBtn"))
            scrollToTopBtn.classList.add("showScrollBtn")
    } else {
        //hide button
        if (scrollToTopBtn.classList.contains("showScrollBtn"))
            scrollToTopBtn.classList.remove("showScrollBtn")
    }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}