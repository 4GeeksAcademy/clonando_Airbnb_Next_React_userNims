# Contexto de la aplicación

## Usuario y objetivo

La aplicación es una propuesta ficticia inspirada en Airbnb. Está dirigida a
personas que buscan un alojamiento para un viaje y quieren explorar opciones,
comparar su información básica y consultar los detalles de una estancia.

El objetivo del usuario es pasar de la página de inicio al catálogo y abrir
la ficha del alojamiento que le interesa. La aplicación no permite reservar.

## Rutas y componentes principales

Los componentes se describen como piezas de interfaz; este documento no incluye
su implementación.

### `/` — Inicio

Presenta la aplicación y ofrece una entrada clara al catálogo.

- **Cabecera:** nombre de la aplicación y enlaces a Inicio y Catálogo.
- **Presentación principal:** título, descripción breve y enlace «Explorar
  alojamientos» hacia `/catalog`.
- **Alojamientos destacados:** una selección de los datos ficticios, mostrada
  mediante tarjetas con imagen, nombre, ubicación y precio por noche.
- **Tarjeta de alojamiento:** enlaza a `/rooms/[id]` usando el identificador
  del alojamiento.

### `/catalog` — Catálogo

Muestra todos los alojamientos ficticios disponibles para explorar.

- **Cabecera:** la misma navegación que en Inicio.
- **Encabezado del catálogo:** título y una breve descripción del listado.
- **Listado de alojamientos:** cuadrícula de tarjetas con imagen, nombre,
  ubicación y precio por noche.
- **Tarjeta de alojamiento:** reutiliza la presentación de Inicio y enlaza
  a la ficha correspondiente en `/rooms/[id]`.

### `/rooms/[id]` — Detalle de alojamiento

Muestra la información del alojamiento cuyo identificador aparece en la URL.
Por ejemplo, `/rooms/1` corresponde al alojamiento ficticio con `id` igual a `1`.

- **Cabecera:** navegación compartida.
- **Enlace de regreso:** «Volver al catálogo», con destino `/catalog`.
- **Imágenes del alojamiento:** imagen principal e imágenes adicionales.
- **Información principal:** nombre, ubicación, descripción y precio por noche.
- **Características:** capacidad de huéspedes, dormitorios, camas y baños.
- **Servicios:** lista informativa de los servicios incluidos.

Si el identificador no corresponde a un alojamiento ficticio, se muestra
una página de alojamiento no encontrado con un enlace al catálogo.

## Diseño mobile-first

La interfaz se diseña primero para un ancho de **375 px**.

- Contenido en una columna, márgenes laterales de 16 px y sin desplazamiento
  horizontal.
- Cabecera compacta con los enlaces visibles, sin menú desplegable.
- Tarjetas apiladas e imágenes que se ajustan al ancho disponible.
- Detalle con imágenes, información y características en orden vertical.
- Textos legibles y enlaces con un área táctil mínima de 44 px de alto.

A partir de **768 px**:

- Las cuadrículas de Inicio y Catálogo pasan a dos columnas.
- El detalle distribuye las imágenes y la información en dos columnas.
- El contenido queda centrado, con un ancho máximo de 1200 px y márgenes
  laterales de 24 px.
- Se conservan el contenido, los enlaces y el orden lógico de lectura.

La estética usa fondos claros, texto oscuro, un color de acento cálido,
imágenes protagonistas y esquinas redondeadas. Se implementa con Tailwind CSS,
sin librerías de componentes.

## Navegación

Todos los enlaces internos utilizan `Link` de `next/link`.

- El nombre de la aplicación y «Inicio» llevan a `/`.
- «Catálogo» y «Explorar alojamientos» llevan a `/catalog`.
- Cada tarjeta lleva a `/rooms/` seguido del `id` del alojamiento.
- «Volver al catálogo» lleva a `/catalog`.

## Datos ficticios

Los datos son locales y estáticos, sin API ni base de datos. Inicio, Catálogo
y Detalle utilizan la misma colección para mantener la información consistente.

Cada alojamiento contiene:

- `id`: identificador único.
- `name`: nombre ficticio.
- `location`: ciudad y país.
- `description`: descripción breve.
- `images`: rutas de imágenes locales de demostración.
- `pricePerNight`: precio por noche en euros.
- `guests`, `bedrooms`, `beds` y `bathrooms`: características del alojamiento.
- `amenities`: lista de servicios.

### Modelo implementado en TypeScript

