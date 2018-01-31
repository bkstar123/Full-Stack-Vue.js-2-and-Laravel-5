import Vue from 'vue';
import "core-js/fn/object/assign"
import sample from './data';

var app = new Vue({
	el: '#app',
	data: Object.assign(sample, {
		headerImageStyle: {
           'background-image': 'url(/images/header.jpg)'
        },
        contracted: true,
        modalOpen: false
	}),
	methods: {
		escapeKeyListener(evt) {
            if (evt.keyCode === 27 && app.modalOpen) {
                app.modalOpen = false;
            }
        }
	},
	watch: {
		modalOpen() {
			let className = 'modal-open';
			if (this.modalOpen) {
				document.body.classList.add(className);
			} else {
				document.body.classList.remove(className);
			}
		}
	},
	created() {
		document.addEventListener('keyup', this.escapeKeyListener);
	},
	destroyed() {
	    document.removeEventListener('keyup', this.escapeKeyListener);	
	}
});