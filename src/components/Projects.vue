<template>
    <div class="container" style="margin-top:40px">
     <div class="flex-container fade-in">
        <div> 
            <div class="card flex justify-content-center" id="gallery">
                <Galleria :value="project1" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
                    :showThumbnails="false" :showIndicators="true">
                    <template #item="slotProps">
                         <Image :src="require(`@/assets/bayern/${slotProps.item.itemImageSrc}`)" :alt="slotProps.item.alt"  width="600" preview  />
                    </template>
                </Galleria>
            </div>
        </div>
        <div>
            Website made for college assignment (Web and mobile application development basics)
            <br><br>
            Technologies used: HTML, CSS
            <br><br>
            <a href="https://github.com/marjanovicm13/BayernWebsite" target="_blank">Github link</a>
        </div>
     </div> 

    
      <div class="flex-container fade-in">
        <div>
            Unit converter mobile app made for college assignment (Web and mobile application development basics) 
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
                        <Image preview>
                            <template #image>
                                <img :src="require(`@/assets/unitconverter/${slotProps.item.itemImageSrc}`)" :alt="slotProps.item.alt" style="width: 100%; height:400px; display: block" />
                            </template>
                            <template #preview>
                                <img :src="require(`@/assets/unitconverter/${slotProps.item.itemImageSrc}`)" alt="preview" style="width:15vw; height:80vh" />
                            </template>
                        </Image> 
                    </template>
                </Galleria>
            </div>
        </div>
     </div> 

     <div class="flex-container fade-in">
        <div> 
            <div class="card flex justify-content-center" id="gallery">
                <Galleria :value="project3" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
                    :showThumbnails="false" :showIndicators="true">
                    <template #item="slotProps">
                        <!-- <img :src="require(`@/assets/hangman/${slotProps.item.itemImageSrc}`)" :alt="slotProps.item.alt" style="width: 100%; display: block" /> -->
                        <Image :src="require(`@/assets/hangman/${slotProps.item.itemImageSrc}`)" :alt="slotProps.item.alt"  width="600" preview  />
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

     <div class="flex-container fade-in">
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
                        <Image :src="require(`@/assets/imageslider/${slotProps.item.itemImageSrc}`)" :alt="slotProps.item.alt"  width="600" preview  />
                    </template>
                </Galleria>
            </div>
        </div>
     </div> 

     <div class="flex-container fade-in">
        <div> 
            <div class="card flex justify-content-center" id="gallery">
                <Galleria :value="project7" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
                    :showThumbnails="false" :showIndicators="true">
                    <template #item="slotProps">
                        <Image preview>
                            <template #image>
                                <img :src="require(`@/assets/dailylog/${slotProps.item.itemImageSrc}`)" :alt="slotProps.item.alt" style="width: 100%; height:400px; display: block" />
                            </template>
                            <template #preview>
                                <img :src="require(`@/assets/dailylog/${slotProps.item.itemImageSrc}`)" alt="preview" style="width:15vw; height:80vh" />
                            </template>
                        </Image> 
                    </template>
                </Galleria>
            </div>
        </div>
        <div>
            Daily log (Diary/Notes) app made for a college assignment (Mobile application development) 
            <br><br>
            Technologies used: Kotlin
            <br><br>
            <a href="https://github.com/marjanovicm13/DailyLog23" target="_blank">Github link</a>
        </div>
     </div> 

     <div class="flex-container fade-in">
        <div>
            CRUD web app made during an internship while learning Angular
            <br><br>
            Technologies used: HTML, CSS, Angular, ASP.NET Core, MySQL
            <br><br>
            <a href="https://github.com/marjanovicm13/HammerProject" target="_blank">Github link</a>
        </div>
        <div> 
            <div class="card flex justify-content-center" id="gallery">
                <Galleria :value="project5" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
                    :showThumbnails="false" :showIndicators="true">
                    <template #item="slotProps">
                        <Image :src="require(`@/assets/HammerAngular/${slotProps.item.itemImageSrc}`)" :alt="slotProps.item.alt"  width="600" preview  />
                    </template>
                </Galleria>
            </div>
        </div>
     </div> 

     <div class="flex-container fade-in">
        <div> 
            <div class="card flex justify-content-center" id="gallery">
                <Galleria :value="project6" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
                    :showThumbnails="false" :showIndicators="true">
                    <template #item="slotProps">
                        <Image :src="require(`@/assets/HammerBlazor/${slotProps.item.itemImageSrc}`)" :alt="slotProps.item.alt"  width="600" preview  />
                    </template>
                </Galleria>
            </div>
        </div>
        <div>
            CRUD web app made during an internship while learning Blazor
            <br><br>
            Technologies used: HTML, CSS, Javascript, Blazor, ASP.NET Core, MySQL
            <br><br>
            <a href="https://github.com/marjanovicm13/HammerProject-in-Blazor" target="_blank">Github link</a>
        </div>
     </div> 

     <div class="flex-container fade-in">
        <div>
            Excercise assignment when applying for an internship. 
            <br><br>
            Technologies used: HTML, CSS, Angular, Spring Boot, PostgreSQL
            <br><br>
            <a target="_blank">Github link: Private Repository</a>
        </div>
        <div> 
            <div class="card flex justify-content-center" id="gallery">
                <Galleria :value="project8" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px"
                    :showThumbnails="false" :showIndicators="true">
                    <template #item="slotProps">
                        <Image :src="require(`@/assets/pancakes/${slotProps.item.itemImageSrc}`)" :alt="slotProps.item.alt"  width="600" preview  />
                    </template>
                </Galleria>
            </div>
        </div>
     </div> 
     </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted  } from "vue";