Las interfaces `Listing`, `Host` y `Amenity` se definen en
`types/listing.ts`. La colección exportada `listings` de `data/listings.ts`
contiene cuatro alojamientos ficticios con IDs únicos de tipo `string`.

- `pricePerNight` es un número positivo en euros.
- `category` identifica la categoría del alojamiento.
- `rating` es la valoración ficticia entre 0 y 5; `reviewCount` es el número
  entero no negativo de reseñas. Son datos, sin funcionalidad de reseñas.
- `images` es una tupla de rutas locales con al menos un elemento, garantizado
  por TypeScript. Cada registro incluye dos SVG placeholder de demostración.
- `host` contiene nombre, ruta de avatar local y texto alternativo.
- `amenities` contiene objetos `Amenity` con `id` y `name`, en lugar de cadenas.
- `guests` representa el máximo de huéspedes: un entero positivo. No se añade
  otro campo de capacidad para evitar valores contradictorios.

Los SVG compartidos se encuentran en `public/placeholders` y no representan
fotografías reales. No requieren servicios externos.

Ejemplos de contenido ficticio:

| id | Nombre | Ubicación | Precio por noche |
| --- | --- | --- | --- |
| 1 | Estudio del Sol | Valencia, España | 75 EUR |
| 2 | Casa del Bosque | Oviedo, España | 110 EUR |
| 3 | Apartamento de la Brisa | Málaga, España | 90 EUR |
| 4 | Cabaña de la Luna | Granada, España | 65 EUR |

Inicio muestra estos tres alojamientos como destacados. El catálogo muestra
toda la colección y cada ficha consulta el alojamiento por su `id`.

## Límites del alcance

Solo se contemplan las tres rutas y la navegación descritas. No se incluyen
autenticación, reservas, pagos, favoritos, búsqueda, filtros, mapas, reseñas
ni paneles de administración.

## Capturas y especificaciones en base Airbnb

### Inicio

- Identificar las regiones visibles de la captura y contrastarlas con el contexto.
- Separar lo observado de los requisitos del ejercicio.
- Proponer componentes y props tipadas, primero para móvil y después desde 768 px, sin código ni cambios en archivos.


Read 
Completed with input: {
  "path": "/home/codespace/.vscode-remote/data/agentSessionData/70678475-4383-4fc5-a8af-939035204642/attachments/f9e0f67e-816f-4039-b042-1942d7f16bf1/Pasted Image.png"
}

Read , lines 1 to 119
Completed with input: {
  "path": "/home/codespace/.vscode-remote/data/agentSessionData/70678475-4383-4fc5-a8af-939035204642/attachments/65dc83f9-82d9-4702-b664-f82bc19161e3/file_context.md",
  "view_range": [
    1,
    119
  ]
}

## Especificación de Inicio basada en la referencia visual

### Implementación actual de Home

Esta actualización prevalece sobre las restricciones anteriores de búsqueda,
categorías y presentación de las tarjetas:

- `/` utiliza componentes funcionales `const` separados, de hasta 80 líneas.
- `Navbar` recibe `query: string` y
  `onQueryChange: (query: string) => void`. La búsqueda es un input controlado.
- `CategoryFilters` recibe `categories: readonly string[]`,
  `activeCategory: string | null` y
  `onCategoryChange: (category: string | null) => void`.
  `null` representa «Todas» y la selección se resalta con `aria-pressed`.
- Home comienza con una lista vacía y carga la colección local tras 1000 ms
  mediante `useEffect`, con limpieza del temporizador y estado de carga visible.
- Cada pulsación filtra por nombre (título) o ubicación, sin distinguir
  mayúsculas y eliminando espacios exteriores. Se combina con la categoría
  usando AND. Se muestran el total y un mensaje cuando no hay coincidencias.
- `ListingGrid` y `ListingCard` reciben los registros `Listing` compartidos.
  La tarjeta muestra imagen placeholder local, título, ubicación, USD por noche,
  estrellas y número de reseñas; enlaza a `/rooms/[id]` mediante `Link`.
- Los importes numéricos ficticios se muestran como USD en Home, sin conversión
  de divisas; el modelo original sigue documentado en euros.
- La rejilla tiene una columna a 375 px, dos desde 768 px (`md`) y tres desde
  1024 px (`lg`). Se usa Tailwind sin CSS en línea ni componentes preconstruidos.
- Esta fase solo implementa `/`; los destinos de catálogo y detalle quedan
  pendientes de sus fases correspondientes.

