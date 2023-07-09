<template>
    <div class="container" style="margin-top:60px; ">
            <strong style="font-size:25px;">Education: </strong>

             <div class="flex" style="margin-top:20px">
                <div>
                    <img src="../assets/etes.png" alt="" height="100px" width="100px">
                </div>
                
                <div>
                    2014-2018 <br>
                    Elektrotehnička i ekonomska škola Nova Gradiška / Electric engineering and economic school Nova Gradiška <br>
                    Tehničar za računalstvo / Computer technician 
                </div>
            </div>
            

            <div class="flex">
                <div>
                    <img src="../assets/ferit.png" alt="" height="100px" width="100px">
                </div>

                <div>
                    2018-2021 <br>
                    Fakultet elektrotehnike, računarstva i informacijskih tehnologija Osijek / Faculty of Electrical Engineering, Computer Science and Information Technology Osijek <br>
                    univ. bacc. ing. comp.
                </div>
            </div>

             <div class="flex">
                <div>
                    <img src="../assets/ferit.png" alt="" height="100px" width="100px">
                </div>
                <div>
                    2021- <br>
                    Fakultet elektrotehnike, računarstva i informacijskih tehnologija Osijek / Faculty of Electrical Engineering, Computer Science and Information Technology Osijek <br>
                    mag. ing .comp
                </div>
            </div>

        <strong style="font-size:25px;">Language skills: </strong>
        <div class="card">
            <DataTable :value="languages"  tableStyle="min-width: 50rem">
                <Column field="language" header="Language"></Column>
                <Column field="listening" header="Listening"></Column>
                <Column field="reading" header="Reading"></Column>
                <Column field="spokenProduction" header="Spoken Production"></Column>
                <Column field="spokenInteraction" header="Spoken Interaction"></Column>
                <Column field="writing" header="Writing"></Column>
            </DataTable>
        </div>
     </div>

</template>


<script setup>
import { LanguageService } from '@/service/LanguageService';
import { onMounted, ref } from "vue";
import DataTable from "primevue/datatable";
import Column from 'primevue/column';

onMounted(() => {
    LanguageService.getLanguageSkills().then((data) => (languages.value = data));
});

const languages = ref();

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.container {
    width: 80%;
    min-width: 450px;
    margin: 0 auto;
   } 

.flex {
    background-color: #1f2d40;
    color: antiquewhite;
    margin-bottom: 20px;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 30px;
    font-size: 18px;
    display: flex;
  }

   .flex > div {
        margin: auto;
        padding: 20px;
        font-size: 20px;
    }


 
</style>
