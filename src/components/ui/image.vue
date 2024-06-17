<script>
export default {
  name: 'image',
  props: { 
    src: String,
    alt: String,
  }
};
</script>

<template>
    <picture>
        <source :srcset="'img/' + src + '-large.webp'" media="(min-width: 1024px)">
        <source :srcset="'img/' + src + '-medium.webp'" media="(min-width: 768px)">
        <source :srcset="'img/' + src + '-small.webp'" media="(min-width: 375px)">
        <img class="img" :src="'img/' + src + '.webp'" :alt="alt">
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
