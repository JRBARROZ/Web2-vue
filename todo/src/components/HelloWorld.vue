<template>
  <div class="container">
    <div class="todoHeader">
      <div class="logo">
        <svg width="91" height="24" viewBox="0 0 91 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M46 16.926C57.755 22.763 67.173 24.697 77.355 23.484C91.218 21.832 95.353 7.117 85.867 1.827C87.732 12.954 75.166 13.846 70.139 11.09C63.391 7.39 55.122 -4.75999 45.999 2.37501C36.876 
          -4.75899 28.606 7.39 21.859 11.09C16.833 13.846 4.26701 12.954 6.13101 1.827C-3.35399 7.117 0.78001 21.832 14.643 23.484C24.827 24.698 34.245 22.763 46 16.926Z" 
          fill="black"/>
        </svg>
        <h1 class="title">Be Alpha</h1>
        <p class="desc" ref="descricao">“ Não seja um betinha, faça o que você tem para fazer. ” </p>
      </div>
    </div>
    <div class="todoBody">
      <template v-if="tasks.length > 0">
        <Task v-for="(task, index) in tasks" :id="index" :key="index" :task="task.task" :date="task.date" :status="task.status"/>
      </template>
      <template v-else>
        <p class="lazy">Poxa Alpha, você ainda não adicinou nenhuma atividade =/</p>
      </template>
      <form class="todoForm" @submit="handleSubmit">
        <input type="text" v-model="$store.state.message" placeholder="What are you working on ?"/>
        <button>Add Task</button>
      </form>
    </div>
  </div>
</template>

<script>
  import './HelloWorld.css';
  import Task from '@/components/Task.vue'
  import { mapState } from 'vuex'
  export default {
    name: 'HelloWorld',
    components:{
      Task,
    },
    created() {
      this.$nextTick(function () {
        const text = this.$refs.descricao.innerHTML.split('');
        this.$refs.descricao.innerHTML = '';
        for(let i = 0;i < text.length; i++){
          setTimeout(()=>{
            this.$refs.descricao.innerHTML += text[i];
          }, 45*i)
        }
      })
    },
    computed : mapState(['message', 'tasks']),
    methods:{
      handleSubmit(e){
        e.preventDefault();
        if(this.message.length != 0 ) {
          const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
          const date = new Date();
          const formatedDate = date.toLocaleString('pt-BR');
          taskList.push({
            task: this.message,
            date : formatedDate,
            status:true
          })
          console.log(taskList[0].date);
          localStorage.setItem('taskList', JSON.stringify(taskList));
          this.$store.commit('setMessage', '')
          this.$store.commit('setTasks', localStorage.getItem('taskList'))
        }else{
          console.log('Nulo')
        }        
      }
    }
  }
</script>