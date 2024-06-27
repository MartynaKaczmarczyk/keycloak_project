### Uruchamianie aplikacji z użyciem Docker Compose
Najpierw pobrałam keycloak kontener:
```
docker run -p 8080:8080 -e KEYCLOAK_USER=<username> -e KEYCLOAK_PASSWORD=<password> quay.io/keycloak/keycloak:15.0.2
```
Stworzyłam nowy realm: keycloak-react-app
Nowego klienta: react
I nowych użytkowników o nazwach admin i user i rolach admin oraz user

Następnie stworzyłam aplikację react.

Aby uruchomić aplikację, należy użyć polecenia `docker-compose up`.

```bash
docker-compose up
```
Ewentualnie w komendach zapisałam jak działa projekt.
