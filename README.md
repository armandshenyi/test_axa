## Test Technique

Le test technique est composé de 3 fichiers :

1. **Dump de la base de données** (MySQL)
2. **Fichier frontend** réalisé avec Vue.js
3. **Backend** en Node.js réalisé avec Express

#### Base de données (BDD)

Pour importer la base de données, exécutez les commandes SQL dans un invité de commande MySQL ou importez le dump directement.

#### Frontend

Pour installer le projet, exécutez la commande suivante dans un terminal :

```bash
npm run serve
```
#### Backend

Même principe que pour le frontend.

### Explications

#### Backend:

- La connexion entre la base de données et l'API n'a pas fonctionné à cause d'une incompatibilité entre la version de la base de données et Express.
- L'API devait permettre de récupérer et d'ajouter des données, avec toute la logique de vérification gérée par des middlewares.

#### Frontend:

- Tout est réalisé sur une seule page faute de temps pour mettre en place un router.
- Les données sont en dur faute d'API.
- La création de PDF récupère simplement le HTML de la page.
- La génération de PDF est fonctionnelle, mais le nom du fichier n'est pas conforme au format demandé.

## Base de données (BDD)

La base de données est composée de 3 tables :

1. Client
2. Project
3. Document

## Axes d'amélioration

- Revoir l'architecture de la base de données en supprimant la table Document si elle est inutile.
- Mettre en place un router pour avoir 2 pages côté frontend.
- Améliorer le design en utilisant Bootstrap à la place du CSS actuel pour rendre les pages plus similaires à celles de [cette page](https://www.axa.fr/mutuelle-sante/complementaire-sante-en-ligne/#!/vos-informations).
