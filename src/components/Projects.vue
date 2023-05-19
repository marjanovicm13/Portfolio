<template>
    <Navbar/>
    <p style="font-size:30px">Projects</p>
     <div class="flex-container">
        <div> 
            <div class="card flex justify-content-center" id="gallery">
                <Galleria :value="project1" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
                    :showThumbnails="false" :showIndicators="true">
                    <template #item="slotProps">
                        <img :src="require(`@/assets/bayern/${slotProps.item.itemImageSrc}`)" :alt="slotProps.item.alt" style="width: 100%; display: block" />
                    </template>
                </Galleria>
            </div>
        </div>
        <div>
            Website made for college assignment (Osnove razvoja web i mobilnih aplikacija)
            <br><br>
            Technologies used: HTML, CSS
            <br><br>
            <a href="https://github.com/marjanovicm13/BayernWebsite" target="_blank">Github link</a>
        </div>
     </div> 

      <div class="flex-container">
        <div>
            Unit converter mobile app made for college assignment (Osnove razvoja web i mobilnih aplikacija) 
            <br><br>
            Technologies used: Java
            <br><br>
            <a href="https://github.com/marjanovicm13/UnitConverter" target="_blank">Github link</a>
        </div>
        <div> 
            <div class="card flex justify-content-center" id="gallery">
                <Galleria :value="project2" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
                    :showThumbnails="false" :showIndicators="true">
                    <template #item="slotProps">
                        <img :src="require(`@/assets/unitconverter/${slotProps.item.itemImageSrc}`)" :alt="slotProps.item.alt" style="width: 100%; height:400px; display: block" />
                    </template>
                </Galleria>
            </div>
        </div>
     </div> 

     <div class="flex-container">
        <div> 
            <div class="card flex justify-content-center" id="gallery">
                <Galleria :value="project3" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
                    :showThumbnails="false" :showIndicators="true">
                    <template #item="slotProps">
                        <img :src="require(`@/assets/hangman/${slotProps.item.itemImageSrc}`)" :alt="slotProps.item.alt" style="width: 100%; display: block" />
                    </template>
                </Galleria>
            </div>
        </div>
        <div>
            Simple hangman game made while learning Javascript
            <br><br>
            Technologies used: HTML, CSS, Javascript
            <br><br>
            <a href="https://github.com/marjanovicm13/Hangman" target="_blank">Github link</a>
        </div>
     </div> 

     <div class="flex-container">
        <div>
            Image slider made for an assignment 
            <br><br>
            Technologies used: HTML, CSS, SCSS, Javascript
            <br><br>
            <a href="https://github.com/marjanovicm13/ImageSlider" target="_blank">Github link</a>
        </div>
        <div> 
            <div class="card flex justify-content-center" id="gallery">
                <Galleria :value="project4" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
                    :showThumbnails="false" :showIndicators="true">
                    <template #item="slotProps">
                        <img :src="require(`@/assets/imageslider/${slotProps.item.itemImageSrc}`)" :alt="slotProps.item.alt" style="width: 100%; height:400px; display: block" />
                    </template>
                </Galleria>
            </div>
        </div>
     </div> 

     <div class="flex-container">
        <div> 
            <div class="card flex justify-content-center" id="gallery">
                <Galleria :value="project5" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
                    :showThumbnails="false" :showIndicators="true">
                    <template #item="slotProps">
                        <img :src="require(`@/assets/HammerAngular/${slotProps.item.itemImageSrc}`)" :alt="slotProps.item.alt" style="width: 100%; display: block" />
                    </template>
                </Galleria>
            </div>
        </div>
        <div>
            CRUD web app made for an internship while learning Angular
            <br><br>
            Technologies used: HTML, CSS, Angular, .NET
            <br><br>
            <a href="https://github.com/marjanovicm13/HammerProject" target="_blank">Github link</a>
        </div>
     </div> 

     <div class="flex-container">
        <div>
            CRUD web app made for an internship while learning Blazor
            <br><br>
            Technologies used: HTML, CSS, Javascript, Blazor
            <br><br>
            <a href="https://github.com/marjanovicm13/HammerProject-in-Blazor" target="_blank">Github link</a>
        </div>
        <div> 
            <div class="card flex justify-content-center" id="gallery">
                <Galleria :value="project6" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
                    :showThumbnails="false" :showIndicators="true">
                    <template #item="slotProps">
                        <img :src="require(`@/assets/HammerBlazor/${slotProps.item.itemImageSrc}`)" :alt="slotProps.item.alt" style="width: 100%; height:400px; display: block" />
                    </template>
                </Galleria>
            </div>
        </div>
     </div> 
</template>


<script setup>
import Navbar from "./Navbar.vue"
import { ref, onMounted } from "vue";
import Galleria from 'primevue/galleria';
import { PhotoService } from '@/service/PhotoService'

onMounted(() => {
    PhotoService.getImages(1).then((data) => (project1.value = data));
    PhotoService.getImages(2).then((data) => (project2.value = data));
    PhotoService.getImages(3).then((data) => (project3.value = data));
    PhotoService.getImages(4).then((data) => (project4.value = data));
    PhotoService.getImages(5).then((data) => (project5.value = data));
    PhotoService.getImages(6).then((data) => (project6.value = data));
});

const project1 = ref();
const project2 = ref();
const project3 = ref();
const project4 = ref();
const project5 = ref();
const project6 = ref();

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
    #gallery{
        margin-left: 40px;
    }
    .flex-container {
        display: flex;
    }

    .flex-container > div {
        margin: auto;
        padding: 20px;
        font-size: 20px;
    }
</style>
