import Vue from 'vue';
import "core-js/fn/object/assign";
import {populateAmenitiesAndPrices} from './helpers';
import ImageCarousel from '../components/ImageCarousel.vue';
import ModalWindow from '../components/ModalWindow.vue';
import HeaderImage from '../components/HeaderImage.vue';
import FeatureList from '../components/FeatureList.vue';

let model = JSON.parse(vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

var app = new Vue({
	el: '#app',
	data: Object.assign(model, {
            contracted: true
	    }
	),
	components: {
       ImageCarousel,
       ModalWindow,
       HeaderImage,
       FeatureList
    },
    methods: {
    	openModal() {
    		this.$refs.imagemodal.modalOpen = true;
    	}
    }
});