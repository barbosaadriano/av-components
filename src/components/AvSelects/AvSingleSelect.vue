<script setup>
import {ref} from 'vue';

const selected = ref("");
const searchText = ref("");

</script>

<template>
    <div class="av-select">
        <div v-show="selected" class="item-selected">
            <p>{{ selected }}</p>
            <button @click="selected=''">X</button>
        </div>        
        
        <div  class="search"> 
            <input v-model.trim="searchText" type="text">
            <div v-show="searchText" class="list-wrapper">
                <div class="option" @click="selected='Opção 2'">Opção 2</div>
                <div class="option selected">Opção 1</div>
                <div class="option">Opção 3</div>
                <div class="option">Opção 4</div>
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
</style>