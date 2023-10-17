<template>
    <av-single-select
        :itens="[{
            id: 'Active',
            name: 'Active'
        },{
            id: 'Inactive',
            name: 'Inactive'
        }]" 
        :hidden-field-name="props.hiddenFieldName"
        key-attr="id"
        value-attr="name"
        :selectedItem="props.selectedItem"
        ></av-single-select>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({    
    hiddenFieldName:{
        type:String,
        required:true
    },
    selectedItem:{
        type: Object,
        default(){
            return {
            }
        }
    }
});

</script>