Esta sección precisa la interfaz de `/`. Prevalece sobre la descripción anterior de la cabecera: se incorporan logo, búsqueda y menú, sin añadir búsqueda funcional ni nuevas rutas.

### Móvil: 375 px

#### Lo observado en la captura

- **Búsqueda superior:** elemento ancho y redondeado, icono de lupa, texto «Start your search» y sombra suave.
- **Categorías:** fila horizontal de opciones con icono y texto, como «All», «Homes» y «Experiences».
- **Secciones de alojamientos:** título, subtítulo y flecha circular a la derecha.
- **Listados horizontales:** dos tarjetas visibles y parte de una tercera. **La captura no muestra una cuadrícula de una columna.**
- **Tarjetas:** fotografía redondeada, corazón superpuesto, algunas etiquetas «Guest favorite», nombre y línea de precio y valoración.
- **Aviso inferior superpuesto:** «Prices include all fees».
- **Navegación inferior:** «Explore», «Wishlists» y «Log in».
- **Estética:** fondo blanco, texto oscuro, información secundaria gris y acento rosa.

No se observa un logo ni un menú superior. Una captura estática tampoco permite confirmar comportamientos de desplazamiento, apertura o selección.

#### Lo que exige el ejercicio

- Navbar con **logo, búsqueda y menú**, aunque no aparezcan completos en la referencia.
- Categorías debajo de la navbar.
- **Cuadrícula de una columna**: las tarjetas se apilan verticalmente, sin carrusel.
- Datos locales ficticios y navegación interna mediante `Link`.
- Sin favoritos, autenticación, reservas, filtros ni búsqueda funcional.

No se reproducen los corazones, valoraciones, etiquetas, aviso de tarifas ni navegación inferior: son elementos observados, pero quedan fuera del alcance definido. Las categorías describen alojamientos; no incorporan experiencias ni nuevas rutas.

#### Layout propuesto

- Márgenes laterales de 16 px: ancho útil de 343 px.
- Navbar en dos filas: logo y menú de enlaces arriba; búsqueda visual debajo, ocupando el ancho disponible.
- Menú con «Inicio» y «Catálogo», siempre visible, sin desplegable.
- Búsqueda con lupa y texto «Explorar alojamientos»: funciona como enlace a `/catalog`, no como campo de entrada.
- Categorías en una fila con desplazamiento horizontal limitado a esa región si no caben. Son etiquetas informativas, no filtros ni botones.
- Presentación breve del sitio y enlace al catálogo, conservando el contexto original.
- Alojamientos destacados en una columna, con separación de 24 px.
- Imagen de cada tarjeta en proporción 4:3, seguida de nombre, ubicación y precio por noche en euros.
- Enlaces con área táctil mínima de 44 px de alto. Sin desbordamiento horizontal de la página ni elementos superpuestos.

### Adaptación desde 768 px

Esta adaptación es una **propuesta del ejercicio**, no algo verificable en la captura móvil.

- Navbar en una fila: logo a la izquierda, búsqueda en el centro y menú a la derecha.
- Categorías debajo de la navbar; se mantiene el desplazamiento local únicamente si resulta necesario.
- Cuadrícula de alojamientos en **dos columnas**, conforme al contexto existente.
- Contenedor centrado, ancho máximo de 1200 px y márgenes laterales de 24 px.
- Se conservan los mismos componentes, contenido y destinos de navegación, sin duplicar versiones móvil y escritorio.

### Contratos de datos

Las siguientes descripciones representan tipos TypeScript, no implementaciones:

- **`NavItem`:** `label: string`; `href: '/' | '/catalog'`.
- **`Category`:** `id: string`; `label: string`; `iconSrc: string`. El icono es local y decorativo.
- **`ListingSummary`:** `id: string`; `name: string`; `location: string`; `imageSrc: string`; `imageAlt: string`; `pricePerNight: number`.

`ListingSummary` se obtiene de la colección existente: utiliza una imagen de `images` y conserva el mismo identificador y precio. No requiere una segunda colección independiente.

### Componentes React propuestos

