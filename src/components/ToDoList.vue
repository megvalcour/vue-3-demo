<script setup>
import ToDo from './ToDo.vue';

defineProps({
    todos:  {
        type: Array,
        required: true,
    }
})

</script>

<template>
    <ul class="">
        <li v-for="todo in todos" :key="todo.id" :class="todo.completed ? 'text-emerald-500' : 'text-red-700'">
            <ToDo :id="todo.id" :title="todo.title" :completed="todo.completed" />
        </li>
    </ul>
</template>