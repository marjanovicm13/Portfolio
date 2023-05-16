<template>
    <div class="card relative z-2">
        <Menubar :model="items" @click="itemClick($event)">
            <template #start>
                <a href="https://github.com/marjanovicm13" target="_blank"><img alt="Github" title="Github account" src="../assets/githubLogo.jpg" height="40" class="mr-2" /></a>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Menubar from 'primevue/menubar';
import router from "@/router";

const items = ref([
    {
        label: 'About me',
        icon: 'pi pi-fw pi-user'
    },
    {
        label: 'Projects',
        icon: 'pi pi-fw pi-file'
    }
]);

function itemClick(event){
    if(event.target.innerHTML == "Projects" || event.target.className == "p-menuitem-icon pi pi-fw pi-file"){
        router.push({name: "Projects"})
        //event.target.setAttribute('id','projects');
       // const list = document.getElementById("projects").classList;
        event.target.parentElement.classList.add("$style.clicked");
        console.log(event.target.parentElement)
    }
    else{
        router.push({name: "AboutMe"})
        event.target.setAttribute('id','aboutme');
        console.log(event.target)
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    img:hover{
     opacity:0.6;
     background: #849898;  
    }

    .clicked{
        background-color: green!important;
    }

    p-menuitem-content:hover{
        background-color: green;
        color: green;
        background: red;
        opacity: 0.6;
    }

    p-menuitem-active{
        background-color: red;
    }
</style>
