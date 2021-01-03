import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import PostList from './PostList.vue';
import Post from './Post.vue';
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo';
import TopicList from './TopicList.vue'
import AuthorPostList from './AuthorPostList.vue'


window.Vue = Vue;
Vue.use(VueRouter);



const routes = [
    {
        path: '/',
        name: 'index',
        component: PostList
    },
    {
        path: '/post/:id',
        name: 'post',
        component: Post
    },
    {
        path: '/topic/:slug',
        name: 'topic',
        component: TopicList
    },
    {
        path: '/author/:id',
        name: 'author',
        component: AuthorPostList
    },
    {
        path: '*',
        name: '404',
        component: {
            template: '<div>Not Found</div>'
        }
    }

];

Vue.use(VueApollo);
const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: 'http://127.0.0.1:8000/graphql'
  });

  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
  });

const router = new VueRouter({
    mode: 'history',
    routes
});

import moment from 'moment';

Vue.filter("timeago", value => moment(value).fromNow());
Vue.filter("longDate", value => moment(value).format("MMMM Do, YYYY"));
const app = new Vue({
    el: '#app',
    router,
    apolloProvider
});
