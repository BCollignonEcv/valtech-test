<script>
import { c_card } from "@/components/customs/cards"

export default {
    name: 'home',
    components: { c_card },
    props: {},
    data() {
        return {
            cities: [
                {
                    title: "valtech_",
                    subtitle: "Front-end",
                    description: "Lorem ipsum dolor sit a met lorem dolor sit a met factius lorem upsun dolor site a met ipsun lorem amet",
                    img: {
                        src: "valtech",
                        alt: "Photo of port"
                    }
                },
                {
                    title: "Venice",
                    subtitle: "Italy",
                    img: {
                        src: "venice",
                        alt: "Photo of a bridge in Venise"
                    }
                }, {
                    title: "Berlin",
                    subtitle: "Germany",
                    img: {
                        src: "berlin",
                        alt: "Photo of Fernsehturm tower in Berlin"
                    }
                }, {
                    title: "Barcelona",
                    subtitle: "Spain",
                    img: {
                        src: "barcelona",
                        alt: "Photo of the Sagrada Familia in Barcelona"
                    }
                }, {
                    title: "Paris",
                    subtitle: "France",
                    img: {
                        src: "paris",
                        alt: "Photo of the Effeil Tower in Paris"
                    }
                }, {
                    title: "Amsterdam",
                    subtitle: "Netherland",
                    img: {
                        src: "amsterdam",
                        alt: "Photo of amsterdam"
                    }
                }, {
                    title: "London",
                    subtitle: "United Kingdom",
                    img: {
                        src: "london",
                        alt: "Photo of Big Ben in London"
                    }
                }
            ]
        }
    }
};

</script>

<template>
    <section class="cardGallery">
      <article v-for="city in cities" class="cardGallery-item">
        <c_card v-bind="city"></c_card>
      </article>
    </section>
</template>

<style scoped>

.cardGallery{
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem; 
  margin: 1rem;
}

.cardGallery-item {
  height: 500px;
}

@media (min-width: 768px) and (max-width: 1024px){
  .cardGallery {
    grid-template-columns: repeat(2, 1fr);
    margin: 1rem 0;
  }

  .cardGallery-item:nth-child(1) {
    grid-column: span 2; 
    height: 700px;
  }

  .cardGallery-item:nth-child(3n - 1) {
    grid-column: span 2; 
  }
}

@media (min-width: 1024px) {
  .cardGallery {
    grid-template-columns: repeat(4, 1fr);
    margin: 1rem 0;
  }

  .cardGallery-item:nth-child(1) {
    grid-column: span 4; 
    height: 700px;
  }

  .cardGallery-item:nth-child(2) {
    grid-column: span 2; 
  }

  .cardGallery-item:nth-child(7) {
    grid-column: span 2; 
  }
}
</style>
