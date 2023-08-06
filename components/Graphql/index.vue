<template>
    <div class="flex flex-col items-center text-center gap-4">
        <div class="p-4 bg-green-700 rounded shadow">
            <n-text class="text-xl text-white"> {{ counter }}</n-text>
        </div>

        <n-text>This counter is a singleton updated via Graphql subscriptions</n-text>
        <n-button @click="increment()" :loading="loading" :disabled="loading" type="primary">Increment</n-button>
    </div>
</template>

<script setup lang="ts">
import { graphql } from "../../gql"
import type { GetCounterQuery } from "../../gql/graphql"

const { data: initial } = await useAsyncQuery<GetCounterQuery>(graphql(`
    query GetCounter { counter { value}}
`))

const { result: updated } = useSubscription(graphql(`
    subscription SubscribeCounter {counter_mutated {data {value}}}
`))

const counter = computed(() => updated.value?.counter_mutated?.data?.value || initial.value?.counter?.value)

const { mutate, loading } = useMutation(
    graphql(`
        mutation UpdateCounter($value: Int) {
          update_counter(data: {value:$value}) {value}
        }`))


function increment() {
    if (counter.value) {
        mutate({ value: counter.value + 1 })
    }
}
</script>