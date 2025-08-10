<template>
  <ContentRenderer v-if="page" :value="page" />
  <p v-else>Not found</p>
</template>

<script lang="ts" setup>
const route = useRoute();
const post = route.params.post as string;
const { data: page } = await useAsyncData(post, () => {
  return queryCollection('content').path('/' + post).first()
});
</script>

