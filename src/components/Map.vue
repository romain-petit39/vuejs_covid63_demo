<template>
  <div id="container" >
    <div id="mapContainer" >
      <l-map :center="center" :zoom="zoom" :options="mapOptions">
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-marker
          v-for="centre of puyDeDomeCenter" v-bind:key="centre.gid"
          :lat-lng="[centre.lat_coor1, centre.long_coor1]"  :icon="icon"
        >
          <l-popup>
            <h2>{{ centre.nom }}</h2>
              <ul>
                <li>Lundi: {{ centre.rdv_lundi}}</li>
                <li>Mardi: {{ centre.rdv_mardi}}</li>
                <li>Mercredi: {{ centre.rdv_mercredi}}</li>
                <li>Jeudi: {{ centre.rdv_jeudi}}</li>
                <li>Vendredi: {{ centre.rdv_vendredi}}</li>
                <li>Samedi: {{ centre.rdv_samedi}}</li>
                <li>Dimanche: {{ centre.rdv_dimanche}}</li>
              </ul>
              <md-button class="md-dense md-primary">
                <router-link :to="{ name:'CenterDetails', params: {gid: centre.gid}}">Plus d'infos sur le centre</router-link>
              </md-button>
          </l-popup>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<script>
import { latLng, icon } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import { mapGetters } from "vuex";
import * as iconMarker from "../assets/map-pin.png";


export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  data() {
    return {
      zoom: 10,
      center: latLng(45.6833, 3.0833),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      mapOptions: {
        zoomSnap: 0.5,
      },
      icon: icon({
        iconUrl: iconMarker,
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
    };
  },
 computed: {
   ...mapGetters(['puyDeDomeCenter'])
 },
};
</script>

<style scoped lang="scss">
  #container {
    height: 500px;
    width: 80%;
    margin: auto;

    #mapContainer {
      height: 100%;
      width: 100%;

      ul {
        li {
          list-style: none;
        }
      }
    }
  }
</style>
