<template>
    <div class="dropdown">
        <label class="form-label">{{ label }}</label><br>
        <input type="hidden" :name="props.name" :value="joinedSelectedKeys">
        <input class="form-control dropdown-toggle" type="text" data-bs-toggle="dropdown" :value="joinedSelectedValues"
            readonly>
        <ul class="dropdown-menu"><!--wrapper para pesquisa-->
            <div class="card">
                <div class="card-header"><!--header da pesquisa-->
                    <input type="search" class="form-control">
                    <div>
                        Select all, number of pages, navigations clear selection
                    </div>
                </div>
                <div class="card-body"><!--body to list itens-->

                    <li class="dropdown-item" v-for="item in availables" :key="item[keyFieldName]">
                        {{ item[valueFildName] }}
                    </li>

                </div>
                <div class="card-footer">
                    footer goes here,
                    close button, apply button
                </div>
            </div>
        </ul>
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
        default: () => []
    },
    availables: {
        type: Array,
        default: () => []
    }
});
const joinedSelectedKeys = computed(() => {
    if (props.selecteds.length == 0) return "";
    return props.selecteds.map((si) => si[props.keyFieldName]).join(",");
});
const joinedSelectedValues = computed(() => {
    if (props.selecteds.length == 0) return "";
    return props.selecteds.map((si) => si[props.valueFildName]).join(",");
});

// selected itens
// available itens
</script>