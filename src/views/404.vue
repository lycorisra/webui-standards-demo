<template>
    <div class="notFound">
        <h5 class="title">Not Found</h5>
        <p>
            <span>current route:</span>
            <span>{{ route.path }}</span>
        </p>
    </div>
</template>

<script lang="ts" setup>
import {useRoute} from 'vue-router'

const route = useRoute()
</script>