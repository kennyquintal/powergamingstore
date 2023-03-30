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
          <a class="navbar-brand" href="index.html"><img class="logo" src="../assets/img/pgsico.png"/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <DropDowns></DropDowns>
            </ul>
          </div>
        </div>
      </nav>

    </header>
</template>

<script>
import ContactoBar from '../components/ContactoBar.vue';
import DropDowns from '../components/DropDowns.vue';

    export default {
        name: 'NavbarView',
        components: {
            ContactoBar,
            DropDowns
        }
    }
</script>
    
<style scoped>
    @import url('../assets/css/main.css');
</style>