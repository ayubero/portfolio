<template>
  <button @click="toggle" aria-label="Dark mode">
    <div :class="{ 'dark-mode-icon': isAnimating }">
      <IconMoon v-if="darkMode" class="h-6 w-6" />
      <IconSun v-else class="h-6 w-6" />
    </div>
  </button>
</template>

<style>
.dark-mode-icon {
  animation: shake 0.3s ease-in-out;
}

@keyframes shake {
  from {
    transform: scale(0.5) rotate(180deg);
  }
  to {
    transform: scale(1) rotate(360deg);
  }
}
</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { IconMoon, IconSun } from '@tabler/icons-vue';

// Is the animation playing?
const isAnimating = ref(false);

type Theme = 'light' | 'dark';

const LOCAL_STORAGE_THEME_KEY = 'theme';
const darkMode = ref(false);

const setTheme = (newTheme: Theme) => {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  darkMode.value = newTheme === 'dark';
};

const toggle = () => {
  // Switch dark mode
  darkMode.value = !darkMode.value;

  // Trigger animation
  isAnimating.value = true;
  setTimeout(function () {
    isAnimating.value = false;
  }, 300); // 300 is equal to the 0.3s that appear in the .dark-mode-icon CSS class
};

onMounted(() => {
  // Find out user's preferred mode
  const isDarkModePreferred = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;

  // Check storage
  const themeFromLocalStorage = localStorage.getItem(
    LOCAL_STORAGE_THEME_KEY,
  ) as Theme;

  // If there is a theme from local storage, we use it
  if (themeFromLocalStorage) {
    setTheme(themeFromLocalStorage);
  } else {
    // Otherwise, we use the user's preferred mode
    setTheme(isDarkModePreferred ? 'dark' : 'light');
  }
});

watch(darkMode, (selected) => {
  setTheme(selected ? 'dark' : 'light');
  if (darkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});
</script>