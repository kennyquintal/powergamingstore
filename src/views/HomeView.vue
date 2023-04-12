<template>
    <SliderShow></SliderShow>

    <div class="container text-center col-12">
        <TextBar :textTitle="'Ofertas del día'"></TextBar>
        <OwlCarousel>
            <ProductCards></ProductCards>
        </OwlCarousel>

        <TextBar :textTitle="'Destacados'"></TextBar>
        <OwlCarousel :cardItems="CarouselItems">
            <ProductCards></ProductCards>
        </OwlCarousel>

        <TextBar :textTitle="'Ofertas Y Productos Nuevos'"></TextBar>
    </div>
</template>

<script>
import SliderShow from '../components/SliderShow.vue';
import TextBar from '../components/icons/TextBar.vue';
import ProductCards from '../components/ProductCards.vue';
import OwlCarousel from '../components/icons/OwlCarousel.vue';

    export default {
        name: "HomeView",
        components: { 
            SliderShow,
            TextBar,
            ProductCards,
            OwlCarousel
        }
    }
</script>
