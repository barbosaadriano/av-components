<script setup>
import { ref, computed} from 'vue';


const selected = ref("");
const searchText = ref("");
const inputSearch = ref(null);
const pointer = ref(-1);

const itens = ref(['teste 1','teste 2','teste 3', 'teste 4']);

const itensWithoutSelected = computed(()=>{
    return itens.value.filter((f)=>f!==selected.value);
});

function setFocus(){
    inputSearch.value.focus();
}
function clearSearchText() {
    searchText.value = "";
    pointer.value = -1;
}
function clearSelected() {
    selected.value="";
}
function clearSelectedIfEmptySearchText() {
    if (searchText.value === "") {
        clearSelected();
    }
}
function selectItem(item) {
    if (searchText.value) {
        selected.value = item;
        clearSearchText();
    }
}
function selectActualIndex() {
    if (pointer.value>=0) {
        selectItem(itensWithoutSelected.value[pointer.value]);
    }
}
function upNavigate() {
    if (pointer.value>0 && searchText.value) pointer.value--;
}
function downNavigate() {
    if (pointer.value<itensWithoutSelected.value.length-1 && searchText.value) pointer.value++;
}
</script>

<template>
    <div class="av-select" @click="setFocus">
        <p v-show="!selected && !searchText" class="placeholder">placeholder</p>        
        <div v-show="selected" class="item-selected">
            <p>{{ selected }}</p>
            <button @click="clearSelected">X</button>
        </div>        
        
        <div  class="search"> 
            <input v-model.trim="searchText" ref="inputSearch" type="text" @keyup.enter="selectActualIndex" @keyup.up="upNavigate" @keyup.down="downNavigate" @keydown.delete="clearSelectedIfEmptySearchText" @keyup.esc="clearSearchText">
            <div v-show="searchText" class="list-wrapper">
                <div class="option" :class="{'selected':idx===pointer}" v-for="(it,idx) in itensWithoutSelected" :key="idx" @click="selectItem(it)">{{ it }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.av-select {
    position: relative;
    box-sizing: border-box;
    background-color: white;
    padding: 5px 10px;
    display: flex;
    flex-direction: row;
    border: 1px solid #eee;
    border-radius: 5px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    box-shadow: inset 1px 1px 5px #eee;
    width: 100%;
    min-height: 50px;
}
.item-selected {
    display: flex;
    flex-direction: row;
    align-content: space-between;
    background: rgba(183, 202, 230, 0.5);
    padding: 2px 5px;
    align-items: center;
    border-radius: 5px;
    margin-right: 8px;
}
.item-selected p {
    padding: 2px;
    margin: 2px;
}
.item-selected button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 10px;
    font-weight: bold;
    color: red;
}
.av-select input {
    border: none;
    outline: none;
}
.list-wrapper {
    position: absolute;
    margin-top: 12px;
    width: 250px;
    height: 200px;
    box-shadow: 1px 1px 5px #eee;
    background: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
}
.search {
    position: relative;
}
.option {
    background: #fefefe;
    padding: 5px;
    margin-bottom: 4px;
}
.option.selected {
    background: rgba(183, 202, 230, 0.5);
}
.option:hover {
    background: rgba(215, 225, 240, 0.5);
}
p.placeholder {
    color: #999;
    padding: 0px;
    margin: 0px;
    position: absolute;
    z-index: 1;
}
</style>