<template>
    <Transition >
        <Button v-if="showAboutMe == true || showProjects == true" style="margin-top:10px" label="MAIN" severity="help" text raised @click="showAboutMe = false; showProjects = false; container[0].style.display = 'flex'"/>
    </Transition>

    <Transition>
        <p v-if="showAboutMe==true"><Home/></p>
    </Transition>

    <Transition>
        <p v-if="showProjects==true"><Projects/></p>
    </Transition>

   <div class="maincontainer">
        <p class="txt">
            Mihael Marjanović
        </p>
        <p class="txt">
            marjanovicm314@gmail.com
        </p>
        <p>
            <a href="https://github.com/marjanovicm13" target="_blank"><img id="github" alt="Github" title="Github account" src="../assets/github.png" height="40" class="mr-2" /></a>
        </p>
        <p>
            <Button label="About me" severity="help" text raised @click="showAboutMe = !showAboutMe; container[0].style.display = 'none'" />
        </p>
        <p>
            <Button label="Projects" severity="help" text raised @click="showProjects = !showProjects; container[0].style.display = 'none'" />
        </p>
   </div>
    <p class="txt">This portfolio was made with Vue.js</p>
</template>


<script setup>
import Button from 'primevue/button';
import Home from "./Home.vue"
import Projects from "./Projects.vue"
import { ref, onMounted } from 'vue'

var container = []

onMounted(() => {
    container = Array.from(document.getElementsByClassName('maincontainer'))
})

var showAboutMe = ref(false);
var showProjects = ref(false);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .maincontainer{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 90vh;
    flex-direction: column; 
 }

 .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

#github:hover{
     opacity:0.6;
     background: #849898;  
}

.maincontainer > p{
    margin-top: -5px;
}

.txt{
    color: #CE93D8;
}
</style>
