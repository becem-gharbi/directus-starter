<template>
  <footer :style="{ backgroundColor: naiveTheme.bodyColor }" class="text-gray-500">
    <nuxt-link :to="repository" target="_blank">
      <span class="flex gap-1 items-start">
        <naive-icon name="tabler:brand-github" :size="18" />
        <n-text class="text-gray-500">v{{ version }}</n-text>
      </span>
    </nuxt-link>
  </footer>
</template>

<script setup>
import { version, repository } from '../../package.json'
const naiveTheme = useThemeVars()
</script>

<style scoped>
footer {
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 100%;
}
</style>
