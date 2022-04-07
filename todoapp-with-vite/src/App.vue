<template>
  <div class="container-flued d-flex justify-content-center mt-3">
    <div
      class="
        p-2
        justify-content-center
        align-items-center
        bg-warning
        rounded
        w-50
        text-white
        shadow
      "
    >
      <div class="d-flex justify-content-center align-items-center w-100 p-1">
        <h4>Todo App</h4>
      </div>
      <addSection :addTodo="addTodo"/>
      <hr />
      <TodoList :todoList="todoList" @delete-item="deleteItem"/>

      <Summary :todoList="todoList"/>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import addSection from "./components/addSection.vue";
import TodoList from "./components/TodoList.vue";
import Summary from "./components/Summary.vue";
export default {
  components: {
    addSection,
    TodoList,
    Summary,
  },
  setup() {
    const todoList = ref([]);

    const addTodo = (val) => {
      const todo = {
        id : new Date().getTime(),
        description : val,
      }
      todoList.value.push(todo)
    };

    const deleteItem = (val) => {
        todoList.value = todoList.value.filter(i => i.id != val)
    }


    return { todoList , addTodo, deleteItem};
  },
};
</script>

<style>
.form-check > .form-check-input:checked {
  background-color: rgb(2, 158, 2);
  border-color: rgb(2, 158, 2);
}
</style>