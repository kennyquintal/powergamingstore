<template>
    <button type="submit" class="btn btn-primary custom-btn">Agregar <font-awesome-icon :icon="['fas', 'cart-shopping']" size="2xs" /></button>
</template>

<script>
    export default {
        name: 'AddCart'
    }
</script>

<style scoped>
    .custom-btn {
        transform: scale(.9);
    }
</style>