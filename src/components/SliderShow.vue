<template>
    <div id="carouselHome" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div v-for="(item, index) in carouselItems" :key="index" class="carousel-item active">
                <img :src="'../src/assets/img/' + item.img_carousel" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>{{ item.label_title }}</h5>
                    <p>{{ item.carousel_description }}</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselHome" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselHome" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>
  
  <script>
    export default {
        name: 'SliderShow',
        data () {
            return {
                carouselItems: [
                    {
                        img_carousel: 'rog2.webp',
                        label_title: 'Monitores ROG',
                        carousel_description: 'Los mejores monitores del mercado Asus ROG'
                    },
                    {
                        img_carousel: 'aorus.jpg',
                        label_title: 'Join the Fight',
                        carousel_description: 'Los mas potente del mercado'

                    },
                    {
                        img_carousel: 'msi.jpg',
                        label_title: 'Laptops MSI',
                        carousel_description: 'La mejor tecnologia en aRGB'
                    }

                ]
            }
        }
    };
    
  </script>
