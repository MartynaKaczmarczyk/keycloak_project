// keycloak.js
import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080/auth",
  realm: "keycloak-react-app",
  clientId: "react",
});

export default keycloak;
