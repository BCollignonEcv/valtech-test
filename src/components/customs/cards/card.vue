<script>
import { c_image } from '@/components/ui'

export default {
    name: 'card',
    components: { c_image },
    props: {
        title: String,
        subtitle: String,
        description: String,
        img: Object,
    }
};
</script>

<template>
    <div class="card">
        <c_image class="card-img" v-bind="img"></c_image>
        <div class="card-overlay">
            <div class="card-content">
                <template v-if="description">
                    <h2 class="card-subtitle">{{ subtitle }}</h2>
                    <h1 class="card-title">{{ title }}</h1>
                    <p class="card-description">{{ description }}</p>
                </template>
                <template v-else>
                    <h3 class="card-subtitle">{{ subtitle }}</h3>
                    <h2 class="card-title">{{ title }}</h2>
                </template>
            </div>
        </div>
    </div>
</template>

<style>
.card {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    /* margin-bottom: var(--); */
}

.card-img img {
    object-fit: cover;
}

.card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--c-2-50);
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: space-around;
}

.card-content {
    width: 60%;
}

.card-title {
    text-align: center;
    margin-bottom: 1.2rem;
}

h1.card-title {
    font-size: 4rem;
}

h2.card-title {
    font-size: 3rem;
}

.card-subtitle,
.card-description {
    line-height: 2rem;
    font-size: 1.2rem;
    text-align: center;
    letter-spacing: .2ch;
    color: var(--c-1-100);
}

.card-subtitle {
    text-transform: uppercase;
    font-weight: 400;
}

.card-description {
    text-align: center;
    letter-spacing: .2ch;
}
</style>
