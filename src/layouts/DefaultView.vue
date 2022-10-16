<script>
import MainHeader from '../components/HeaderComponent.vue';
import MainFooter from '../components/FooterComponent.vue';

export default {
    name: 'DefaultView',
    components: {
        MainHeader, MainFooter
    }
}

</script>

<template>
    <MainHeader />
    <main>
        <slot />
    </main>
    <MainFooter />
</template>