| Componente | Responsabilidad | Props tipadas | Relación |
|---|---|---|---|
| `HomePage` | Componer `/` y proporcionar los datos ficticios. | Sin props propias. | Padre de `Navbar` y del contenido principal. |
| `Navbar` | Organizar logo, acceso visual de búsqueda y menú. | `brandName: string`, `items: readonly NavItem[]` | Padre de `BrandLink`, `SearchLink` y `NavMenu`. |
| `BrandLink` | Mostrar el logo ficticio y enlazar a `/`. | `name: string` | Hijo de `Navbar`. |
| `SearchLink` | Mostrar lupa y etiqueta con apariencia de búsqueda; enlazar al catálogo. | `label: string`, `href: '/catalog'` | Hijo de `Navbar`. |
| `NavMenu` | Presentar los enlaces internos siempre visibles. | `items: readonly NavItem[]` | Hijo de `Navbar`; sin estado de apertura. |
| `CategoryBar` | Distribuir las categorías informativas. | `categories: readonly Category[]` | Dentro del contenido principal, antes de la presentación. |
| `CategoryItem` | Mostrar el icono decorativo y nombre de una categoría. | `category: Category` | Hijo de `CategoryBar`; sin selección ni eventos. |
| `HomeIntro` | Presentar el sitio y ofrecer acceso al catálogo. | `title: string`, `description: string`, `catalogLabel: string` | Después de `CategoryBar`; enlace fijo a `/catalog`. |
| `ListingSection` | Agrupar título, descripción y alojamientos destacados. | `title: string`, `description: string`, `listings: readonly ListingSummary[]` | Padre de `ListingGrid`. |
| `ListingGrid` | Distribuir tarjetas: una columna en móvil y dos desde 768 px. | `listings: readonly ListingSummary[]` | Hijo de `ListingSection`; reutilizable en `/catalog`. |
| `ListingCard` | Mostrar imagen, nombre, ubicación y precio; enlazar al detalle. | `listing: ListingSummary` | Hijo de `ListingGrid`; destino `/rooms/[id]` según `listing.id`. |

### Jerarquía y navegación

- **`HomePage`**
  - **`Navbar`**
    - `BrandLink`
    - `SearchLink`
    - `NavMenu`
  - **Contenido principal**
    - `CategoryBar`
      - `CategoryItem`, uno por categoría
    - `HomeIntro`
    - `ListingSection`
      - `ListingGrid`
        - `ListingCard`, una por alojamiento

Todos los destinos internos utilizan `Link` de `next/link`. Cada tarjeta tiene un único enlace al detalle, sin botones anidados. Se utilizan regiones semánticas de cabecera, navegación y contenido principal, títulos jerárquicos y foco visible.

La implementación posterior utilizará TypeScript y Tailwind CSS, sin librerías de componentes ni funcionalidades adicionales.

### Catálogo

- Identificar búsqueda, resultados y mapa en la captura.
- Contrastar los componentes existentes para reutilizar `ListingCard`.
- Especificar contador, orden por precio y mapa placeholder, separando la referencia de la adaptación requerida.


Read 
Completed with input: {
  "path": "/home/codespace/.vscode-remote/data/agentSessionData/70678475-4383-4fc5-a8af-939035204642/attachments/57de4f27-3aa4-499a-a082-76be287fa800/Pasted Image.png"
}

Read , lines 120 to 241
Completed with input: {
  "path": "/home/codespace/.vscode-remote/data/agentSessionData/70678475-4383-4fc5-a8af-939035204642/attachments/09b3b7b9-f3a1-4915-831a-2e7ee82afb1d/file_context.md",
  "view_range": [
    120,
    241
  ]
}

## Especificación de Catálogo basada en la referencia visual

### Implementación actual del catálogo

- `/catalog` reutiliza `ListingGrid` y `ListingCard` de Home, incluida la
  presentación de precios ficticios en USD y estrellas.
- `CatalogResults` recibe `listings: readonly Listing[]` y gestiona
  `PriceOrder` con `useState`. Ordena una copia de la colección, inicialmente
  de menor a mayor precio; el contador conserva el total en ambos órdenes.
- `ResultsToolbar` agrupa contador y selector con etiqueta visible.
- `MapPlaceholder` muestra un recuadro gris rotulado «Mapa», de 240 px de alto
  en móvil y 480 px desde `md`, sin servicios geográficos.
- El mapa aparece después de las tarjetas en móvil y a su derecha desde
  768 px, con distribución de dos tercios y un tercio.
- `Navbar` admite `query` y `onQueryChange` opcionales: Home mantiene su input
  controlado y el catálogo muestra un enlace visual a `/catalog`. La ruta
  activa se identifica con `aria-current`.
- No se incorporan búsqueda funcional en catálogo, filtros ni backend.

Esta sección precisa `/catalog`. Amplía el alcance anterior únicamente con **contador de resultados, orden por precio y placeholder de mapa**. No incorpora búsqueda funcional, filtros ni un mapa interactivo.

