<template>
    <div v-if="src">
        <img :src="src" class="object-contain rounded-full shadow">
    </div>
</template>

<script setup lang="ts">
const { user } = useDirectusAuth()

const src = computed(() => {
    if (user.value) {
        const avatar = user.value.avatar as string
        const fallback = `https://ui-avatars.com/api/?name=${user.value.first_name}&background=d4d4d8&bold=true&rounded=true&length=1`
        return avatar || fallback
    }
})
</script>