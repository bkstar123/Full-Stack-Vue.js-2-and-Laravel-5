var app = new Vue({
	el: '#app',
	data: {
		title: sample.title,
		address: sample.address,
		about: sample.about,
		amenities: sample.amenities,
        prices: sample.prices,
		headerImageStyle: {
           'background-image': 'url(sample/header.jpg)'
        },
        contracted: true,
        modalOpen: false
	},
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