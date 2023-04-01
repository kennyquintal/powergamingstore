<template>
    <SliderShow></SliderShow>

    <div class="container text-center col-12">
        <TextBar></TextBar>
        <CarouselItems></CarouselItems>
    </div>
</template>

<script>
import SliderShow from '../components/SliderShow.vue';
import TextBar from '../components/icons/TextBar.vue';
import CarouselItems from '../components/CarouselItems.vue';

    export default {
        name: "HomeView",
        components: { 
            SliderShow,
            TextBar,
            CarouselItems
        }
    }
</script>