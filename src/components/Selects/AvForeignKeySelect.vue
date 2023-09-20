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
                <input type="search" ref="searchf" placeholder="localizar" class="form-control">
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <span>
                        Exibindo 10 de 1000 registros
                    </span>
                    <button type="button" class="btn me-md-2 btn-sm btn-secondary" @click="closeEdit">
                        <font-awesome-icon icon="fa-solid fa-square-check"></font-awesome-icon> &nbsp; selecionar todos
                    </button>

                    <button type="button" class="btn me-md-2 btn-sm btn-secondary" @click="closeEdit">
                        <font-awesome-icon icon="fa-solid fa-broom"></font-awesome-icon> &nbsp; limpar
                    </button>

                    <button type="button" class="btn me-md-2 btn-sm btn-danger" @click="closeEdit">
                        <font-awesome-icon icon="fa-solid fa-xmark"></font-awesome-icon> &nbsp; fechar
                    </button>
                </div>
            </div>
            <div class="searcher-body"><!--body to list itens-->

                <div class="d-flex justify-content-between" v-for="item in availables" :key="item[keyFieldName]">
                    <input type="checkbox" :id="item[keyFieldName]" :value="item[valueFildName]" />
                    <label class="flex-fill" :for="item">{{ item[valueFildName] }}</label>
                    <button type="button" class="btn btn-light btn-sm flex-fill">
                        somente
                    </button>
                </div>

            </div>
            <div class="searcher-footer">
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="button" class="btn me-md-2 btn-sm btn-secondary" @click="closeEdit">
                        <font-awesome-icon icon="fa-solid fa-ban"></font-awesome-icon> &nbsp; cancelar
                    </button>
                    <button type="button" class="btn me-md-2 btn-sm btn-primary" @click="closeEdit">
                        <font-awesome-icon icon="fa-solid fa-check"></font-awesome-icon> &nbsp; confirmar
                    </button>
                </div>
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

const editing = ref(false);
const edit = () => {
    editing.value = true;
    setTimeout(() => {
        searchf.value.focus();
    }, 100);
};
const closeEdit = () => {
    editing.value = false;
};

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
</style>