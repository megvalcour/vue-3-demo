<script setup>
    import { ref, computed, onBeforeMount } from 'vue'

    import { getUsers } from '@/composables/user'
    import { searchFilter } from '@/composables/search'
    import UserCard from './UserCard.vue';

    defineProps({
        title:  {
            type: String,
            required: false,
            default: "List of Users"
        }
    })

    let users = ref([])

    onBeforeMount( async () => {
        users.value = await getUsers()
    })

    let searchTerm = ref("")
    let searchFields = ["name", "email"]

    const filteredUsers = computed(() => users.value.filter((user) => searchFilter(user, searchTerm.value, searchFields)))


    
</script>

<template>
    <section class="max-w-5xl mx-auto my-10">
        <h1>{{ title }}</h1>
        <section>
            <form class="grid grid-cols-1 gap-2">
                <label for="userSearch" class="sr-only">Find a user</label>
                <input class="rounded-md text-xl p-3 mt-3 shadow-sm" id="userSearch" type="search" v-model="searchTerm" placeholder="Find a user" />
            </form>
        </section>
        <section class="grid xl:grid-cols-3 lg:grid-cols-2 gap-6 mt-6">
            <UserCard v-for="user in filteredUsers" :key="user.id" :user="user" />
        </section>
    </section>
</template>