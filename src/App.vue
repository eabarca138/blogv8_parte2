<template>
  <div>
    <!-- ROUTER VIEW QUE CARGARÁ LAS VISTAS (INICIO, SOBRE MÍ, CONTACTO, ETC.) -->
    <transition name="transicion">
     <router-view />
    </transition>
  </div>
  
</template>

<script>

export default {
  name: "App",
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;  
}
#menu-v8 a{
  text-shadow: 1px 1px #000;
}

.transicion-enter-active, .transicion-leave-active {
 transition: opacity .1s;
}
 .transicion-leave-to {
 opacity: 0%;
}
 .transicion-enter-to  {
 opacity: 100%;
}
</style>
