import Vue from 'vue';
import "core-js/fn/object/assign";
import App from '../components/App.vue';
import router from './router';
import store from './store';

var app = new Vue({
	el: '#app',
	router,
	store,
    render: h => h(App)
});