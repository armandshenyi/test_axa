<template>
  <div>
    <div class="header">
      <h1>Liste des projets/devis</h1>
      <button @click="nouveauDevis">Nouveau devis</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Numéro d'opportunité</th>
          <th>Tarif proposé</th>
          <th>Document</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(projet, index) in projets" :key="index">
          <td>{{ projet.numeroOpportunite }}</td>
          <td>{{ projet.tarifPropose }}</td>
          <td><a :href="projet.documentUrl" target="_blank">Voir le document</a></td>
        </tr>
        <tr>
          <td>
            <p>Total : {{ total }}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  computed: {
    total() {
      let total = 0;
      for (let projet of this.projets) {
        total += parseFloat(projet.tarifPropose);
      }
      return total + "€";
    }
  },
  methods: {
    nouveauDevis() {
      // Redirection vers l'écran 2 pour créer un nouveau devis
      this.$router.push({ name: "NouveauDevis" });
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

table {
  margin: 0 auto;
}

th,
td {
  text-align: center;
}

button {
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

.total {
  text-align: right;
  margin-top: 20px;
}

table {
  margin-top: 20px;
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>
