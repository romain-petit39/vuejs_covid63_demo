<template>
  <div v-if="dataCentre" class="dataCentre">
    <md-table md-card>
      <md-table-toolbar>
        <h1 class="md-title">{{ dataCentre.nom }}</h1>
      </md-table-toolbar>
      <md-table-row>
        <md-table-head>Addresse</md-table-head>
        <md-table-head>Téléphone</md-table-head>
        <md-table-head>Site Web</md-table-head>
        <md-table-head>Date d'ouverture</md-table-head>
      </md-table-row>
      <md-table-row>
        <md-table-cell
          >{{ dataCentre.adr_num }} {{ dataCentre.adr_voie }}
          {{ dataCentre.com_cp }} {{ dataCentre.com_nom }}</md-table-cell
        >
        <md-table-cell>{{ dataCentre.rdv_tel }}</md-table-cell>
        <md-table-cell>
            <a v-if="dataCentre.rdv_site_web.lenght > 0" :href="dataCentre.rdv_site_web">{{
            dataCentre.rdv_site_web
          }}</a>
          <p v-else>non renseigné</p>
          </md-table-cell
        >
        <md-table-cell>{{ dataCentre.date_ouverture }}</md-table-cell>
      </md-table-row>
    </md-table>

    <div class="viewport">
      <md-toolbar :md-elevation="1">
        <span class="md-title">Horraire d'ouverture</span>
      </md-toolbar>
      <md-list>
        <!-- <md-subheader>général</md-subheader> -->

        <md-list-item>
          <div class="md-list-item-text">
            <span>Lundi {{ dataCentre.rdv_lundi }}</span>
          </div>
        </md-list-item>
        <md-list-item>
          <div class="md-list-item-text">
            <span>Mardi {{ dataCentre.rdv_mardi }}</span>
          </div>
        </md-list-item>
        <md-list-item>
          <div class="md-list-item-text">
            <span>Mercredi {{ dataCentre.rdv_mercredi }}</span>
          </div>
        </md-list-item>
        <md-list-item>
          <div class="md-list-item-text">
            <span>Jeudi {{ dataCentre.rdv_jeudi }}</span>
          </div>
        </md-list-item>
        <md-list-item>
          <div class="md-list-item-text">
            <span>Vendredi {{ dataCentre.rdv_vendredi }}</span>
          </div>
        </md-list-item>
        <md-list-item>
          <div class="md-list-item-text">
            <span>Samedi {{ dataCentre.rdv_samedi }}</span>
          </div>
        </md-list-item>
        <md-list-item>
          <div class="md-list-item-text">
            <span>Dimanche {{ dataCentre.rdv_dimanche }}</span>
          </div>
        </md-list-item>
      </md-list>
    </div>
  </div>
  <div v-else>
    <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CenterDetails",
  beforeCreate() {
    this.$store.dispatch("loadDataCentre", { centre: this.$route.params.gid });
  },
  computed: {
    ...mapState(["dataCentre"]),
  },
};
</script>
<style lang="scss" scoped>
.dataCentre {
  width: 80%;
  margin: auto;
  .md-card {
    margin-top: 20px;

    .md-table-cell {
      text-align: left;
    }
  }
 
  .viewport {
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    overflow: auto;
    border: 1px solid rgba(#000, 0.12);
    margin-top: 20px;
  }
}
</style>
