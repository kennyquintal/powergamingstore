<template>
    <div class="row align-items-start">
        <div class="col-12">
            <div class="text-bg-primary p-3">{{ textTitle }}</div>
        </div>
  </div>
</template>

<script>
    export default {
        name: 'TextBar',
        props: ['textTitle'],
        setup(props) {
            return props;
        }
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