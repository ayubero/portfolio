/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './nuxt.config.{js,ts}',
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
  ],
  darkMode: 'class',
}