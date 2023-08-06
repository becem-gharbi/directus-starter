<template>
    <div class="flex flex-col items-center text-center gap-4">
        <div class="p-4 bg-green-700 rounded shadow">
            <n-text class="text-xl text-white"> {{ counter || 'NaN' }}</n-text>
        </div>

        <n-text>This counter is a singleton updated via Graphql subscriptions</n-text>
        <n-button @click="increment()" :loading="loading" :disabled="loading || !counter"
            type="primary">Increment</n-button>
    </div>
</template>

<script setup>
import { graphql } from "../../gql"

const { result: initial } = useQuery(graphql(`
    query GetCounter { counter { value}}
`))

const { result: updated } = useSubscription(graphql(`
    subscription SubscribeCounter {counter_mutated {data {value}}}
`))

const counter = computed(() => updated.value?.counter_mutated.data.value || initial.value?.counter.value)

const { mutate, loading } = useMutation(
    graphql(`
        mutation UpdateCounter($value: Int) {
          update_counter(data: {value:$value}) {value}
        }`))


function increment() {
    mutate({ value: counter.value + 1 })
}

</script>