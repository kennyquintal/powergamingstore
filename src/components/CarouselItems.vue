<template>
    <div id="carouselProductos" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div v-for="(item, index) in cardProduct" :key="index" class="carousel-item active">
                <div class="card" style="width: 18rem;">
                    <div class="img-wrapper"><img :src="'../assets/img/' + item.img_product" class="d-block w-100" alt="..."> </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ item.producto_title }}</h5>
                        <a href="#" class="btn btn-primary">Agregar <font-awesome-icon :icon="['fas', 'cart-shopping']" /></a>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselProductos" data-bs-slide="prev">
            <font-awesome-icon :icon="['fas', 'caret-left']" size="2xl" />
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselProductos" data-bs-slide="next">
            <font-awesome-icon :icon="['fas', 'caret-right']" size="2xl" />
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'CarouselItems',
        data() {
            return {
                cardProduct: [
                    {
                        url_product: '',
                        producto_title: ''
                    },
                    {
                        url_product: '',
                        producto_title: ''
                    },
                    {
                        url_product: '',
                        producto_title: ''
                    },
                    {
                        url_product: '',
                        producto_title: ''
                    }
                ]
            }
        },
        mounted() {
            const carousel = document.querySelector('#carouselProductos');
            const carouselItems = carousel.querySelectorAll('.carousel-item');
            let currentItem = 0;
            
            // Muestra el siguiente elemento del carrusel
            const showNextItem = () => {
                carouselItems[currentItem].classList.remove('active');
                currentItem = (currentItem + 1) % carouselItems.length;
                carouselItems[currentItem].classList.add('active');
            }
            
            // Muestra el elemento anterior del carrusel
            const showPreviousItem = () => {
                carouselItems[currentItem].classList.remove('active');
                currentItem = (currentItem - 1 + carouselItems.length) % carouselItems.length;
                carouselItems[currentItem].classList.add('active');
            }
            
            // Agrega eventos para los botones de control
            const prevButton = carousel.querySelector('.carousel-control-prev');
            const nextButton = carousel.querySelector('.carousel-control-next');
            prevButton.addEventListener('click', showPreviousItem);
            nextButton.addEventListener('click', showNextItem);
            
            // Inicia el carrusel
            carouselItems[currentItem].classList.add('active');
            setInterval(showNextItem, 3000); // Cambia de elemento cada 3 segundos
        }
    }
</script>

<style scoped>
@import url('../assets/css/main.css');
    .carousel-inner {
        padding: 1em;
    }
    .card {
        margin: 0 .7em;
        border: none;
    }
    .carousel-control-prev,
    .carousel-control-next {
        max-height: 7vh;
        max-width: 7vh;
        background-color: var(--bg-navbar);
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
    }
    .carousel-indicators {
        top: 100%;
    }
    @media (min-width: 768px) {
        .carousel-item {
            margin-right: 0;
            flex: 0 0 33.333333%;
            display: inline-block;
        }
        .carousel-inner {
            display: flex;
        }
    }
    .card .img-wrapper {
        max-width: 100%;
        min-height: 13em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card img {
        max-height: 100%;
    }
    @media (max-width: 767px) {
        .card .img-wrapper {
            height: 17em;
        }
    }
</style>