### Móvil: 375 px

#### Lo observado en la captura

- **Cabecera de búsqueda:** flecha de regreso, cápsula con «Homes in Broken Bow», información secundaria de fechas y huéspedes, e icono de ajustes.
- **Filtros:** fila horizontal con «Allows pets», «Hot tub», «Price» y «Free parking». La captura no permite confirmar su funcionamiento; «Price» no demuestra un ordenamiento.
- **Mapa:** ocupa una gran región encima de los resultados, con marcadores de precios y una etiqueta de ubicación.
- **Resultados:** panel blanco con esquinas superiores redondeadas y un indicador que sugiere un panel deslizable, sin poder verificar ese comportamiento.
- **Contador:** «Over 1,000 homes in Broken Bow», seguido de una nota informativa.
- **Tarjeta parcialmente visible:** fotografía grande, etiqueta «Superhost», corazón y puntos de galería. No se alcanza a ver su información inferior.
- **Navegación inferior:** «Explore», «Wishlists» y «Log in».

#### Adaptación exigida por el ejercicio

- Reutilizar `Navbar` de Inicio: logo, búsqueda visual y menú con enlaces a `/` y `/catalog`.
- Mantener `SearchLink` como acceso al catálogo, sin fechas, huéspedes ni formulario.
- Mostrar un título «Alojamientos» y el **número exacto de resultados ficticios**, no el contador de la captura.
- Añadir un selector con «Precio: menor a mayor» y «Precio: mayor a menor».
- Reutilizar **`ListingCard` de Home**, conservando imagen, nombre, ubicación, precio por noche en euros y enlace al detalle.
- Colocar un **placeholder de mapa debajo de todas las tarjetas**, no encima ni detrás de un panel.
- Omitir filtros, favoritos, etiquetas, galería interactiva, panel deslizable y navegación inferior.

#### Layout móvil

Orden vertical del contenido:

1. Navbar compartida.
2. Título del catálogo.
3. Contador y selector de orden, apilados.
4. Cuadrícula de tarjetas en **una columna**.
5. Placeholder de mapa.

Se utilizan márgenes laterales de 16 px, ancho útil de 343 px y separación de 24 px entre tarjetas. Las imágenes mantienen la proporción 4:3 definida en Inicio.

El placeholder ocupa todo el ancho disponible y tiene una altura propuesta de 240 px. Muestra «Mapa de referencia — sin interacción», con fondo neutro y borde redondeado. No contiene geolocalización, marcadores reales ni controles. Todo permanece en el flujo de la página, sin superposiciones ni desplazamiento horizontal.

### Adaptación desde 768 px

Esta distribución es una **adaptación requerida**, no una observación de la captura.

- Navbar en una fila, igual que en Inicio.
- Título y controles encima de la distribución principal; contador a la izquierda y selector a la derecha.
- Layout principal de dos regiones: **resultados a la izquierda y placeholder de mapa a la derecha**, con separación de 24 px.
- Reparto propuesto de espacio: dos tercios para resultados y un tercio para el mapa.
- Dentro de resultados, `ListingGrid` conserva sus **dos columnas desde 768 px**. Las tarjetas pueden reducir su ancho y sus textos deben ajustarse sin desbordamiento.
- El mapa tiene una altura propuesta de 480 px, alineado con el inicio de las tarjetas y sin posición fija.
- Contenedor centrado, ancho máximo de 1200 px y márgenes laterales de 24 px.
- Se conserva el orden lógico del documento: controles, tarjetas y mapa, sin duplicar componentes según el dispositivo.

### Datos y comportamiento

Se reutilizan `ListingSummary` y la colección local definida para Inicio.

- **`PriceOrder`:** unión de valores `'price-asc' | 'price-desc'`.
- **`ListingSummary`:** conserva `id: string`, `name: string`, `location: string`, `imageSrc: string`, `imageAlt: string` y `pricePerNight: number`.

El orden inicial es de menor a mayor precio. El selector ordena numéricamente por `pricePerNight`, sin modificar la colección original ni el orden de los destacados de Inicio. En empates se conserva el orden original.

El contador se deriva del número de alojamientos mostrados y no cambia al ordenar. Utiliza «1 alojamiento» o «N alojamientos» según corresponda. Con los cuatro registros actuales muestra **«4 alojamientos»**.

No se añaden API, base de datos, paginación ni datos geográficos.

### Componentes React y props tipadas

Los contratos se describen sin implementar código.

