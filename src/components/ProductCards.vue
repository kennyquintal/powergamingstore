<template>
        <div v-for="(item, index) in cardProduct" :key="index">
            <div class="card">
                <div class="img-wrapper"><img :src="'../src/assets/img/' + item.url_product" class="d-block w-100" alt="..."> </div>
                <div class="card-body">
                    <div class="overflow-auto">
                        <h5 class="card-title"><a href="">{{ item.producto_title }}</a></h5>
                    </div>
                    <p class="sku">{{ item.sku }}</p>
                    <span class="badge bg-badge position-relative">
                        Existencia 
                        <span class="badge rounded-pill bg-danger">
                            {{ item.stock }}
                        </span>
                    </span>
                    <div class="price">
                        <div class="offer-price">
                            <div v-if="item.offer_price" class="offer">
                                <span class="text-muted text-decoration-line-through">
                                    ${{ item.price }}<sup v-if="item.price">.{{ item.sup_price }}</sup>
                                </span>
                                <span v-if="item.price !==''">
                                    <p>&nbsp; - &nbsp;</p>
                                </span>
                                <span style="color: red;">${{ item.offer_price }}.<sup>{{ item.sup_offer_price }}</sup></span>
                            </div>
                            <span v-else>${{ item.price }}.<sup>{{ item.sup_price }}</sup></span>
                        </div>
                    </div>
                    <AddCart></AddCart>
                </div>
            </div>
        </div>
</template>

<script>
import AddCart from './icons/AddCart.vue';

    export default {
        name: 'ProductCards',
        components: {
            AddCart
        },
        data() {
            return {
                cardProduct: [
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
                ]
            }
        }
    }
</script>

<style scoped>
@import url('../assets/css/main.css');
    
    .card {
        margin: 0 0.5em;
        box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
        border: none;
    }

    .card .img-wrapper {
        max-width: 100%;
        display: block;
        justify-content: center;
        align-items: center;
    }
    .sku {
        color: grey;
    }
    .overflow-auto {
        width: 100%;
        height: 70px;
    }
    .badge {
        transform: scale(1.1);
        margin: .5em 0 .5em;
    }
    .bg-badge {
        background-color: var(--bg-stock);
        max-height: 20px;
        padding: 0;
        font-size: .5rem;
        max-width: 80px;
        min-width: 70px;
    }

    .bg-danger {
        font-size: .5rem;
        align-items: center;
    }

    @media (min-width: 768px) {
        .card {
            padding: 5px;
            height: 350px;
            padding-bottom: .5em;
        }
        .card img {
            height: 130px;
            max-width: 100%;
        }
        .sku {
            font-size: 10px;
        }
        .card .img-wrapper {
            width: 100%;
            height: 130px !important;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .overflow-auto {
            width: 100%;
            height: 70px;
        }
    }
    
    @media (max-width: 767px) {
        .card {
            height: 350px;
        }
        .card .img-wrapper {
            height: 17em;
        }
        .card img {
            max-height: 45%;
            max-width: 45%;
        }
        .sku {
            font-size: 8px;
        }
        .card .img-wrapper {
            padding: 5px;
            max-width: 100%;
            height: 70%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .price {
        justify-content: center;
        max-height: 20px;
    }

    sup {
        font-size: .6em;
    }

    .offer-price {
        display: inline-block;
        justify-content: center;
    }
    .offer {
        display: flex;
    }
</style>