<template>
    <li class="nav-item dropdown">
        <a href="" class="nav-link" data-bs-toggle="dropdown" aria-expanded="false">
            Accesorios Y Periféricos 
            <i class="fas fa-sort-down"></i>
        </a>&nbsp;
        <ul class="dropdown-menu">
            <li><a href="" class="dropdown-item">Mouse</a></li>
            <li><a href="" class="dropdown-item">Teclados</a></li>
            <li><a href="" class="dropdown-item">Diademas</a></li>
            <li><a href="" class="dropdown-item">Cámaras Web</a></li>
            <li><a href="" class="dropdown-item">MousePads</a></li>
            <li><a href="" class="dropdown-item">Kits</a></li>
            <li><a href="" class="dropdown-item">Bases</a></li>
            <li><a href="" class="dropdown-item">Reguladores</a></li>
        </ul>
    </li>

    <li class="nav-item dropdown">
        <a href="" class="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Componentes 
            <i class="fas fa-sort-down"></i>
        </a>&nbsp;
        <ul class="dropdown-menu">
            <li><a href="" class="dropdown-item">Procesadores </a></li>
            <li><a href="" class="dropdown-item">Tarjetas de Video</a></li>
            <li><a href="" class="dropdown-item">Tarjetas Madre</a></li>
            <li><a href="" class="dropdown-item">Memorias Ram</a></li>
            <li><a href="" class="dropdown-item">Unidades SSD</a></li>
            <li><a href="" class="dropdown-item">Unidades HDD Internos</a></li>
            <li><a href="" class="dropdown-item">Gabinetes</a></li>
            <li><a href="" class="dropdown-item">Fuentes De Poder</a></li>
            <li><a href="" class="dropdown-item">Iluminación</a></li>
            <li><a href="" class="dropdown-item">Enf. Líquido (AIO)</a></li>
            <li><a href="" class="dropdown-item">Enf. Aire</a></li>
            <li><a href="" class="dropdown-item">Ventilación</a></li>
        </ul>
    </li>

    <li class="nav-item dropdown">
        <a href="" class="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sillas Gamer
            <i class="fas fa-sort-down"></i>
        </a>&nbsp;
        <ul class="dropdown-menu">
            <li><a href="" class="dropdown-item">Cooler Master</a></li>
                <li><a href="" class="dropdown-item">Game Factor</a></li>
                <li><a href="" class="dropdown-item">Yeyian</a></li>
                <li><a href="" class="dropdown-item">XZeal</a></li>
        </ul>
    </li>
    
    <li class="nav-item">
        <a class="nav-link" href="#">Servicios</a>
    </li>

    &nbsp;&nbsp;
                
    <li class="nav-item">
        <form class="d-flex">
            <div class="input-group">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-primary" type="submit">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                </button>
            </div>
        </form>
    </li>

    &nbsp;

    <li class="nav-item">
        <a class="nav-link" href="#">
            <span>2</span>&nbsp;
            <font-awesome-icon :icon="['fass', 'cart-shopping']"/>
        </a>
    </li>
</template>

<script>
    export default {
        name: 'DropDowns'
    }
</script>

<style scoped>
    @import url('../assets/css/main.css');
</style>