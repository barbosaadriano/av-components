<template>
    <div>
      <av-single-select :itens="[{id:1,nome:'fulano'},{id:2,nome:'ciclano'}]" hidden-field-name="usuario"></av-single-select>
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
