<template>
    <Navbar/>
    <p>Projects</p>
    <div class="card md:flex md:justify-content-center">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="4" containerStyle="max-width: 640px">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
            </template>
        </Galleria>
    </div>
</template>

<script setup>
import Navbar from "./Navbar.vue"
import { ref, onMounted } from "vue";
import Galleria from 'primevue/galleria';
import { PhotoService } from '@/service/PhotoService'

onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div{
        margin: 0;
    }
</style>
