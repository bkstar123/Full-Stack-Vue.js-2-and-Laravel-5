<template>
     <div>
       <header-image
         v-if="listing.images[0]"
         :image-url="listing.images[0]"
         @header-clicked="openModal"
         :id="listing.id"
       ></header-image>
       <div class="listing-container">
      <div class="heading">
        <h1>{{ listing.title }}</h1>
        <p>{{ listing.address }}</p>
      </div>
      <hr>
      <div class="about">
        <h3>About this listing</h3>
        <expandable-text>{{ listing.about }}</expandable-text>
      </div>
      <div class="lists">
        <feature-list title="Amenities" :items="listing.amenities">
          <template slot-scope="amenity">
              <i class="fa fa-lg" :class="amenity.item.icon"></i>
              <span>{{ amenity.item.title }}</span>
            </template>
        </feature-list>
        <feature-list title="Prices" :items="listing.prices">
          <template slot-scope="price">
               {{ price.item.title }}: <strong>{{ price.item.value }}</strong>
          </template>
        </feature-list>
      </div>
    </div>
    <modal-window ref="imagemodal">
      <image-carousel :images="listing.images"></image-carousel>
    </modal-window>
  </div>
</template>

<script type="text/javascript">
    import { populateAmenitiesAndPrices } from '../js/helpers';
    import ImageCarousel from '../components/ImageCarousel.vue';
    import ModalWindow from '../components/ModalWindow.vue';
    import HeaderImage from '../components/HeaderImage.vue';
    import FeatureList from '../components/FeatureList.vue';
    import ExpandableText from '../components/ExpandableText.vue';

    let serverData = JSON.parse(window.vuebnb_server_data);
    let model = populateAmenitiesAndPrices(serverData.listing);

    export default {
	    components: {
          ImageCarousel,
          ModalWindow,
          HeaderImage,
          FeatureList,
          ExpandableText
        },
        computed: {
          listing() {
            return populateAmenitiesAndPrices(
              this.$store.getters.getListing(this.$route.params.listing)
            ); 
          }
        },
        methods: {
          assignData({ listing }) {
            Object.assign(this.$data, populateAmenitiesAndPrices(listing));
          },
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