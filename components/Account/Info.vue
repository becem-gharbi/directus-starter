<template>
    <div v-if="user" class="flex items-center gap-3">
        <AccountAvatar class="cursor-pointer h-9 w-9"></AccountAvatar>

        <div class="flex flex-col text-base md:text-sm">
            <n-text strong>{{ user.first_name + " " + user.last_name }}</n-text>
            <n-text :depth="3">{{ user.email }}</n-text>
        </div>
    </div>
</template>

<script setup lang="ts">
const { user } = useDirectusAuth()
</script>