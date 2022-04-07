<template>
  <div class="w-100 d-flex justify-content-between align-items-center">
    <span class="text-success">{{ complated }} Tamamlanmış</span>
    <span class="text-danger">{{ unComplated }} Tamamlanmamış</span>
  </div>
</template>

<script>
import {computed} from "vue"
export default {
    props:{
        todoList:Array,
    },
    setup(props) {
        const complated = computed(() => props.todoList.filter(i => i.checked).length)
        const unComplated = computed(() => props.todoList.filter(i => !i.checked).length)

        return { complated, unComplated}
    }
}
</script>