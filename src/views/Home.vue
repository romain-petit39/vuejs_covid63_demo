<template>
  <div class="home">
    <div class="infos">
      <h1>Les dernières infos sur le covid</h1>
      <div class="cardsInfos" v-if="data63 && dataFr">
        <InfosCovid :infosCovid="data63" />
        <InfosCovid :infosCovid="dataFr" />
      </div>
      <div v-else>
        <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
      </div>
    </div>
    <div class="map">
      <h1>Les centres de vaccinations dans le puy de Dôme</h1>
      <Map :puyDeDomeCenter="dataCentres"/>
    </div>
  </div>
</template>

<script>
import InfosCovid from "@/components/InfosCovid.vue";
import Map from "@/components/Map.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    InfosCovid,
    Map,
  },
  beforeCreate() {
    this.$store.dispatch("loadData63");
    this.$store.dispatch("loadDataFr");
    this.$store.dispatch("loadDataCentres");
  },
  computed: {
    ...mapState(["data63", "dataFr","dataCentres"]),
  },
};
</script>

<style lang="scss" scoped>
.cardsInfos {
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: auto;
}
</style>
