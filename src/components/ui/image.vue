<script>

export default {
  name: 'image',
  props: { 
    path: String,
    description: String,
  }
};
</script>

<template>
    <picture>
        <source :srcset="'img/' + path + '-large.webp'" media="(min-width: 1024px)">
        <source :srcset="'img/' + path + '-medium.webp'" media="(min-width: 768px)">
        <source :srcset="'img/' + path + '-small.webp'" media="(min-width: 375px)">
        <img class="img" :src="'img/' + path + '.webp'" :alt="description">
    </picture>
</template>

<style scoped>
picture {
    display: block;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

img {
    height: 100%;
    width: 100%;
}
</style>
