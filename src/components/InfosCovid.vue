import InfosCovid from '@/components/InfosCovid.vue';
<template>
  <div>
    
    <div class="viewport">
      <md-toolbar :md-elevation="1">
        <span class="md-title">{{ infosCovid.nom }} au {{ infosCovid.date }}</span>
      </md-toolbar>

      <md-list >
        <!-- <md-subheader>général</md-subheader> -->

        <md-list-item>
          <div class="md-list-item-text">
            <span>gueris {{ infosCovid.gueris }}</span>
            <span>décès {{ infosCovid.deces }}</span>
            <span>décès Ehpad {{  infosCovid.decesEhpad > 0 ? infosCovid.decesEhpad : 'Non renseigné'  }}</span>
          </div>
        </md-list-item>

        <md-divider></md-divider>
        <md-subheader>Hospitalisations</md-subheader>

        <md-list-item>
          <div class="md-list-item-text">
            <span>Hospitalisé {{ infosCovid.hospitalises }}</span>
            <span
              >Nouvelles hospitalisations
              {{ infosCovid.nouvellesHospitalisations }}</span
            >
            <span>Réanimations {{ infosCovid.reanimation }}</span>
            <span
              >Nouvelles réanimations
              {{ infosCovid.nouvellesReanimations }}</span
            >
          </div>
        </md-list-item>
        <md-list-item>
          <span class="source">Source : {{infosCovid.source.nom}}</span>
        </md-list-item>
      </md-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfosCovid",
  props: ["infosCovid"],
};
</script>

<style lang="scss" scoped>
.viewport {
  width: 320px;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  overflow: auto;
  border: 1px solid rgba(#000, 0.12);
}
.source {
  font-size: 10px;
}
</style>
