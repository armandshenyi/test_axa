<template>
  <div>
    <h1>Saisie du numéro d'opportunité</h1>
    <input v-model="numeroOpportunite" type="text" placeholder="Numéro d'opportunité" />
    <button @click="afficherFormulaire">Afficher le formulaire</button>

    <div v-if="formulaireAffiche">
      <h2>Formulaire</h2>
      <div class="formulaire">
        <h3>Informations générales</h3>
        <div>
          <label for="referenceDossier">Référence du dossier</label>
          <input id="referenceDossier" v-model="referenceDossier" type="text" placeholder="Référence du dossier" />
        </div>
        <div>
          <label for="numeroSiret">Numéro SIRET SIREN</label>
          <input id="numeroSiret" v-model="numeroSiret" type="text" placeholder="Numéro SIRET SIREN" />
        </div>
        <div>
          <label for="affaire">Affaire</label>
          <input id="affaire" v-model="affaire" type="text" placeholder="Affaire" />
        </div>
        <div>
          <label for="nomClient">Nom du client</label>
          <input id="nomClient" v-model="nomClient" type="text" placeholder="Nom du client" />
        </div>
        <div>
          <label for="intermediaire">Intermédiaire (Nom + Code portefeuille)</label>
          <input id="intermediaire" v-model="intermediaire" type="text"
            placeholder="Intermédiaire (Nom + Code portefeuille)" />
        </div>
        <div>
          <label for="description">Description succincte</label>
          <textarea id="description" v-model="description" placeholder="Description succincte"></textarea>
        </div>
        <div>
          <label for="coassurance">Présence d’une coassurance</label>
          <input type="radio" id="coassurance-oui" v-model="coassurance" value="Oui">
          <label for="coassurance-oui">Oui</label>
          <input type="radio" id="coassurance-non" v-model="coassurance" value="Non">
          <label for="coassurance-non">Non</label>
        </div>
        <div>
          <label for="adresseOperation">Adresse de l'opération</label>
          <input id="adresseOperation" v-model="adresseOperation" type="text" placeholder="Adresse de l'opération" />
        </div>
        <div>
          <label for="planAdresseOperation">Plan de l'adresse de l'opération</label>
          <input id="planAdresseOperation" type="file" accept="image/*" @change="uploadPlan" />
        </div>
        <div>
          <label for="descriptifOperation">Descriptif détaillé de l'opération</label>
          <textarea id="descriptifOperation" v-model="descriptifOperation"
            placeholder="Descriptif détaillé de l'opération"></textarea>
        </div>
        <div>
          <label for="coutOperation">Coût de l'opération (tarif)</label>
          <input id="coutOperation" type="file" accept=".xls,.xlsx" @change="uploadCost" />
        </div>
        <button @click="genererPDF">Générer PDF</button>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
import html2pdf from 'html2pdf.js';
import moment from 'moment';

export default {
  data() {
    return {
      numeroOpportunite: '',
      formulaireAffiche: false,
      referenceDossier: '',
      numeroSiret: '',
      affaire: '',
      nomClient: '',
      intermediaire: '',
      description: '',
      coassurance: '',
      adresseOperation: '',
      planAdresseOperation: null,
      descriptifOperation: '',
      coutOperation: null,
      projets: [
        {
          numeroOpportunite: "123",
          tarifPropose: "1000€",
          documentUrl: "/src/assets/lorem-ipsum.pdf"
        },
        {
          numeroOpportunite: "456",
          tarifPropose: "1500€",
          documentUrl: "/src/assets/lorem-ipsum.pdf"
        }
      ]
    };
  },
  methods: {
    afficherFormulaire() {
      // Afficher le formulaire
      this.formulaireAffiche = true;
    },
    uploadPlan(event) {
      // Gérer l'upload du plan
      this.planAdresseOperation = event.target.files[0];
    },
    uploadCost(event) {
      // Gérer l'upload du coût de l'opération
      this.coutOperation = event.target.files[0];
    },
    genererPDF() {
      const date = moment().format("YYYY-MM-DD_HH-mm");
      const filename = `Projet_de_contrat_${this.numeroOpportunite}_${date}.pdf`;

      const options = {
        margin: 10,
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      const element = document.querySelector('.formulaire').cloneNode(true);
      const projetTable = document.querySelector('table').cloneNode(true);

      // Création d'un conteneur pour inclure le formulaire et le tableau
      const container = document.createElement('div');
      container.appendChild(element);
      container.appendChild(projetTable);

      html2pdf()
        .from(container)
        .set(options)
        .save();
    }
  }
};
</script>

<style scoped>
h1,
h2,
h3 {
  text-align: center;
}

.formulaire {
  margin: 0 auto;
}

.formulaire div {
  margin-bottom: 10px;
}

textarea {
  height: 100px;
  resize: vertical;
}

button {
  display: block;
  margin: 0 auto;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}
</style>
