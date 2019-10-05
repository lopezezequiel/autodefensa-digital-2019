## Enviar el mail

### Variables de entorno
Setear las siguiente variables de entorno:

 - **ATTACKER_GMAIL_USER** correo de gmail del atacante 
 - **ATTACKER_GMAIL_PASS** password del gmail del atacante

También se puede hacerlo agregando un archivo .env

### Acceso Gmail
Habilitar el acceso para aplicaciones no seguras desde https://myaccount.google.com/lesssecureapps
 
### Ejecutar el script

```
node sendMail.js REMITENTE ASUNTO CORREO_VICTIMA HTML_FILE_NAME 
```
