<template>
    <header>
        <div class="blue-bar">
            <div class="container-navbar-blue">
                <div class="row2">
                    <ContactoBar></ContactoBar>
                </div>
            </div>
        </div> 

        <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="/">
            <LogoBar></LogoBar>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <DropDowns></DropDowns>
                <li class="nav-item">
                    <a class="nav-link" href="#">Servicios</a>
                </li>

                &nbsp;&nbsp;
                            
                <li class="nav-item">
                    <SearchBar></SearchBar>
                </li>

                &nbsp;

                <li class="nav-item">
                    <ShoppingCart></ShoppingCart>
                </li>
            </ul>
          </div>
        </div>
      </nav>

    </header>
</template>

<script>
import ContactoBar from '../components/ContactoBar.vue';
import DropDowns from '../components/DropDowns.vue';
import LogoBar from '../components/icons/LogoBar.vue';
import SearchBar from '../components/icons/SearchBar.vue';
import ShoppingCart from '../components/icons/ShoppingCart.vue';


    export default {
        name: 'NavbarView',
        components: {
            ContactoBar,
            DropDowns,
            LogoBar,
            SearchBar,
            ShoppingCart
        }
    }
</script>
    
<style scoped>
    @import url('../assets/css/main.css');
</style>