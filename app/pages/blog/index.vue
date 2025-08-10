<template>
  <h1>Blog</h1>
  <div class="flex flex-col">
    <NuxtLink v-for="post in posts" :to="'/blog' + post.path" class="mb-4">{{ post.title }}</NuxtLink>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData(() => queryCollection('content').all())
</script>