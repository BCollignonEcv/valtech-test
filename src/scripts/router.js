import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '@/pages/home.vue'

const routes = [
    {
        path: '/',
        name: "home",
        component: Home,
        meta: {
            title: 'Valtech test',
            metaDescription: 'Site test de recrutement - Valtech'
        }
    },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

router.afterEach((to) => {
    // Set document title
    if (to.meta.title) {
      document.title = to.meta.title
    }
  
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      if (to.meta.metaDescription) {
        metaDescription.setAttribute('content', to.meta.metaDescription)
      } else {
        metaDescription.setAttribute('content', '')
      }
    }
  })

export default router;