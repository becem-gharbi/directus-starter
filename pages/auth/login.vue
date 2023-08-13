<template>
    <div>
        <n-form ref="formRef" :rules="rules" :model="model" @submit.prevent="() => onSubmit(handleSubmit)">
            <n-form-item label="Email" path="email" :show-require-mark="false">
                <n-input v-model:value="model.email" :input-props="{ autocomplete: 'username' }"></n-input>
            </n-form-item>

            <n-form-item path="password" label="Password" :show-require-mark="false">
                <n-input v-model:value="model.password" type="password" show-password-on="click"
                    :input-props="{ autocomplete: 'current-password' }"></n-input>
            </n-form-item>

            <div class="grid grid-cols-1 gap-4">
                <nuxt-link to="/auth/request-password-reset" class="no-underline">
                    <n-text type="primary">Forgot password?</n-text>
                </nuxt-link>
                <n-button attr-type="submit" block :loading="pending" :disabled="pending" type="primary">Login</n-button>

                <n-button @click="() => loginWithProvider('google')" block>
                    <template #icon>
                        <naive-icon name="logos:google-icon"></naive-icon>
                    </template>
                    Continue with Google
                </n-button>

                <nuxt-link to="/auth/register">
                    <n-button attr-type="button" block>Create Account</n-button>
                </nuxt-link>
            </div>

        </n-form>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
    middleware: "guest",
    auth: false,
    colorMode: "light",
    layout: "auth"
})

const { formRef, rules, pending, apiErrors, onSubmit } = useNaiveForm()
const { login, loginWithProvider } = useDirectusAuth()

const model = ref({
    email: "",
    password: "",
});

apiErrors.value = {
    wrongCredentials: false,
    invalidProvider: false,
}

rules.value = {
    email: [
        {
            required: true,
            message: "Please input your email",
            trigger: "blur",
        },
        {
            type: "email",
            message: "Should be a valid email address"
        },
        {
            message: "Wrong credentials",
            validator: () => !apiErrors.value.wrongCredentials
        },
        {
            message: "Invalid provider",
            validator: () => !apiErrors.value.invalidProvider
        },
    ],
    password: [
        {
            required: true,
            message: "Please input your password",
            trigger: "blur",
        },
    ],
}

async function handleSubmit() {
    try {
        await login(model.value.email, model.value.password)
    }
    catch (e) {
        //@ts-ignore
        const code = e["data"]["errors"][0]["extensions"]["code"]
        apiErrors.value.wrongCredentials = code === "INVALID_CREDENTIALS"
        apiErrors.value.invalidProvider = code === "INVALID_PROVIDER"
    }
}
</script>