<template>
    <div>
      <h1>This is my test page to test my components</h1>
      <h2>Foreign key component</h2>
      <p>The main idea for this, is create a component that brings easily way to manage foreign keys relation on screen.
        For example, this component can receive a connection of selected objects,
        Receive a data source that bring all objects, and some definitions about how is the key name of  objects 
        and what informations (data fields) need to be showned
      </p>
      <av-foreign-key-select name="meuCampo" :items="selectedTest" @toggle-selection="mudarSelecao" @clear-field="mudarSelecao(false)"/>
    </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      selectedTest:[
        {
           id: 1,
           name: "Adriano",
           available: true,
           selected: false,
        },
        {
           id: 2,
           name: "Barbosa",
           available: false,
           selected: true,
        },
        {
           id: 3,
           name: "Adriano Barbosa",
           available: true,
           selected: true,
        }
      ]
    }
  },
  methods: {
    mudarSelecao(x){
      this.selectedTest.forEach((t)=> {
        // if (t.available) {
          t.selected=x;
        // }
      } );
    }
  }
}
</script>

<style>

</style>
