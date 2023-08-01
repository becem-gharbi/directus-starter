<template>
  <NaiveConfig :theme-config="themeConfig">

    <ClientOnly>
      <n-notification-provider placement="bottom-right">
        <NotificationNetwork />
      </n-notification-provider>
    </ClientOnly>

    <NuxtLoadingIndicator :color="themeConfig.light?.common?.primaryColor" />

    <n-message-provider>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </n-message-provider>

  </NaiveConfig>
</template>

<script setup lang="ts">
import { ThemeConfig } from "@bg-dev/nuxt-naiveui"
import { theme } from "#tailwind-config";

const themeConfig = ref<ThemeConfig>({
  shared: {
    common: {
      fontFamily: theme.fontFamily.sans.join(","),
      lineHeight: theme.lineHeight.normal,
      borderRadius: "6px"
    },
    Form: {
      feedbackPadding: theme.padding[2],
    },
  },

  light: {
    common: {
      primaryColor: theme.colors.violet[600],
      primaryColorHover: theme.colors.violet[500],
      primaryColorPressed: theme.colors.violet[700],
      borderColor: theme.colors.gray[300],
    },
    Card: {
      borderColor: theme.colors.gray[300]
    }
  },

  dark: {
    common: {
      primaryColor: theme.colors.violet[500],
      primaryColorHover: theme.colors.violet[400],
      primaryColorPressed: theme.colors.violet[600],
      borderColor: theme.colors.gray[800],
    },
    Card: {
      borderColor: theme.colors.gray[800]
    }
  },
})
</script>
