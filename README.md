# App de Tareas Full Stack

[Describe en 1 o 2 frases qué hace la app. Por ejemplo: aplicación para crear, completar y eliminar tareas, con los datos guardados en una base de datos MySQL.]

## Tecnologías

- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Base de datos:** MySQL

## Estructura del proyecto

```
api-tareas-fullstack/
├── backend/    API REST (Express + MySQL)
└── frontend/   Interfaz de usuario (React)
```

## Cómo ejecutarlo

### 1. Base de datos
Ejecuta el script `backend/database.sql` en MySQL (por ejemplo, desde MySQL Workbench).

### 2. Backend
```bash
cd backend
npm install
```
Copia el archivo `.env.example`, renómbralo a `.env` y completa tus datos de conexión a MySQL. Luego:
```bash
npm run dev
```
La API queda disponible en `http://localhost:3000`.

### 3. Frontend
En otra terminal:
```bash
cd frontend
npm install
npm run dev
```
Abre `http://localhost:5173` en el navegador.

## Endpoints de la API

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/tareas` | Lista todas las tareas |
| GET | `/api/tareas/:id` | Obtiene una tarea |
| POST | `/api/tareas` | Crea una tarea |
| PUT | `/api/tareas/:id` | Marca o desmarca una tarea como completada |
| DELETE | `/api/tareas/:id` | Elimina una tarea |

## Autor

[Tu nombre] — [enlace a tu perfil de GitHub]