import Galleria from 'primevue/galleria';
import { PhotoService } from '@/service/PhotoService'
import Image from 'primevue/image';

var fadeInElements = []
var fadeOutElements = []

onMounted(() => {
    PhotoService.getImages(1).then((data) => (project1.value = data));
    PhotoService.getImages(2).then((data) => (project2.value = data));
    PhotoService.getImages(3).then((data) => (project3.value = data));
    PhotoService.getImages(4).then((data) => (project4.value = data));
    PhotoService.getImages(5).then((data) => (project5.value = data));
    PhotoService.getImages(6).then((data) => (project6.value = data));
    PhotoService.getImages(7).then((data) => (project7.value = data));
    PhotoService.getImages(8).then((data) => (project8.value = data));

    fadeInElements = Array.from(document.getElementsByClassName('fade-in'))
    document.addEventListener('scroll', handleScroll)
    handleScroll()
});

onUnmounted(() => {
    document.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
      for (var i = 0; i < fadeInElements.length; i++) {
        var elem = fadeInElements[i]
        if (isElemVisible(elem)){
            elem.style.opacity = '1'
            elem.style.transform = 'scale(1)'
            fadeInElements.splice(i, 1)
            fadeOutElements.push(elem)
        }
      }
      for(var j = 0; j < fadeOutElements.length; j++){
        var el = fadeOutElements[j]
        if(isElemNotVisible(el)){
            el.style.opacity = '0'
            fadeInElements.push(el)
            fadeOutElements.splice(j, 1)
        }
      }
}

const isElemVisible = (el) =>{
    var rect = el.getBoundingClientRect()
    var elemTop = rect.top 
    var elemBottom = rect.bottom
    return (elemTop + 130< window.innerHeight && elemBottom >= 0)
}

const isElemNotVisible = (el) =>{
    var rect = el.getBoundingClientRect()
    var elemTop = rect.top - 200
    var elemBottom = rect.bottom
    return  (elemTop + 200 > window.innerHeight && elemBottom >= 0) || (elemTop< window.innerHeight && elemBottom <= 0) 
}

const project1 = ref();
const project2 = ref();
const project3 = ref();
const project4 = ref();
const project5 = ref();
const project6 = ref();
const project7 = ref();
const project8 = ref();

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
          border-radius: 30px;
    }

    .flex-container > div {
        margin: auto;
        padding: 20px;
        font-size: 20px;
    }
 
    .container {
    width: 80%;
    min-width: 450px;
    margin: 0 auto;
   } 

   .fade-in {
    background-color: #1f2d40;
    color: antiquewhite;
    height: 500px;
    margin-bottom: 50px;
    opacity: 0;
    transition: 0.7s all ease-out;
    transform: scale(0.8);
    box-sizing: border-box;
    padding: 20px;
  }

</style>
