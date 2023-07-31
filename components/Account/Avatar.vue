<template>
    <div v-if="src">
        <img :src="src" class="object-contain rounded-full ring-2">
    </div>
</template>

<script setup lang="ts">
const { user } = useDirectusAuth()

const src = computed(() => {
    if (user.value) {
        const avatar = user.value.avatar as string
        return avatar || `https://ui-avatars.com/api/?name=${user.value.first_name}&background=random&bold=true&rounded=true`
    }
})
</script>