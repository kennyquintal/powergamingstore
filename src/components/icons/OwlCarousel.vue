<template>
    <head>
        <link rel="stylesheet" href="src/owlcarousel/owl.carousel.min.css">
        <link rel="stylesheet" href="src/owlcarousel/owl.theme.default.min.css">
    </head>

    <div class="owl-carousel owl-theme">
        <slot name="carousel"></slot>
    </div>
</template>

<script>
    export default {
    name: "OwlCarousel",
    mounted() {
        var owl = $(".owl-carousel");
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            navText: [
                '<i class="bi bi-caret-left-fill"></i>',
                '<i class="bi bi-caret-right-fill"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1000: {
                    items: 4
                },
                1366: {
                    items: 5
                }
            }
        });
        $(".play").on("click", function () {
            owl.trigger("play.owl.autoplay", [1000]);
        });
        $(".stop").on("click", function () {
            owl.trigger("stop.owl.autoplay");
        });
    }
}
</script>

<style scoped>
    .owl-carousel {
        padding-top: 1em;
    }
</style>