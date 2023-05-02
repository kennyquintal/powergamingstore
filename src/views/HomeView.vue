<template>
    <SliderShow></SliderShow>

    <div class="container text-center col-12">
        <TextBar :textTitle="'Ofertas del día'"></TextBar>
        <OwlCarousel>
            <template #carousel>
                <ProductCards :products="offer"></ProductCards>
            </template>
        </OwlCarousel>
        
        <TextBar :textTitle="'Destacados'"></TextBar>
        <OwlCarousel>
            <template #carousel>
                <ProductCards :products="destacados"></ProductCards>
            </template>
        </OwlCarousel>
        
        <section  class="d-none d-md-block">
            <TextBar :textTitle="'Ofertas Y Productos Nuevos'"></TextBar>
            <CardProductsGroup>
                <template #card-product-group>
                    <ProductCards :products="destacados"></ProductCards>
                </template>
            </CardProductsGroup>
        </section>
    </div>
</template>

<script>
import SliderShow from '../components/SliderShow.vue';
import TextBar from '../components/icons/TextBar.vue';
import ProductCards from '../components/ProductCards.vue';
import OwlCarousel from '../components/icons/OwlCarousel.vue';
import CardProductsGroup from '../components/CardProductsGroup.vue'

    export default {
        name: "HomeView",
        components: { 
            SliderShow,
            TextBar,
            ProductCards,
            OwlCarousel,
            CardProductsGroup
        },
        data() {
            return {
                offer: [
                    {
                        url_product: 'strix.jpg',
                        producto_title: 'Tarjeta de Video Asus RTX 4090 20Gb VRAM OC',
                        sku: 'ASUSS4090OC',
                        price: '40,999',
                        sup_price: '00',
                        offer_price: '',
                        sup_offer_price: '',
                        stock: '3'
                    },
                    {
                        url_product: 'xpg.jpg',
                        producto_title: 'Memoria RAM XPG D40 2x8Gb 2600MGHZ',
                        sku: 'XPGRAM2600MHZ',
                        price: '1,499',
                        sup_price: '00',
                        offer_price: '',
                        sup_offer_price: '',
                        stock: '7'
                    },
                    {
                        url_product: 'msi2.jpg',
                        producto_title: 'Laptop MSI Vengeance 16GB Ram GTX 1650',
                        sku: 'MSI281923231',
                        price: '30,499',
                        sup_price: '00',
                        offer_price: '25,499',
                        sup_offer_price: '00',
                        stock: '2'
                    },
                    {
                        url_product: 'rog4.jpg',
                        producto_title: 'Laptop ROG 16GB Ram Ryzen 9 5900H FullHD IPS',
                        sku: 'ROGLAP16R95000H',
                        price: '25,499',
                        sup_price: '00',
                        offer_price: '',
                        sup_offer_price: '',
                        stock: '3'
                    },
                    {
                        url_product: 'logi.jpg',
                        producto_title: 'Teclado Logitech k915 G Pro X Wireless',
                        sku: 'LOGIK915GPRO',
                        price: '2,999',
                        sup_price: '00',
                        offer_price: '',
                        sup_offer_price: '',
                        stock: '9'
                    },
                    {
                        url_product: 'amd.jpg',
                        producto_title: 'Procesador AMD Ryzen 7950x3D 7ma Gen',
                        sku: 'AMDR97950X',
                        price: '15,499',
                        sup_price: '00',
                        offer_price: '',
                        sup_offer_price: '',
                        stock: '99'
                    }
                ],
                destacados: [
                    {
                        url_product: 'gb3060.jpg',
                        producto_title: 'Tarjeta de Video Asus RTX 3060 12GB VRAM OC',
                        sku: 'ASUSS4090OC',
                        price: '12,999',
                        sup_price: '00',
                        offer_price: '10,999',
                        sup_offer_price: '00',
                        stock: '7'
                    },
                    {
                        url_product: 'msi4090.jpg',
                        producto_title: 'Tarjeta de Video MSI RTX 4090 Gaming X Trio 20GB OC aRGB',
                        sku: 'XPGRAM2600MHZ',
                        price: '53,999',
                        sup_price: '00',
                        offer_price: '',
                        sup_offer_price: '',
                        stock: '7'
                    },
                    {
                        url_product: 'msi2.jpg',
                        producto_title: 'Laptop MSI Vengeance 16GB Ram GTX 1650',
                        sku: 'MSI281923231',
                        price: '30,499',
                        sup_price: '00',
                        offer_price: '25,499',
                        sup_offer_price: '00',
                        stock: '2'
                    },
                    {
                        url_product: 'rog4.jpg',
                        producto_title: 'Laptop ROG 16GB Ram Ryzen 9 5900H FullHD IPS',
                        sku: 'ROGLAP16R95000H',
                        price: '25,499',
                        sup_price: '00',
                        offer_price: '',
                        sup_offer_price: '',
                        stock: '3'
                    },
                    {
                        url_product: 'logi.jpg',
                        producto_title: 'Teclado Logitech k915 G Pro X Wireless',
                        sku: 'LOGIK915GPRO',
                        price: '2,999',
                        sup_price: '00',
                        offer_price: '',
                        sup_offer_price: '',
                        stock: '9'
                    },
                    {
                        url_product: 'amd.jpg',
                        producto_title: 'Procesador AMD Ryzen 7950x3D 7ma Gen',
                        sku: 'AMDR97950X',
                        price: '15,499',
                        sup_price: '00',
                        offer_price: '',
                        sup_offer_price: '',
                        stock: '99'
                    },
                    {
                        url_product: 'strix.jpg',
                        producto_title: 'Tarjeta de Video Asus RTX 4090 20Gb VRAM OC',
                        sku: 'ASUSS4090OC',
                        price: '40,999',
                        sup_price: '00',
                        offer_price: '',
                        sup_offer_price: '',
                        stock: '3'
                    },
                    {
                        url_product: 'xpg.jpg',
                        producto_title: 'Memoria RAM XPG D40 2x8Gb 2600MGHZ',
                        sku: 'XPGRAM2600MHZ',
                        price: '1,499',
                        sup_price: '00',
                        offer_price: '',
                        sup_offer_price: '',
                        stock: '7'
                    },
                    {
                        url_product: 'gb6900xt.jpg',
                        producto_title: 'Tarjeta de Video Gigabyte 6900xt 16GB OC 4K',
                        sku: 'XPGRAM2600MHZ',
                        price: '1,499',
                        sup_price: '00',
                        offer_price: '',
                        sup_offer_price: '',
                        stock: '7'
                    },
                    {
                        url_product: 'pc6600.jpg',
                        producto_title: 'Tarjeta de Video PowerColor 6600 8GB OC 4K',
                        sku: 'XPGRAM2600MHZ',
                        price: '1,499',
                        sup_price: '00',
                        offer_price: '',
                        sup_offer_price: '',
                        stock: '7'
                    },
                    {
                        url_product: 'pl6500xt.webp',
                        producto_title: 'Tarjeta de Video Radeon Pulse 6500xt 6GB OC',
                        sku: 'XPGRAM2600MHZ',
                        price: '1,499',
                        sup_price: '00',
                        offer_price: '',
                        sup_offer_price: '',
                        stock: '7'
                    }
                ]
            }
        }
    }
</script>
