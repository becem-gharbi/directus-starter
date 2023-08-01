<template>
    <div v-if="src">
        <img :src="src" class="shadow object-contain rounded-full ring-1">
    </div>
</template>

<script setup lang="ts">
const { user } = useDirectusAuth()
const { directus } = useRuntimeConfig().public;
const baseUrl = directus.rest.baseUrl;

const src = computed(() => {
    if (user.value) {
        if (user.value.avatar) {
            return `${baseUrl}/assets/${user.value.avatar}?fit=cover&width=400&height=400&quality=80`;
        } else {
            return `https://ui-avatars.com/api/?name=${user.value.first_name}&background=d4d4d8&bold=true&rounded=true&length=1`;
        }
    }
})
</script>