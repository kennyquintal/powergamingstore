<template>
    <form class="d-flex">
        <div class="input-group">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-primary" type="submit">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </button>
        </div>
    </form>
</template>

<script>
    export default {
        name: 'SearchBar'
    }
</script>

<style scoped>
    .input-group {
        max-width: 240px;
        max-height: 10px;
    }
</style>
