# Club Tux
Un clon de **Club Penguin** pero con Tux!!

## Stack
### Frontend
Utilizamos **Phraser**, un framework de Javascript con un motor preparado para crear juegos en 2D. Lo conformamos junto con **React** (con **Vite**) y **TypeScript**.

### Backend
#### NodeJS (Express.js y Colyseus)
Con Express.js se maqueta la parte de cuentas, autenticaciones y básicamente la gestión principal de los usuarios/jugadores de Club Tux. Luego con Colyseus se hace el manejo de rooms (las salas dentro de cada servidor)
- Autenticación
- Base de datos de usuarios
- Web Sockets
- Rooms (salas)

### Base de datos
#### Supabase
Para el manejo de base de datos, Web Sockets para la conexión en tiempo real del juego y autenticación manejada a través de Express.js 

### Resumen
**Backend**:
- NodeJS

**Frontend**:
- React con Vite y TypeScript
- Phaser

**Base de datos**:
- Supabase (PostgreSQL, autenticación y WebSockets)

## Autores
- Francisco Pacheco Quevedo
- Valentín Domínguez Tapia
