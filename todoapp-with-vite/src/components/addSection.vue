<template>
  <div class="d-flex justify-content-center align-items-center w-100 p-1">
    <input
      class="form-control"
      type="text"
      id="frmTodoText"
      placeholder="Yapılacak bir eylem girin .."
      @keypress.enter="addItem"
    />
  </div>
</template>

<script>
export default {
    props:{
        addTodo : Function,
    },
    setup(props, context) {
        const addItem = (event) => {
            props.addTodo(event.target.value)
            event.target.value = ''
        }
        return {addItem}
    }
}
</script>