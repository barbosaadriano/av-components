<template>
    <div class="fk-wrapper">
        <label class="form-label mb-2">{{ label }}</label><br>
        <input type="hidden" :name="props.name" :value="joinedSelectedKeys">
        <div class="input-group">
            <input class="form-control" type="text" :value="joinedSelectedValues" readonly>
            <button class="btn btn-secondary" @click="edit">
                <font-awesome-icon icon="fa-solid fa-pen-to-square"></font-awesome-icon>
            </button>
        </div>

        <div class="searcher" :class="{ hidded: !editing }">
            <div class="searcher-header"><!--header da pesquisa-->
                <input type="search" ref="searchf" v-model="searchText" placeholder="localizar" class="form-control">
                <div class="d-grid gap-2 d-md-flex justify-content-md-center">                    
                    <button type="button" class="btn me-md-2 btn-sm btn-light" @click.prevent="emit('toggleSelection',!isAllSelected)">
                        <font-awesome-icon icon="fa-solid fa-square-check"></font-awesome-icon> &nbsp; selecionar {{ isAllSelected ? 'nenhum' : 'todos' }}
                    </button>

                    <button type="button" class="btn me-md-2 btn-sm btn-danger" @click.prevent="emit('clearField')">
                        <font-awesome-icon icon="fa-solid fa-broom"></font-awesome-icon> &nbsp; limpar
                    </button>

                    <button type="button" class="btn me-md-2 btn-sm btn-secondary" @click.prevent="closeEdit">
                        <font-awesome-icon icon="fa-solid fa-xmark"></font-awesome-icon> &nbsp; fechar
                    </button>
                </div>
            </div>
            <div class="searcher-body"><!--body to list itens-->
                <ul>
                    <li class="d-flex justify-content-between" v-for="item in filteredItems" :key="item[keyFieldName]">
                        <input type="checkbox" :id="item[keyFieldName]" :disabled="!item.available" v-model="item.selected" />
                        <label class="flex-fill" :for="item">{{ item[valueFildName] }}</label>
                        <button type="button" class="btn btn-light btn-sm flex-fill" :disabled="!item.available">
                            somente
                        </button>
                    </li>
                </ul>

            </div>
            <div class="searcher-footer">
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">                    
                    <button type="button" class="btn me-md-2 btn-sm btn-primary" @click.prevent="closeEdit(true)">
                        <font-awesome-icon icon="fa-solid fa-check"></font-awesome-icon> &nbsp; confirmar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, computed, defineEmits } from 'vue';
const label = ref("minha label");
const searchText = ref("");
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
    items: {// maybe is better rename this one to items, and an item to have a property to sinalize if its available or not
        type: Array,
        default: () => []
    }
});
const isAllSelected = computed(()=>{
    return props.items.length ===  selectedItems.value.length;
});
const filteredItems = computed(()=>{
    return props.items.filter((i)=>{
        return i[props.valueFildName].toLowerCase().includes(searchText.value.toLowerCase());
    });
});
const selectedItems = computed(()=>{
    return props.items.filter((i)=>i.selected===true);
});
const joinedSelectedKeys = computed(() => {
    if (selectedItems.value.length == 0) return "";
    return selectedItems.value.map((si) => si[props.keyFieldName]).join(",");
});
const joinedSelectedValues = computed(() => {
    if (selectedItems.value.length == 0) return "";
    return selectedItems.value.map((si) => si[props.valueFildName]).join(",");
});

const editing = ref(false);
const edit = () => {
    editing.value = true;
    setTimeout(() => {
        searchf.value.focus();
    }, 100);
};
const closeEdit = (apply) => {
    editing.value = false;
    if (apply===true) emit('applied');
};
const emit = defineEmits({
    toggleSelection:null,
    clearField:null,
    applied: null
});

const searchf = ref(null);
// selected itens
// available itens
</script>
<style scoped>
.searcher {
    background: #ffffff;
    box-sizing: border-box;
    position: relative;
    top: -45px;
    z-index: 10;
    border-radius: .5rem;
    border: 1px solid transparent;
    margin-top: 0.2rem;
    padding: 0.5rem;
    box-shadow: 1px 1px 5px lightgray;
    /* display: none; */
}

.hidded {
    display: none;
}

.searcher .form-control {
    margin: 0px;
    border: 1px solid #eeeeee;
    border-radius: .01rem;
    margin-bottom: .5rem;
}

.searcher-header,
.searcher-body {
    margin-bottom: .5rem;
}

.searcher-body {
    height: 200px;
    overflow: hidden;
    overflow-y: scroll;
}

.searcher-body ul, .searcher-body ul li {
  display: block;
  padding: 0;
  margin: 0;
  list-style: none;
}
.searcher-body ul li input, .searcher-header input[type=checkbox] {
    width: 20px;
    padding: 5px;
    margin-right: 20px;
}
.searcher-body ul li label {
  width: 172px;  
}
.searcher-body ul li button {
  visibility: hidden;
}
.searcher-body ul li:hover button {
  visibility: visible;
}
</style>