# Club Tux 🐧
¡¡Un clon de **Club Penguin** pero protagonizado por Tux!!

## Stack
### Frontend
El cliente está construido sobre **React** (utilizando **Vite** y **TypeScript**) para una gestión de interfaz rápida y tipada. El mundo del juego y las mecánicas 2D corren bajo **Phaser.js**, un potente framework/motor para juegos HTML5. Para los estilos de la interfaz de usuario (UI), utilizamos **Tailwind CSS**.

### Backend
#### Node.js (Express.js & Colyseus)
* **Express.js:** Se encarga de la gestión principal de usuarios, la lógica de negocio central de las cuentas y la integración de servicios.
* **Colyseus:** Maneja el estado del juego multijugador en tiempo real mediante WebSockets, gestionando las salas (rooms) de cada servidor, el movimiento de los personajes y la sincronización de estados.

### Base de Datos
#### Supabase
Utilizado como BaaS (Backend as a Service) para la persistencia de datos (PostgreSQL) y el sistema de autenticación seguro, consumido e interactuado a través de nuestra API en Express.js.

### Resumen
```
                      +-----------------------------+
                      |       Frontend Cliente      |
                      |  React + Tailwind (UI/Menus)|
                      |             +               |
                      |    Phaser.js (Canvas Juego) |
                      +--------------+--------------+
                                     |
           Auth - DB (Permanente)    |   WebSockets (Tiempo real)
       +-----------------------------+-----------------------------+
       |                                                           |
       v                                                           v
+--------------+                                           +---------------+
|   Supabase   |                                           | Servidor en   |
| (Auth,       |                                           |   Colyseus    |
| Usuarios,    |                                           | (Sala, Estado,|                                           
| Inventory)   |                                           |  Movimiento)  |
+--------------+                                           +---------------+
```

## Autores
- [Francisco Pacheco Quevedo](https://github.com/franpacheco-cpp)
- [Valentín Domínguez Tapia](https://github.com/elexemsddr)
