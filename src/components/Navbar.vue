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
        console.log("We are in projects")
    }
    else{
        console.log("We are in about me")
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    div{
        margin-left: auto;
        margin-right: auto;
    }

    img:hover{
     opacity:0.6;
     background: #849898;  
    }
</style>
