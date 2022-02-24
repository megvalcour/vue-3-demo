<script setup>

/*  
    TODO: Add emits, v-model support to set completed
    Move to pinia?
*/

defineProps({
    id: {
        type: [String, Number],
        required: true
    },
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
})

</script>

<template>
    <input type="checkbox" :id="`checkbox__${id}`" v-model="completed" />
    <label class="pl-3" :for="`checkbox__${id}`">{{ title }}</label>
</template>