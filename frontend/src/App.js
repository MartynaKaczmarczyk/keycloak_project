// App.js
import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import keycloak from "./keycloak"; // Import the single instance
import Nav from "./components/Nav";
import WelcomePage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";
import PrivateRoute from "./helpers/PrivateRoute";

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/secured"
            element={
              <PrivateRoute>
                <SecuredPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ReactKeycloakProvider>
  );
}

export default App;
