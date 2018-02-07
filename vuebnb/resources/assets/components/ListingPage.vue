<template>
  <div>
    <header-image :image-url="images[0]" @header-clicked="openModal"></header-image>
      <div class="container">
  	    <div class="heading">
  		  <h1>{{ title }}</h1>
  		  <p>{{ address }}</p>
  	    </div>
  	    <hr>
  	    <div class="about">
  		  <h3>About this listing</h3>
  		  <expandable-text>{{ about }}</expandable-text>
  	    </div>
  	    <div class="lists">
          <hr>
          <feature-list title="Amenities" :items="amenities">
            <template slot-scope="amenity">
              <i class="fa fa-lg" :class="amenity.item.icon"></i>
              <span>{{ amenity.item.title }}</span>
            </template>
          </feature-list>
          <feature-list title="Prices" :items="prices">
            <template slot-scope="price">
               {{ price.item.title }}: <strong>{{ price.item.value }}</strong>
            </template>
          </feature-list>
        </div>
      </div>
      <modal-window ref="imagemodal">
        <image-carousel :images="images"></image-carousel>
      </modal-window>		
  </div>
</template>

<script type="text/javascript">
	import { populateAmenitiesAndPrices } from '../js/helpers';

	  let serverData = JSON.parse(window.vuebnb_server_data);
    let model = populateAmenitiesAndPrices(serverData.listing);


    import ImageCarousel from '../components/ImageCarousel.vue';
    import ModalWindow from '../components/ModalWindow.vue';
    import HeaderImage from '../components/HeaderImage.vue';
    import FeatureList from '../components/FeatureList.vue';
    import ExpandableText from '../components/ExpandableText.vue';

    export default {
    	data() {
    	  return Object.assign(model, {})	
    	}, 
	    components: {
          ImageCarousel,
          ModalWindow,
          HeaderImage,
          FeatureList,
          ExpandableText
        },
        methods: {
    	  openModal() {
    		this.$refs.imagemodal.modalOpen = true;
    	  }
        }
    }
</script>

<style type="text/css">
.about {
     margin-top: 2em 0;
}

.about h3 {
     font-size: 22px;
}
</style>