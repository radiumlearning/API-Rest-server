## Trackgenix API REST (Semana 07)

Servidor API REST hecho con [Express](https://expressjs.com/en/starter/installing.html), utilizando [express-validator](https://express-validator.github.io/docs/) para las validaciones de los query-params de los endpoints.
<br/><br/>

### Endpoints disponibles:
```
GET /login

Params:
- email
- password
```

```
GET /signup

Params:
- name
- lastName
- dni
- dob
- phone
- address
- city
- zip
- email
- password
```

### Deployment

El servidor está deployado en Heroku, bajo la cuenta de learning@radiumrocket.com.

La url es: https://basp-m2022-api-rest-server.herokuapp.com

El único usuario existente en el servidor es:


- email: **rose@radiumrocket.com**
- password: **BaSP2022**