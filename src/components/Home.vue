<template>
    <Navbar/>
    <div class="container" style="margin-top:40px; ">
            <strong style="font-size:25px;">Education: </strong>

                
            <Splitter style="height: 150px" class="mb-5">
                <SplitterPanel class="flex align-items-center justify-content-center" :size="25" :minSize="10"> 
                        <img src="../assets/ferit.png" alt="">
                    </SplitterPanel>
                <SplitterPanel class="flex align-items-center justify-content-center" :size="75">
                     2014-2018 <br>
                        Elektrotehnička i ekonomska škola Nova Gradiška / Electric engineering and economic school Nova Gradiška <br>
                        Tehničar za računalstvo / Computer technician 
                </SplitterPanel>
            </Splitter>
            

            <div class="edu">
                2018-2021 <br>
                Fakultet elektrotehnike, računarstva i informacijskih tehnologija Osijek / Faculty of Electrical Engineering, Computer Science and Information Technology Osijek <br>
                univ. bacc. ing. comp.
            </div>

             <div class="edu">
                2021- <br>
                Fakultet elektrotehnike, računarstva i informacijskih tehnologija Osijek / Faculty of Electrical Engineering, Computer Science and Information Technology Osijek <br>
                mag. ing .comp
            </div>

     </div>
</template>


<script setup>
import Navbar from "./Navbar.vue"
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.container {
    width: 80%;
    min-width: 450px;
    margin: 0 auto;
   } 

.edu {
    background-color: grey;
    margin-bottom: 20px;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 30px;
    font-size: 18px;
  }
 


</style>
