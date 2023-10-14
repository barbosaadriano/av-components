<template>
    <div>
        <av-foreign-key-select :name="props.name" :label="props.label" :items="itens" :filter-items="true" @search-changed="pesquisar"
            @toggle-selection="mudarSelecao"  @selected-one="selectOne" @clear-field="mudarSelecao(false)"></av-foreign-key-select>
    </div>
</template>
<script setup>
import { defineProps, onMounted, ref } from 'vue';
//import { AvForeignKeySelect } from '../Selects';
import api from "@/services/api.js";

const props = defineProps({
    label: {
        type: String,
        default: "Minha label"
    },
    name: {
        type: String,
        default: "campoSemNome"
    },
    selectedId: {
        type: Number,
        default: 0
    }
});

const itens = ref([]);

onMounted(() => {
    api.get("/pokemon?limit=20")
    .then((res)=>{
        let results = res.data.results;      
        results.forEach((x,idx)=>{
            x.id = idx;
            x.available = true;
            if (props.selectedId === x.id) {
                x.selected = true;
            }
        });             
        itens.value = results;
    });
});
function pesquisar(v) {
    console.log(v);
}
function mudarSelecao(x) {
    itens.value.forEach((y)=>y.selected=x);
}
function selectOne(itemToSelect){
    itens.value.forEach((y)=>{
        y.selected=false;
        if (y.id==itemToSelect.id) {
            y.selected = true;
        }
    });
}

</script>
<style scoped></style>