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
import 'katex/dist/katex.min.css';
import renderMathInElement from "katex/dist/contrib/auto-render.mjs";
	
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