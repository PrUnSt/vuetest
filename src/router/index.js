import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import tree from '@/components/tree.vue' 
import attredit from '@/components/attredit.vue' 


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tree',
      name: 'tree',
      component: tree
    },
    {
      path: '/attredit',
      name: 'attredit',
      component: attredit
    }
  ]
})
