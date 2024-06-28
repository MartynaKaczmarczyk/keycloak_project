const express = require('express');
const app = express();
const session = require('express-session');
const Keycloak = require('keycloak-connect');
const memoryStore = new session.MemoryStore();
const path = require('path');

// Adjusted path to keycloak.json using path.resolve()
const keycloakConfig = path.resolve(__dirname, 'keycloak.json');

// Keycloak configuration
const keycloak = new Keycloak(keycloakConfig);

app.use(session({
    secret: 'secret1',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
}));

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

app.use(keycloak.middleware({ logout: '/logout' }));

app.get('/', (req, res) => {
    console.log('Hello');
    res.send('Hello');
});

app.get('/home', keycloak.protect(), (req, res) => {
    console.log('Home accessed..');
    res.send('Welcome to Home');
});

app.get('/notdefined', keycloak.protect('realm:keycloak-app-react'), (req, res) => {
    console.log("not defined")
    res.send("This resource is not defined in keycloak. User with app-user role can access this API")
});

const server = app.listen(5000, function () {
    console.log(`Example app listening at http://localhost:5000`);
});
