<script setup>
  import NavbarView from './views/NavbarView.vue';
  import FooterGeneral from './components/FooterGeneral.vue';
</script>

<template>
    <header>
      <NavbarView>
      </NavbarView>
    </header>
    <router-view></router-view>
    <FooterGeneral></FooterGeneral>
</template>
