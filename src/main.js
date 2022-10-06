import Vue from 'vue'
import App from './App.vue'
//import { createRouter, createWebHistory } from 'vue-router';
import VueRouter from "vue-router";
import Home from '@/views/Home.vue';
import Users from '@/views/Users.vue';
import Posts from '@/views/Posts.vue';
import CreatePost from '@/views/CreatePost.vue';
import PostItem from '@/views/PostItem.vue';
import NotFound from '@/views/NotFound.vue';
import PostItemAsChild from '@/views/PostItemAsChild.vue';
import MultipleRouterCreatePostFooter from '@/views/MultipleRouterCreatePostFooter.vue';
import MultipleRouterPostsFooter from '@/views/MultipleRouterPostsFooter.vue';
import Brazil from '@/views/Brazil.vue';

Vue.config.productionTip = false
// register the vue router
Vue.use(VueRouter)


/* 
create rouite record for HOME and ABOUT
-slash '/' is the root url
-we will give a name of 'Home'
- and tell the router to render HOME component when the home is visited

*/
// const router = VueRouter.createRouter({
//   history: VueRouter.createWebHistory(),
//   routes: [
//     {
//       path: '/', name: 'Home', component: Home
//     },
//     {
//       path: '/about', name: 'About', component: About
//     }
//   ]
// })

// https://stackoverflow.com/questions/70346829/eslint-vue-multiword-components
//ROUTING SETUP | VueJS | Learning the Basics
//ROUTE NAVIGATION & PARAMETERS | VueJS | Learning the Basics

//setup router done we need to load our router component in App.vue file
const router = new VueRouter({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes: [
    {
      path: '/', name: 'home', component: Home
    },
    {
      path: '/users/:id', name: 'users', component: Users
    },
    {
      path: '/posts',
      name: 'posts',
      components: {
        default: Posts,
        footer: MultipleRouterPostsFooter,
      },
      children: [
        {
          path: '', component: PostItemAsChild
        },
        {
          path: '/posts/postchild', component: PostItemAsChild
        },
      ],
    },
    {
      path: '/posts/:id', component: PostItem
    },
    {
      path: '/brazil', name: 'brazil', component: Brazil
    },
    {
      path: '/createpost',
      name: 'createpost',
      components: {
        default: CreatePost,
        footer: MultipleRouterCreatePostFooter,
      },
    },
    { path: '/:NotFound(.*)', component: NotFound }
  ],
});

// not working this part????? 
// router.beforeEach((to, from) => {
//   console.log("to which route", to)
//   console.log("from which route you are coming", from)
//   return true
// });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

export default router;