<template>
    <naive-navbar :routes="routes" drawer-closable>
        <template #start>
            <NuxtLink to="/" class="flex items-center gap-3">
                <NaiveIcon name="simple-icons:directus" :size="25" icon-color="#6644fe"></NaiveIcon>
                <n-text strong>Directus</n-text>
            </NuxtLink>
        </template>

        <template #end v-if="!isMobileOrTablet">
            <n-dropdown trigger="click" :options="dropdownOptions" :style="{ padding: '8px', minWidth: '200px' }"
                @select="handleSelect">
                <AccountAvatar class="cursor-pointer h-8 w-8"></AccountAvatar>
            </n-dropdown>
        </template>

        <template #drawer-header>
            <AccountInfo class="mx-2" />
        </template>

        <template #drawer-footer>
            <n-button secondary block @click="() => logout()">
                Logout
            </n-button>
        </template>
    </naive-navbar>
</template>

<script setup lang="ts">
import { NaiveIcon, AccountInfo } from "#components"
import { NavbarRoute } from "@bg-dev/nuxt-naiveui"
import type { DropdownOption } from "naive-ui"

const { logout } = useDirectusAuth()
const { isMobileOrTablet } = useNaiveDevice()

const routes = ref<NavbarRoute[]>([])

if (isMobileOrTablet) {
    routes.value.push({
        label: "Account",
        path: "/account",
        icon: 'ph:user'
    })
}

const dropdownOptions = ref<DropdownOption[]>([
    {
        key: 'header',
        type: 'render',
        render: () => h(AccountInfo)
    },
    {
        key: 'divider',
        type: 'divider',
    },
    {
        label: 'Account',
        key: 'account',
        icon: () => h(NaiveIcon, { name: 'ph:user' }),
    },
    {
        label: 'Logout',
        key: 'logout',
        icon: () => h(NaiveIcon, { name: 'ph:sign-out' }),
    }
])


async function handleSelect(key: string) {
    if (key === 'logout') {
        return logout()
    }
    else if (key === 'account') {
        return navigateTo('/account')
    }
}
</script>