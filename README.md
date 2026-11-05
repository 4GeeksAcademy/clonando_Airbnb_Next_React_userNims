# Clon de Airbnb con Next.js y React

Aplicación web **ficticia** inspirada en Airbnb, creada como ejercicio de 4Geeks Academy. Permite explorar alojamientos, filtrarlos, ordenarlos por precio y consultar su detalle.

> Es un proyecto educativo: no usa APIs, backend ni mapas reales, y no procesa reservas ni pagos.

## Tecnologías

- Next.js 16 (App Router)
- React 19 y TypeScript
- Tailwind CSS 4
- ESLint

## Funcionalidades

| Ruta | Qué muestra |
| --- | --- |
| `/` | Inicio con buscador por título o ubicación y filtros por categoría. |
| `/catalog` | Catálogo con contador, orden por precio y espacio reservado para un mapa. |
| `/rooms/[id]` | Detalle con galería, anfitrión, servicios y selector de huéspedes. |

El diseño es **mobile-first** (375 px) y se adapta a pantallas más grandes desde 768 px.

## Requisitos

- Node.js **20.9 o superior**
- npm

Comprueba tus versiones:

```bash
node --version
npm --version
```

## Cómo usarlo

1. Clona el repositorio y entra en la aplicación:

   ```bash
   git clone https://github.com/4GeeksAcademy/clonando_Airbnb_Next_React_userNims.git
   cd clonando_Airbnb_Next_React_userNims/airbnb-clone
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

Para detener el servidor, pulsa `Ctrl + C`.

## Scripts disponibles

Ejecútalos dentro de `airbnb-clone/`:

| Comando | Uso |
| --- | --- |
| `npm run dev` | Inicia el entorno de desarrollo. |
| `npm run build` | Genera la versión de producción. |
| `npm run start` | Sirve la versión de producción (después de `build`). |
| `npm run lint` | Revisa el código con ESLint. |

## Estructura principal

```text
airbnb-clone/
├── app/          # Rutas: inicio, catálogo y detalle
├── components/   # Componentes reutilizables de la interfaz
├── data/         # Alojamientos ficticios
├── types/        # Tipos TypeScript
├── lib/          # Utilidades compartidas
├── public/       # Imágenes placeholder
└── context.md    # Especificación y decisiones del proyecto
```

## Datos

Los alojamientos están en [`airbnb-clone/data/listings.ts`](airbnb-clone/data/listings.ts). Son datos locales y estáticos; para añadir uno, sigue la interfaz `Listing` de [`airbnb-clone/types/listing.ts`](airbnb-clone/types/listing.ts).

La especificación completa del ejercicio está en [`airbnb-clone/context.md`](airbnb-clone/context.md).
