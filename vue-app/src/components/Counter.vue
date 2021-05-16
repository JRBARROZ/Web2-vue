<template>
  <div>
      {{number}}
      <br>
      <h1>{{nome}}</h1>
      <button @click="handleClick">Goll!!</button>
  </div>
</template>

<script>
  
  export default { 
    data(){
      return {
        nome: 'Jhonatas'
      }
    },
    computed:{
        number(){
            return this.$store.state.number
        }
    },
    methods: {
        handleClick(){
            this.$store.commit('addGol', 10);
        }
    }
  }
</script>

<style>

</style>