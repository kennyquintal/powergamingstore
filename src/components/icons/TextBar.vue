<template>
    <div class="row align-items-start">
        <div class="col-12">
            <div class="text-bg-primary p-3">Ofertas del Día</div>
        </div>
  </div>
</template>

<script>
    export default {
        name: 'TextBar'
    }    
</script>

<style scoped>
@import url('../../assets/css/main.css');
    .row {
        margin-top: 1rem;
        padding: auto;
        
    }

    .text-bg-primary {
        background-color: var(--bg-navbar) !important;
    }
</style>