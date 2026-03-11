# RegistrApp

## ¿Qué hace la aplicación?

RegistrApp permite a docentes o alumnos llevar un control simple de asistencia a clases. Sus funciones principales son:

- **Login de usuario**: Autenticación con nombre de usuario y contraseña
- **Registro de usuarios**: Creación de nuevas cuentas
- **Recuperación de sesión**: Página de ayuda en caso de no poder iniciar sesión
- **Perfil de usuario**: Vista del perfil del usuario autenticado
- **Gestión de fechas de clases**: Crear, ver, editar y eliminar fechas con descripción
- **Dashboard de asistencia**: Visualización del porcentaje de asistencia por asignatura (datos estáticos de ejemplo)

## Stack tecnológico

| Tecnología | Versión |
|---|---|
| Angular | 18.x |
| Ionic Framework | 7.x |
| Angular Material | 18.x |
| TypeScript | 5.4.x |
| RxJS | 7.8.x |
| zone.js | 0.14.x |

## Requisitos previos

- **Node.js** >= 18.x ([descargar](https://nodejs.org/))
- **npm** >= 9.x (incluido con Node.js)
- **Angular CLI** >= 18.x

```bash
npm install -g @angular/cli
```

## Instalación

```bash
# Clonar el repositorio (o navegar a la carpeta del proyecto)
cd Appsistencia

# Instalar dependencias
npm install
```

## Ejecutar en local

```bash
npm start
# o equivalente:
ng serve
```

Luego abre el navegador en `http://localhost:4200`.

Para simular una pantalla móvil, usa las DevTools del navegador (F12 → icono de dispositivo móvil).

## Usuarios de prueba (modo local)

Los servicios están configurados con datos en memoria para funcionar **sin necesidad de backend**:

| Usuario | Contraseña |
|---|---|
| `admin` | `1234` |
| `alumno` | `pass123` |

## Estructura del proyecto

```
src/
├── app/
│   ├── pages/
│   │   ├── home/          → Página de login
│   │   ├── inicio/        → Dashboard principal
│   │   ├── registro/      → Registro de nuevos usuarios
│   │   ├── usuario/       → Perfil del usuario
│   │   ├── lista-fechas/  → Listado de fechas de clases
│   │   ├── fecha/         → Crear / editar una fecha
│   │   └── recuperacion/  → Recuperación de acceso
│   ├── components/
│   │   ├── header/        → Componente de cabecera reutilizable
│   │   ├── footer/        → Componente de pie de página
│   │   └── asistencia/    → Tabla de porcentaje de asistencia
│   └── services/
│       ├── usuarios.service.ts → Lógica de usuarios (mock en local)
│       └── fechas.service.ts   → Lógica de fechas (mock en local)
├── assets/                → Imágenes e íconos
└── theme/                 → Variables SCSS de Ionic
```

## Conectar al backend real (Strapi)

La aplicación fue diseñada originalmente para trabajar con un backend **Strapi** corriendo en `http://localhost:1337`. Para habilitarlo:

1. Instala y configura Strapi con las colecciones `alumnos` y `fechas`:
   - `alumnos`: campos `nombre` (string) y `password` (string)
   - `fechas`: campos `fecha` (string) y `descripcion` (string)

2. En `src/app/services/usuarios.service.ts`:
   - Importa `HttpClient` desde `@angular/common/http`
   - Descomentar la línea `private API = 'http://localhost:1337/alumnos'`
   - Reemplazar los métodos mock con las llamadas HTTP originales (marcadas con `// BACKEND REAL:`)

3. En `src/app/services/fechas.service.ts`: mismos pasos para `http://localhost:1337/fechas`

4. En `src/app/app.module.ts`: descomentar `HttpClientModule` en los imports

## Build para producción

```bash
ng build --configuration production
```

Los archivos se generarán en la carpeta `www/`.

## Notas de migración

Este proyecto fue migrado de:
- Angular 12 + Ionic 5 → **Angular 18 + Ionic 7**
- TypeScript 4.2 → **TypeScript 5.4**
- RxJS 6.6 → **RxJS 7.8**
- Protractor (deprecado) eliminado
- `ion-datetime` reemplazado por `ion-input type="date"` (Ionic 7 rediseñó el componente como un picker de calendario completo)
- `entryComponents` eliminado (removido en Angular 13)
- Las llamadas HTTP a `localhost:1337` fueron reemplazadas por datos en memoria para ejecución local sin dependencias externas
