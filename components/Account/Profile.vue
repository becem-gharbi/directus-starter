<template>
    <div>
        <n-upload class="overflow-hidden w-min mx-auto my-4" list-type="image-card" :max="1" accept="image/*"
            :custom-request="(e) => file = e.file.file">
            <AccountAvatar></AccountAvatar>
        </n-upload>

        <n-form ref="formRef" :model="model" :rules="rules" @submit.prevent="() => onSubmit(handleSubmit)" class="flex-1">
            <n-form-item label="First name" path="firstName">
                <n-input v-model:value="model.firstName"></n-input>
            </n-form-item>

            <n-form-item label="Last name" path="lastName">
                <n-input v-model:value="model.lastName"></n-input>
            </n-form-item>

            <n-button attr-type="submit" :loading="pending" :disabled="pending" type="primary">Update
                profile</n-button>
        </n-form>
    </div>
</template>

<script setup lang="ts">
const { fetchUser, user } = useDirectusAuth()

const model = ref({
    firstName: user.value?.first_name,
    lastName: user.value?.last_name,
    avatar: user.value?.avatar
})

const { formRef, onSubmit, pending, rules } = useNaiveForm()

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
}
const file = ref<File | null>()

async function handleSubmit() {
    try {
        if (file.value) {
            const formData = new FormData();
            formData.append("file", file.value);

            const { id } = await useDirectusRest(uploadFiles(formData)) as { id: string }

            if (model.value.avatar) {
                await useDirectusRest(deleteFile(model.value.avatar as string))
            }

            model.value.avatar = id
        }

        await useDirectusRest(updateMe({
            first_name: model.value.firstName,
            last_name: model.value.lastName,
            avatar: model.value.avatar
        }))

        file.value = null

        await fetchUser()
    }
    catch (e) {
    }
}
</script>