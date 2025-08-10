<template>
  <div class="flex flex-row justify-between items-center">
    <nav class="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative font-medium text-lg">
      <NuxtLink class="nav-link" to="/">home</NuxtLink>
      <NuxtLink class="nav-link" to="/blog">blog</NuxtLink>
      <NuxtLink class="nav-link" to="/about">about</NuxtLink>
    </nav>
    <DarkMode />
  </div>
</template>

<style>
.nav-link {
  @apply hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 pr-4 m-1 ml-0;
}
</style>