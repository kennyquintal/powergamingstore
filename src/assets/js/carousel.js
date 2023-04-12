import $ from 'jquery'
import * as bootstrap from 'bootstrap';

export default function(selector) {
    var multipleCardCarousel = document.querySelector(
        "#carouselProductos"
    );
    if (window.matchMedia("(min-width: 768px)").matches) {
        var carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false,
        });
        var carouselWidth = $(".carousel-inner")[0].scrollWidth;
        var cardWidth = $(".carousel-item").width();
        var scrollPosition = 0;
        $("#carouselProductos .carousel-control-next").on("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
            scrollPosition += cardWidth;
            $("#carouselProductos .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
            );
        }
        });
        $("#carouselProductos .carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
            scrollPosition -= cardWidth;
            $("#carouselProductos .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
            );
        }
        });
    } else {
        $(multipleCardCarousel).addClass("slide");
    }
}