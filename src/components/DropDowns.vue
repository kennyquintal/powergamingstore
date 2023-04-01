<template>
    <li class="nav-item dropdown">
        <a href="" class="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Accesorios Y Periféricos 
            <i class="fas fa-sort-down"></i>
        </a>&nbsp;
        <ul class="dropdown-menu">
            <li v-for="(itemDropDown, index) in dropdownData.dropdownAccesoriosPerifericos" :key="index">
                <a href="{{ itemDropDown.urlPage }}" class="dropdown-item">{{ itemDropDown.ddOption }}</a>
            </li>
        </ul>
    </li>

    <li class="nav-item dropdown">
        <a href="" class="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Componentes 
            <i class="fas fa-sort-down"></i>
        </a>&nbsp;
        <ul class="dropdown-menu">
            <li v-for="(itemDropDown, index) in dropdownData.dropdownComponentes" :key="index">
                <a href="{{ itemDropDown.urlPage }}" class="dropdown-item">{{ itemDropDown.ddOption }} </a>
            </li>
        </ul>
    </li>

    <li class="nav-item dropdown">
        <a href="" class="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sillas Gamer
            <i class="fas fa-sort-down"></i>
        </a>&nbsp;
        <ul class="dropdown-menu">
            <li v-for="(itemDropDown, index) in dropdownData.dropdownSillas" :key="index">
                <a href="{{ itemDropDown.urlPage }}" class="dropdown-item">{{ itemDropDown.ddOption }}</a>
            </li>
        </ul>
    </li>
</template>

<script>
    export default {
        name: 'DropDowns',
        data() {
            return {
                dropdownData: {
                    dropdownAccesoriosPerifericos: [],
                    dropdownComponentes: [],
                    dropdownSillas: []
                }
            }
        },
        mounted() {
            this.fetchData('../src/assets/dropdown.json');
        },
        methods: {
            async fetchData() {
                const response = await fetch('../src/assets/dropdown.json');
                const jsonData = await response.json();
                this.dropdownData.dropdownAccesoriosPerifericos = jsonData.dropdownAccesoriosPerifericos;
                this.dropdownData.dropdownComponentes = jsonData.dropdownComponentes;
                this.dropdownData.dropdownSillas = jsonData.dropdownSillas;
            }
        }
    }
</script>

<style scoped>
    @import url('../assets/css/main.css');
</style>