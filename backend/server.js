const express = require('express');
const session = require('express-session');
const Keycloak = require('keycloak-connect');
const fs = require('fs');
const path = require('path');

const app = express();
const memoryStore = new session.MemoryStore();

// Ścieżka do pliku keycloak.json
const keycloakConfigPath = path.join(__dirname, 'keycloak.json');

// Wczytaj zawartość pliku keycloak.json
const keycloakConfig = JSON.parse(fs.readFileSync(keycloakConfigPath, 'utf-8'));

// Konfiguracja Keycloak
const keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);

app.use(session({
    secret: 'secret1',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
}));

app.use(keycloak.middleware({ logout: '/logout' }));

// Ścieżka do logowania
app.get('/login', keycloak.protect(), (req, res) => {
    res.redirect('/');
});

// Ścieżka główna
app.get('/', (req, res) => {
    res.send('Witaj w aplikacji zabezpieczonej przez Keycloak!');
});

const server = app.listen(5000, () => {
    console.log('Server started on http://localhost:5000');
});
