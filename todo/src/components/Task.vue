<template>
    <div class="flex my-2 w-full h-12 bg-gray-100 rounded-md task" :class="status === false ? 'finished' : ''">
        <div class="task-header" >
            <template v-if="status === false">
                <svg width="28" height="28" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path @click="handleDelete" :id=id fill-rule="evenodd" clip-rule="evenodd" d="M7 0.994141C8.53516 0.994141 10.0699 1.58163 11.2441 2.75586C13.5927 5.10443 13.5927 8.89557 11.2441 11.2441C8.89558 13.5927 5.10442 13.5927 2.75586 11.2441C0.407311 8.89557 0.407304 5.10443 2.75586 2.75586C3.93014 1.58163 5.46484 0.994141 7 0.994141ZM9.45313 4.02148C9.32309 4.02561 9.19978 4.08026 9.10938 4.17383L6.99609 6.29492L4.875 4.17969C4.78014 4.08375 4.65054 4.03022 4.51563 4.03125C4.06949 4.03486 3.85106 4.57662 4.16992 4.88867L6.29102 7.00391L4.17578 9.125C3.68495 9.59625 4.41156 10.3229 4.88281 9.83203L6.99805 7.70898L9.11914 9.82422C9.5904 10.3151 10.317 9.58844 9.82617 9.11719L7.70508 7.00195L9.81836 4.88086C10.148 4.56239 9.9112 4.00516 9.45313 4.02148Z" fill="black"/>
                </svg>
            </template>
            <template v-else>
                <svg width="25" height="25" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path  @click="handleClick" :id=id d="M43 0C19.3 0 0 19.3 0 43C0 66.7 19.3 86 43 86C66.7 86 86 66.7 86 43C86 19.3 66.7 0 43 0ZM63 35.2L39 59.2C38.2 60 37.2 60.4 36.2 60.4C35.2 60.4 34.2 60 33.4 59.2L21 47C19.4 45.4 19.4 42.9 21 41.3C22.6 39.7 25.1 39.7 26.7 41.3L36.1 50.7L57.3 29.5C58.9 27.9 61.4 27.9 63 29.5C64.5 31.1 64.5 33.6 63 35.2Z" fill="black"/>
                </svg>
            </template>
            <div>
                <h1 class=" text-todoGray text-sm relative font-bold mt-2">{{task}}</h1>
                <p>{{date}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    import './Task.css'
    export default {
        props: ['task', 'date', 'id', 'status'],
        methods: {
            handleClick({target}){
                const tasks = JSON.parse(localStorage.getItem('taskList'));
                const date = new Date();
                const formatedDate = date.toLocaleString('pt-BR').slice(0, 19);
                tasks[target.id].status = false;
                tasks[target.id].date = `${formatedDate} - Finalizada`;
                localStorage.setItem('taskList', JSON.stringify(tasks));
                this.$store.commit('setTasks', localStorage.getItem('taskList'))
            },
            handleDelete({target}){
                if(confirm('Você realmente deseja deletar ?')){
                    const tasks = JSON.parse(localStorage.getItem('taskList'));
                    tasks.splice(target.id, 1);
                    localStorage.setItem('taskList', JSON.stringify(tasks));
                    this.$store.commit('setTasks', localStorage.getItem('taskList'))
                }else{
                    console.log('Urfa!')
                }
            }
        }
        
    }
</script>