| Componente | Responsabilidad | Props tipadas | Relación |
|---|---|---|---|
| `CatalogPage` | Componer `/catalog` y proporcionar la colección ficticia. | Sin props propias. | Padre de `Navbar` y `CatalogResults`. |
| `Navbar` | Mostrar logo, búsqueda visual y menú compartidos. | `brandName: string`, `items: readonly NavItem[]` | Reutilizado de Home, sin cambiar su contrato. |
| `CatalogResults` | Gestionar el orden elegido y derivar la lista ordenada y su contador. | `listings: readonly ListingSummary[]` | Padre de `ResultsToolbar`, `ListingGrid` y `MapPlaceholder`. |
| `ResultsToolbar` | Agrupar contador y control de orden. | `count: number`, `order: PriceOrder`, `onOrderChange: (order: PriceOrder) => void` | Hijo de `CatalogResults`; padre de `ResultsCount` y `PriceSort`. |
| `ResultsCount` | Mostrar el total con singular o plural correcto. | `count: number` | Hijo de `ResultsToolbar`. |
| `PriceSort` | Presentar un selector etiquetado «Ordenar por precio». | `value: PriceOrder`, `onChange: (order: PriceOrder) => void` | Hijo de `ResultsToolbar`; comunica la selección al padre. |
| `ListingGrid` | Distribuir la colección ya ordenada. | `listings: readonly ListingSummary[]` | Reutilizado de Home; padre de `ListingCard`. |
| `ListingCard` | Mostrar el resumen y enlazar a `/rooms/[id]`. | `listing: ListingSummary` | **El mismo componente de Home**, sin variante ni lógica de ordenamiento. |
| `MapPlaceholder` | Representar la región de mapa sin funcionalidad geográfica. | `label: string` | Hermano de `ListingGrid`; debajo en móvil y a la derecha desde 768 px. |

Solo el estado de ordenamiento y sus controles necesitan interacción cliente; las tarjetas y el placeholder no requieren estado propio.

### Jerarquía y accesibilidad

- **`CatalogPage`**
  - **`Navbar`**
    - `BrandLink`
    - `SearchLink`
    - `NavMenu`
  - **Contenido principal**
    - Título «Alojamientos»
    - **`CatalogResults`**
      - **`ResultsToolbar`**
        - `ResultsCount`
        - `PriceSort`
      - **Layout de resultados y mapa**
        - `ListingGrid`
          - `ListingCard`, una por alojamiento
        - `MapPlaceholder`

El selector tiene etiqueta visible, acceso por teclado y foco visible. El placeholder identifica explícitamente que no es un mapa interactivo. Los enlaces internos utilizan `Link` de `next/link`; cada tarjeta mantiene un único enlace al detalle.

### Detalle

- Identificar las regiones visibles y contrastarlas con el contexto.
- Especificar componentes, galería y límites del contador de huéspedes.
- Separar la referencia de la adaptación móvil y escritorio, manteniendo la reserva como demostración.


Read 
Completed with input: {
  "path": "/home/codespace/.vscode-remote/data/agentSessionData/70678475-4383-4fc5-a8af-939035204642/attachments/64da1431-0040-45d7-b479-4a84ad7852f5/Pasted Image.png"
}

Read , lines 1 to 119
Completed with input: {
  "path": "/home/codespace/.vscode-remote/data/agentSessionData/70678475-4383-4fc5-a8af-939035204642/attachments/22c04b3a-5bd4-4e3a-8a10-bbced07aed13/file_context.md",
  "view_range": [
    1,
    119
  ]
}

## Especificación de Detalle basada en la referencia visual

Esta sección precisa `/rooms/[id]`. Añade anfitrión ficticio, galería controlada y tarjeta de reserva demostrativa con contador de huéspedes. **No permite realizar reservas ni pagos.**

### Móvil: 375 px

#### Lo observado en la captura

- **Barra superior:** flecha de retorno, iconos de compartir y favorito. No se confirma el destino de la flecha.
- **Galería:** fotografía grande y contador «1 / 48». No aparecen controles Anterior/Siguiente.
- **Cabecera del alojamiento:** título centrado, ubicación, capacidad, dormitorios, camas y baños.
- **Valoración:** texto «New» y una reseña.
- **Anfitrión:** se ve parcialmente un avatar; el aviso de tarifas oculta el resto de esa región.
- **Aviso superpuesto:** «Prices include all fees».
- **Región inferior de reserva:** precio en dólares para dos noches, fechas, condiciones y botón «Reserve». Su posición sugiere una barra fija, pero la captura estática no permite confirmarlo.
- **Servicios y contador de huéspedes:** no son visibles en este recorte.

