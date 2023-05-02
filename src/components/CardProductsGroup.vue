<template>
    <div class="card-group">
        <slot name="card-product-group"></slot>
    </div>
</template>

<style scoped>
    .card-group {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
        gap: .5rem;
        padding-top: 1em;
    }
</style>