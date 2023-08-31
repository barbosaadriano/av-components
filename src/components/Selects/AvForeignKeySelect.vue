<template>
    <div>
        <label>{{label}}</label><br>
        <input type="hidden" :name="props.name" :value="joinedSelectedKeys">
        <input type="text" :value="joinedSelectedValues" readonly>
        <div><!--wrapper para pesquisa-->
            <div><!--header da pesquisa-->
                <input type="search">
                <div>
                    Select all, number of pages, navigations clear selection
                </div>
            </div>
             <div><!--body to list itens-->
                <ul>
                    <li v-for="item in availables" :key="item[keyFieldName]">
                        {{ item[valueFildName] }}
                    </li>
                </ul>
             </div>
             <div>
                footer goes here,
                close button, apply button
             </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue';
const label = ref("minha label");
const props = defineProps({
    name: {
        type: String,
        default: "campoSemNome"
    },
    keyFieldName: {
        type: String,
        default: 'id'
    },
    valueFildName: {
        type: String,
        default: 'name'
    },
    selecteds: {
        type: Array,
        default: ()=>[]
    },
    availables: {
        type: Array,
        default: ()=>[]
    }
});
const joinedSelectedKeys = computed(()=>{
    if (props.selecteds.length==0) return "";
    return props.selecteds.map((si)=>si[props.keyFieldName]).join(",");
});
const joinedSelectedValues = computed(()=>{
    if (props.selecteds.length==0) return "";
    return props.selecteds.map((si)=>si[props.valueFildName]).join(",");
});

// selected itens
// available itens
</script>