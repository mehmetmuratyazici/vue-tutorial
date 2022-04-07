<template>
  <div class="w-100">
    <TodoListItem v-for="todo in todoList" :todo = "todo" @delete-item="$emit('delete-item', $event)"/>
  </div>
</template>

<script>
import { ref } from "vue"
import TodoListItem from './TodoListItem.vue'
export default {
    components:{
        TodoListItem,
    },
    props:{
        todoList : Array,
    },
}
</script>