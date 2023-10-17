<template>
    <div>
      <av-single-select 
        :itens="[]" 
        hidden-field-name="usuario"
        key-attr="id"
        value-attr="nome"
        @changed="(x)=>console.log(x)"
        @scrolled="(x)=>console.log(x)"
        @typed="(x)=>console.log(x)"
        ></av-single-select>

        <av-single-status-select :selected-item="{id:'Active',name:'Active'}" hidden-field-name="situacao"></av-single-status-select>
    </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
    }
  }
}
</script>

<style>

</style>
