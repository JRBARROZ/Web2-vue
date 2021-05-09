<template>
  <div>
      {{number}}
      <br>
      <button @click="handleClick">Goll!!</button>
  </div>
</template>

<script>
  
  export default { 
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