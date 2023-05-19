<template>
    <div class="card relative z-2">
        <Menubar :model="items">
            <template #start>
                <a href="https://github.com/marjanovicm13" target="_blank"><img alt="Github" title="Github account" src="../assets/githubLogo.jpg" height="40" class="mr-2" /></a>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import Menubar from 'primevue/menubar';
import router from "@/router";

const items = reactive([
    {
        label: 'About me',
        icon: 'pi pi-fw pi-user',
        to: "AboutMe",
        key: "aboutme"
    },
    {
        label: 'Projects',
        icon: 'pi pi-fw pi-file',
        to: "Projects"
    }
]);


     if(router.currentRoute._value.path=="/AboutMe")
     {
        items[0].class = "clicked"
        items[0].disabled = true
     }
     else{
        items[1].class = "clicked"
        items[1].disabled = true
     }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    img:hover{
     opacity:0.6;
     background: #849898;  
    }

</style>