#### Partes derivadas de la consigna

- Retorno explícito a `/catalog` mediante `Link`, no mediante el historial del navegador.
- Galería con botones **Anterior/Siguiente** y contador de imagen.
- Información completa del anfitrión ficticio y lista de servicios.
- Tarjeta demostrativa con precio por noche en euros y contador de huéspedes limitado.
- Sin compartir, favoritos, reseñas, fechas, condiciones comerciales ni aviso de tarifas.
- Se conserva la navbar compartida del ejercicio, aunque la captura muestre una barra distinta.

#### Disposición móvil propuesta

Orden del contenido:

1. Navbar compartida.
2. Enlace «Volver al catálogo».
3. Galería y controles.
4. Cabecera: nombre, ubicación y características.
5. Descripción.
6. Anfitrión.
7. Servicios.
8. Tarjeta de reserva demostrativa.

Una columna, márgenes laterales de 16 px y separación de 24 px entre regiones. La galería ocupa el ancho disponible, con imagen 4:3 y esquinas redondeadas. Debajo aparecen Anterior, contador y Siguiente.

La tarjeta de reserva permanece **en el flujo, después de los servicios**: no cubre contenido ni queda fijada al borde inferior. Contiene precio por noche, selector de huéspedes y un botón deshabilitado «Reserva no disponible», acompañado de «Aplicación ficticia: no se realizan reservas».

### Adaptación desde 768 px

Esta distribución es una propuesta del ejercicio, no una observación de la captura.

- Navbar, retorno y galería ocupan el ancho del contenedor.
- Debajo de la galería, layout de dos columnas: información a la izquierda y tarjeta de reserva a la derecha.
- Reparto aproximado de espacio de dos tercios y un tercio, con separación de 24 px.
- Cabecera, descripción, anfitrión y servicios permanecen en la columna principal.
- La reserva se alinea con el inicio de la cabecera y utiliza posición `sticky`, con separación superior suficiente para no quedar oculta por la navbar. No se fija al viewport como una barra inferior.
- El contenedor de ambas columnas delimita el recorrido de la tarjeta.
- Ancho máximo de 1200 px y márgenes laterales de 24 px.
- Se utiliza una única tarjeta de reserva: cambia su disposición, no su contenido ni estado.

Esta definición sustituye la distribución anterior de imágenes e información en dos columnas.

### Datos y límites

Se mantiene la colección local compartida con Inicio y Catálogo.

### Implementación actual del detalle

- La página de servidor `/rooms/[id]` recibe `params: Promise<{ id: string }>`
  y obtiene el ID con `await`. Renderiza `RoomDetails` cliente con `key={id}`:
  cambiar de alojamiento reinicia carga, galería y huéspedes.
- `RoomDetails` usa `useEffect` y un temporizador de 1000 ms para buscar en
  `data/listings`, limpiándolo al desmontarse. Distingue carga visible,
  alojamiento encontrado e ID inexistente; siempre ofrece `Link` al catálogo.
- `PhotoGallery`, `RoomHeader`, `HostInfo`, `Amenities` y `BookingCard` están
  en archivos separados y se definen con `const`, con menos de 80 líneas.
- `PhotoGallery` gestiona su índice con `useState`, muestra contador y controles
  Anterior/Siguiente deshabilitados en los extremos, sin navegación circular.
- `RoomHeader` muestra título, ubicación, características, estrellas y número
  de reseñas ficticias. `ListingRating` se comparte con las tarjetas.
- `Host` incluye `yearsHosting: number`, un entero positivo ficticio.
  `HostInfo` muestra avatar placeholder, nombre y años como anfitrión.
- `Amenities` presenta los objetos `Amenity` como icono SVG decorativo y texto.
- `BookingCard` recibe `pricePerNight: number` y `maxGuests: number`, obtenido
  de `Listing.guests`. Gestiona huéspedes de 1 a `maxGuests` mediante `useState`,
  con límites también en los callbacks. El formato USD se comparte con Home
  y catálogo; no hay conversión de importes ni precio variable por huéspedes.
- La CTA «Reserva no disponible» está deshabilitada y acompañada de un aviso
  explícito: no se realizan reservas ni pagos.
- Móvil: una columna y reserva después de los servicios. Desde 768 px: galería
  arriba, información a la izquierda y reserva sticky a la derecha, en
  proporción 2:1. Solo Tailwind, sin mapa ni selector de fechas.

