<template>
    <div
      :key="todo.id"
      class="d-flex justify-content-between align-items-center w-100 p-1"
    >
      <div class="form-check">
        <input v-model="todo.checked" class="form-check-input" type="checkbox" :id="`frmTodoCheck_${todo.id}`" />
        <label :for="`frmTodoCheck_${todo.id}`">{{todo.description}}</label>
      </div>
      <button class="btn btn-sm btn-success text-white" @click="deleteItem" :disabled="todo.checked">X</button>
    </div>
</template>

<script>
export default {
    props:{
        todo : Object,
    },
    setup(props, {emit}) {
        const deleteItem = () => {
            emit('delete-item', props.todo.id)
        }

        return {deleteItem}
    }
}
</script>