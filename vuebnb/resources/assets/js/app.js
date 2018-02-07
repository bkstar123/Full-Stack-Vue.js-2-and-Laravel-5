import Vue from 'vue';
import "core-js/fn/object/assign";
import App from '../components/App.vue';
import router from './router';

var app = new Vue({
	el: '#app',
	router,
    render: h => h(App)
});