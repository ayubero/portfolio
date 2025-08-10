<template>
  <footer class="mt-8">
    <div class="social-links">
      <a href="https://github.com/ayubero" target="_blank">
        <IconArrowUpRight class="-ml-1" />
        github
      </a>
      <a href="https://www.linkedin.com/in/andres-yubero/" target="_blank">
        <IconArrowUpRight class="-ml-1" />
        linkedin
      </a>
    </div>
    <div class="mt-8">
      © {{ currentYear }} MIT Licensed. Design based on 
      <a href="https://github.com/vercel/examples/tree/main/solutions/blog" target="_blank" class="text-blue-700 dark:text-blue-400">
        Vercel's template.
      </a>
    </div>
  </footer>
</template>

<style>
.social-links {
  @apply flex flex-row;
}

.social-links a {
  @apply flex flex-row mr-4;
}
</style>

<script setup>
import { IconArrowUpRight } from '@tabler/icons-vue';

const currentYear = new Date().getFullYear();
</script>