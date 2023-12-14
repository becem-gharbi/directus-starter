<template>
  <div class="page">
    <Navbar />
    <div v-if="user" class="flex-1 container mx-auto my-8 px-4">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
const { user } = useDirectusAuth()
</script>
