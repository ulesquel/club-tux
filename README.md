# Club Tux
Un clon de **Club Penguin** pero con Tux!!

## Stack
### Frontend
Utilizamos **Phraser**, un framework de Javascript con un motor preparado para crear juegos en 2D. Lo conformamos junto con **React** (con **Vite**) y **TypeScript**.

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

### Resumen
**Backend** (a mejorar):
    - NodeJS
    - C
**Frontend**:
    - React con Vite y TypeScript
    - Phaser
**Base de datos**:
    - Supabase (PostgreSQL, autenticación y WebSockets)

## Autores
- Francisco Pacheco Quevedo
- Valentín Domínguez Tapia
