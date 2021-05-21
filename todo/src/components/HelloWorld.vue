<template>
    <div class="flex flex-col content-center w-full h-auto text-center mx-auto border-dashed border-b-2 ">
      <div class="flex flex-col gap-2 items-center mb-4">
        <svg class="fill-white animate-shake" width="91" height="24" viewBox="0 0 91 24" xmlns="http://www.w3.org/2000/svg">
          <path  d="M46 16.926C57.755 22.763 67.173 24.697 77.355 23.484C91.218 21.832 95.353 7.117 85.867 1.827C87.732 12.954 75.166 13.846 70.139 11.09C63.391 7.39 55.122 -4.75999 45.999 2.37501C36.876 
          -4.75899 28.606 7.39 21.859 11.09C16.833 13.846 4.26701 12.954 6.13101 1.827C-3.35399 7.117 0.78001 21.832 14.643 23.484C24.827 24.698 34.245 22.763 46 16.926Z" 
          />
        </svg>
        <h1 class="title">Be Alpha</h1>
        <p class=" text-xs italic" ref="descricao">“ Não seja um betinha, faça o que você tem para fazer. ” </p>
      </div>
    </div>
    <div class="flex flex-col mt-4 w-full pt-2 px-4 items-cent rounded-md bg-white bg-opacity-10">
      <template v-if="tasks && tasks.length > 0">
        <Task v-for="(task, index) in tasks" :id="index" :key="index" :task="task.task" :date="task.date" :status="task.status"/>
      </template>
      <template v-else>
        <p class="max-w-xs text-xs text-center m-auto animate-slideBottom">Poxa Alpha, você ainda não adicinou nenhuma atividade =/</p>
      </template>
      <form class="flex w-full gap-2 mt-8 mb-4" @submit="handleSubmit">
        <input class=" border-solid border-4 border-transparent hover:border-black 
        hover:border-opacity-30 hover:shadow-btn focus:outline-none focus:shadow-btn outline-none w-full border-none text-s text-todoGray font-nunito italic p-1 rounded-sm font-bold placeholder-gray-200" type="text" v-model="$store.state.message" placeholder="What are you working on ?"/>
        <button class=" min-w-max px-3 
        text-xs text-center outline-none cursor-pointer font-lobster 
        transition-all rounded-sm bg-todoGray overflow-hidden border-solid border-2 border-transparent hover:border-black 
        hover:border-opacity-30 hover:shadow-btn focus:outline-none">Add Task</button>
      </form>
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
          //[]
          const taskList = JSON.parse(localStorage.getItem('taskList')) || [];
          console.log(taskList);
          const date = new Date();
          const formatedDate = date.toLocaleString('pt-BR');
          taskList.push({
            task: this.message,
            date : formatedDate,
            status: true
          })
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