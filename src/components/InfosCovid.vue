import InfosCovid from '@/components/InfosCovid.vue';
<template>
  <div>
    <md-card >
      <md-card-header>
        <div class="md-title">
          {{ infosCovid.nom }} au {{ infosCovid.date }}
        </div>
      </md-card-header>
      <md-divider></md-divider>
      <md-card-content class="card-content">
        <span>guéris : {{ infosCovid.gueris }}</span>
        <span>décès : {{ infosCovid.deces }}</span>
        <span
          >décès Ehpad :
          {{
            infosCovid.decesEhpad > 0 ? infosCovid.decesEhpad : "Non renseigné"
          }}</span
        >
        <md-divider></md-divider>

        <span>Hospitalisés : {{ infosCovid.hospitalises }}</span>
            <span
              >Nouvelles hospitalisations :
              {{ infosCovid.nouvellesHospitalisations }}</span
            >
            <span>Réanimations : {{ infosCovid.reanimation }}</span>
            <span
              >Nouvelles réanimations :
              {{ infosCovid.nouvellesReanimations }}</span
            >
            <md-divider></md-divider>
            <span class="source">Source : {{infosCovid.source.nom}}</span>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "InfosCovid",
  props: ["infosCovid"],
};
</script>

<style lang="scss" scoped>
.md-card {
width: 400px;
.card-content {
      display: flex;
    flex-direction: column;
    padding: 10px 16px 0px;
}
}

.source {
  font-size: 10px;
  align-self: flex-start;
}
</style>
