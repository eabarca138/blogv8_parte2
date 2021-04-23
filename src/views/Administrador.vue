<template>
    <div>
                <header class="masthead" style="background-image:url('assets/img/home-bg.jpg');">
    <div class="overlay"></div>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
                <div class="site-heading">
                    <h1 v-if="tipo == 'simple'">Bienvenido a la página de Administración.</h1>
                    <h1 v-if="tipo == 'avanzado'">Esta página de administración está en construcción. Intente como administrador simple.</h1>
                </div>
            </div>
        </div>
    </div>
</header>
    </div>
</template>

<script>
    export default {
        props:{
            tipo: String
        }
    }
</script>

<style lang="scss" scoped>

</style>