**Tipos descriptivos:**

- **`GalleryImage`:** `src: string`, `alt: string`.
- **`HostSummary`:** `name: string`, `avatarSrc: string`, `avatarAlt: string`.
- **`RoomDetails`:** `id: string`, `name: string`, `location: string`, `description: string`, `images: readonly string[]`, `pricePerNight: number`, `guests: number`, `bedrooms: number`, `beds: number`, `bathrooms: number`, `amenities: readonly string[]`, `host: HostSummary`.

`host` es la única ampliación del registro existente. Los elementos `GalleryImage` se derivan de sus imágenes locales, con textos alternativos descriptivos.

**Galería:**

- Índice inicial interno: `0`; contador visible: «1 de N».
- Anterior/Siguiente avanzan una imagen, sin reproducción automática ni vuelta circular.
- Anterior se deshabilita en la primera imagen; Siguiente, en la última.
- Con una sola imagen, ambos quedan deshabilitados.
- Cada alojamiento debe incluir al menos una imagen válida. Si faltan, se muestra «Imágenes no disponibles», sin contador ni controles.

**Huéspedes:**

- Valor inicial: **1**.
- Mínimo: **1**; máximo: capacidad `room.guests`.
- Solo números enteros y cambios de una unidad.
- Restar se deshabilita en el mínimo; sumar, en el máximo.
- Con capacidad de un huésped, ambos botones quedan deshabilitados.
- La capacidad debe ser un entero positivo.
- El contador no modifica el precio por noche ni genera una reserva.

Al cambiar de alojamiento se reinician la imagen y los huéspedes. Un identificador inexistente muestra la página de alojamiento no encontrado con enlace al catálogo.

### Componentes React y props tipadas

Estos contratos son especificaciones, no código.

| Componente | Responsabilidad | Props tipadas | Relación |
|---|---|---|---|
| `RoomPage` | Resolver el alojamiento por identificador y componer el detalle. | Props de ruta de Next.js: `params: Promise<{ id: string }>` | Padre de la navbar y contenido principal. |
| `Navbar` | Mantener la navegación compartida. | `brandName: string`, `items: readonly NavItem[]` | Reutilizado de Home. |
| `BackToCatalog` | Enlazar explícitamente a `/catalog`. | `label: string` | Antes de la galería. |
| `RoomGallery` | Mostrar la imagen activa y gestionar su índice. | `images: readonly GalleryImage[]` | Padre de `GalleryControls`. |
| `GalleryControls` | Mostrar Anterior/Siguiente y posición actual. | `currentIndex: number`, `total: number`, `onPrevious: () => void`, `onNext: () => void` | Hijo de `RoomGallery`; deriva los estados deshabilitados. |
| `RoomHeader` | Mostrar nombre, ubicación y características. | `name: string`, `location: string`, `guests: number`, `bedrooms: number`, `beds: number`, `bathrooms: number` | Inicio de la columna de información. |
| `HostInfo` | Presentar nombre y avatar del anfitrión ficticio. | `host: HostSummary` | Después de la descripción. |
| `AmenitiesList` | Mostrar los servicios como lista informativa. | `amenities: readonly string[]` | Después de `HostInfo`. |
| `ReservationCard` | Mostrar precio y gestionar huéspedes, sin reservar. | `pricePerNight: number`, `maxGuests: number` | Debajo de la información en móvil; columna derecha desde 768 px. |
| `GuestCounter` | Presentar cantidad y botones de incremento/decremento. | `value: number`, `min: number`, `max: number`, `onChange: (value: number) => void` | Hijo controlado de `ReservationCard`. |

### Jerarquía y accesibilidad

- **`RoomPage`**
  - `Navbar`
  - **Contenido principal**
    - `BackToCatalog`
    - `RoomGallery`
      - `GalleryControls`
    - **Layout de información y reserva**
      - **Información**
        - `RoomHeader`
        - Descripción
        - `HostInfo`
        - `AmenitiesList`
      - `ReservationCard`
        - `GuestCounter`
        - Aviso de demostración y botón deshabilitado

La galería y la reserva gestionan estados independientes. Los controles tienen etiquetas visibles, foco visible, área táctil mínima de 44 px y límites aplicados tanto en la interfaz como en las actualizaciones de estado. Los cambios de imagen y cantidad se anuncian de forma accesible. Todos los enlaces internos utilizan `Link` de `next/link`.