<template>
    <div>
        <div class="header">
            <img alt="Vue logo" class="logo" src="/src/assets/logo-axa-new.svg" width="55" height="55" />
            <td>Bienvenue {{ nomClient }}</td>
            <button class="client-space-btn">Espace client</button>
        </div>
        <br>
        <div class="green-bar">
            <p class="text">Assurance</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nomClient: "Test"
        };
    },
};
</script>
<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: block;
}

.new-devis-btn {
    margin-left: auto;
}

.green-bar {
    background-color: #98bc58;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.text {
    margin: 0;
    padding: 0;
    color: white;
    font-family: Arial, sans-serif;
}
</style>