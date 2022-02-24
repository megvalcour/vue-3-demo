<script setup>
import { ref } from 'vue'
import { getGoogleMapURLFromCoordinates } from '@/composables/googleMaps'
import { getUserItems } from '@/composables/user'
import ToDoList from './ToDoList.vue'
import BaseModal from './layout/BaseModal.vue'

defineProps({
    user: {
        type: Object,
        required: true
    }
})

let todos = ref([])
const getTodos = async (user) => {
    todos.value = await getUserItems(user.id)
}

</script>

<template>
    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-0 border-l-8 hover:border-l-10 border-emerald-500 pl-6 group hover:-translate-y-1 hover:shadow-lg transition-transform flex flex-col relative">
        <h2 class="text-lg font-semibold">{{ user.name }}</h2>
        <div class="grow">
            <p class="text-neutral-400">{{ user.email }}</p>
            <address class="not-italic">
                From <a :href="getGoogleMapURLFromCoordinates(user.address.geo.lat, user.address.geo.lng)">{{ user.address.city }}</a>
            </address>
            <blockquote class="bg-emerald-50 text-emerald-800 p-2 mt-3 italic rounded-lg">
            {{ user.company.catchPhrase }}
            </blockquote>
        </div>
        <button class="button mt-6 after:absolute after:w-full after:h-full after:top-0 after:left-0" @click="getTodos(user)">{{user.name}}'s Tasks</button>
    </div>
    <BaseModal :id="`userModal-${user.id}`" :show="todos.length > 0" @close="todos = []">
        <h2>{{ user.name }}'s Todos</h2>
        <ToDoList :todos="todos"/>
    </BaseModal>
</template>
