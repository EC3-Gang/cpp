<script setup>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="center">Made with ♥ and Vuepress</div>
    </template>
  </ParentLayout>
</template>

<script>
import 'https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css';
import renderMathInElement from "https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/contrib/auto-render.mjs";
	
export default {
	name: 'theme',
	mounted() {
		renderMathInElement(document.body);
	}
}
</script>

<style lang="css">
.center {
  text-align: center;
}
</style>