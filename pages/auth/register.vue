<template>
    <div>
        <n-result v-if="success" status="success" title="Registration completed" description="Welcome on board">
            <template #footer>
                <nuxt-link to="/auth/login" class="no-underline">
                    <n-button type="primary">Login to my account</n-button>
                </nuxt-link>
            </template>
        </n-result>

        <div v-else>
            <n-form ref="formRef" :model="model" :rules="rules" @submit.prevent="() => onSubmit(handleSubmit)">
                <n-form-item label="First name" path="firstName">
                    <n-input v-model:value="model.firstName"></n-input>
                </n-form-item>

                <n-form-item label="Last name" path="lastName">
                    <n-input v-model:value="model.lastName"></n-input>
                </n-form-item>

                <n-form-item label="Email" path="email">
                    <n-input v-model:value="model.email" :input-props="{ autocomplete: 'username' }"></n-input>
                </n-form-item>

                <n-form-item label="Password" path="password">
                    <n-input v-model:value="model.password" type="password" show-password-on="click"
                        :input-props="{ autocomplete: 'new-password' }"></n-input>
                </n-form-item>

                <n-form-item label="Confirm Password" path="passwordConfirm">
                    <n-input v-model:value="model.passwordConfirm" type="password" show-password-on="click"
                        :input-props="{ autocomplete: 'new-password' }"></n-input>
                </n-form-item>

                <n-button type="primary" attr-type="submit" block :disabled="pending" :loading="pending">Register</n-button>
            </n-form>
        </div>
    </div>
</template>


<script  setup lang="ts">

definePageMeta({
    middleware: "guest",
    auth: false,
    colorMode: "light",
    layout: "auth"
})

const { formRef, pending, rules, onSubmit, apiErrors } = useNaiveForm()
const success = ref(false)

apiErrors.value = {
    emailAlreadyExists: false,
    forbidden: false
}

const model = ref({
    email: "",
    password: "",
    passwordConfirm: "",
    firstName: "",
    lastName: ""
});

rules.value = {
    firstName: [
        {
            required: true,
            message: "Please input your first name",
            trigger: "blur",
        },
    ],
    lastName: [
        {
            required: true,
            message: "Please input your last name",
            trigger: "blur",
        },
    ],
    email: [
        {
            required: true,
            message: "Please input your email",
            trigger: "blur",
        },
        {
            validator: () => !apiErrors.value.emailAlreadyExists,
            message: "Email already exists",
            trigger: "input"
        },
        {
            validator: () => !apiErrors.value.forbidden,
            message: "Permission not granted",
            trigger: "input"
        },
        {
            type: "email",
            message: "Should be a valid email address"
        },
    ],
    password: [
        {
            required: true,
            message: "Please input your password",
            trigger: "blur",
        },
        {
            validator: (rule, value) => /(?=.*[a-z])(?=.*[0-9])(?=.{6,})/.test(value),
            message: "At least 6 characters, 1 lowercase, 1 number",
            trigger: "blur"
        }
    ],
    passwordConfirm: [
        {
            validator: (rule, value) => value === model.value.password,
            message: "Passwords do not match",
            trigger: "blur",
        },
    ],
};

async function handleSubmit() {
    const { defaultRoleId } = useRuntimeConfig().public

    try {
        await useDirectusRest(createUser({
            email: model.value.email,
            password: model.value.password,
            first_name: model.value.firstName,
            last_name: model.value.lastName,
            role: defaultRoleId
        }))

        success.value = true
    }
    catch (e) {
        //@ts-ignore
        const code = e["errors"][0]["extensions"]["code"]
        apiErrors.value.forbidden = code === "FORBIDDEN"
        apiErrors.value.emailAlreadyExists = code === "RECORD_NOT_UNIQUE"
    }
}
</script>