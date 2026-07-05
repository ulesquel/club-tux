# Club Tux
Un clon de **Club Penguin** pero con Tux!!

## Tecnologías
### Frontend
Utilizamos **Phraser**, un framework de Javascript con un motor preparado para crear juegos en 2D. Lo conformamos junto con React (*el framework*) y TypeScript.

### Backend
#### NodeJS (Express.js)
Con Express.js se maqueta la parte de cuentas, autenticaciones y básicamente la gestión principal de los usuarios/jugadores de Club Tux
- Autenticación
- Base de datos de usuarios
- Comunicación con los Web Sockets para el backend de C en binario

#### C
En C se encuentra el manejo de los estados en tiempo real para el gameplay general de los usuarios. Utilizando el protocolo TCP para lo conexión utilizando el servidor de Express.js como una especie de "proxy"
- Sockets

### Base de datos
#### Supabase
Para el manejo de base de datos, Web Sockets para la conexión en tiempo real del juego y autenticación manejada a través de Express.js 

## Autores
- Francisco Pacheco Quevedo
- Valentín Domínguez Tapia
