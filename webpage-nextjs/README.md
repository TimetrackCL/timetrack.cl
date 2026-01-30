# Timetrack Next.js

Sitio web oficial de Timetrack SpA - Especialistas en cronometraje deportivo con tecnología BibTag de MyLaps.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4 + SCSS
- **Contenido**: MDX para blog posts
- **Animaciones**: AOS (Animate On Scroll)
- **Iconos**: Font Awesome 6

## 📁 Estructura del Proyecto

```
webpage-nextjs/
├── public/
│   └── assets/              # Recursos estáticos
│       ├── images/          # Imágenes del sitio
│       ├── fonts/           # Fuentes
│       └── data/            # JSON de datos (blog, eventos)
├── src/
│   ├── app/                 # App Router de Next.js
│   │   ├── layout.tsx       # Layout principal
│   │   ├── page.tsx         # Página home
│   │   ├── blog/            # Sistema de blog
│   │   ├── results/         # Resultados de eventos
│   │   ├── technology/      # Página de tecnología
│   │   └── terms/           # Términos y condiciones
│   ├── components/
│   │   ├── layout/          # Componentes de layout
│   │   ├── sections/        # Secciones de página
│   │   ├── blog/            # Componentes de blog
│   │   └── results/         # Componentes de resultados
│   ├── services/            # Capa de servicios
│   │   ├── blog.service.ts
│   │   └── events.service.ts
│   ├── content/             # Contenido MDX
│   │   └── blog/            # Posts del blog en MDX
│   ├── types/               # Tipos TypeScript
│   ├── lib/                 # Utilidades
│   └── styles/              # Estilos SCSS
└── tailwind.config.ts
```

## 🎨 Patrón de Arquitectura

El proyecto sigue **Clean Architecture** con:

- **Separación de capas**: UI → Services → Data
- **Feature-based structure**: Organización por funcionalidad
- **Abstracción de datos**: Los servicios permiten cambiar fácilmente entre datos locales y APIs

### Ejemplo de flujo de datos:

```
Componente → Service → JSON Local (futuro: API)
```

## 📝 Sistema de Blog

El blog utiliza MDX (Markdown + React Components):

1. Los posts están en `src/content/blog/*.mdx`
2. Cada post tiene frontmatter con metadatos
3. `BlogService` maneja la lectura y filtrado
4. Preparado para migrar a CMS o API en el futuro

### Crear un nuevo post:

```mdx
---
title: 'Título del post'
description: 'Descripción'
date: '2025-03-01'
author: 'Autor'
category: 'Categoría'
image: '/assets/images/blog/imagen.jpg'
tags: ['tag1', 'tag2']
---

# Contenido del post

Tu contenido aquí...
```

## 🏃 Sistema de Eventos

Los eventos están definidos en `public/assets/data/events.json`:

```json
{
  "events": [
    {
      "id": 1,
      "slug": "evento-slug",
      "title": "Nombre del Evento",
      "date": "2025-11-30",
      "location": "Ciudad, Chile",
      "category": "running",
      "image": "/assets/images/events/imagen.jpg",
      "participants": 900,
      "status": "finished",
      "results": [...]
    }
  ]
}
```

### Estados de eventos:

- `upcoming`: Evento próximo
- `live`: Evento en vivo
- `finished`: Evento finalizado

## 🛠️ Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start

# Linter
npm run lint
```

## 🌐 Deploy en Cloudflare Pages

El proyecto está optimizado para Cloudflare Pages:

1. **Build command**: `npm run build`
2. **Output directory**: `.next`
3. El archivo `_headers` está en `public/`

## 🔄 Migración de datos local a API

Para cambiar de datos locales a API:

1. Actualizar `BlogService` o `EventsService`
2. Cambiar `dataSource` de `'local'` a `'api'`
3. Implementar los métodos `getApi*()` con las URLs de tu API

```typescript
// En blog.service.ts o events.service.ts
private dataSource: 'local' | 'api' = 'api'; // Cambiar aquí
```

## 📊 JSON para API futura

Los datos están organizados para facilitar la creación de una API:

- `src/data/blog.json` - Metadata de posts (importable en TypeScript)
- `src/data/events.json` - Listado de eventos (importable en TypeScript)
- `public/assets/data/` - Copia de datos accesibles via HTTP para APIs externas

Los archivos en `src/data/` son importados directamente en los servicios, mientras que los de `public/assets/data/` pueden ser consumidos por software externo vía HTTP.

## 🎯 SEO

- Metadata dinámica en cada página
- Sitemap.xml generado automáticamente
- Robots.txt configurado
- Open Graph tags
- Google Tag Manager integrado

## 🎨 Personalización

### Colores:

Editar `tailwind.config.ts`:

```typescript
colors: {
  'primary': '#f86624', // Color principal
}
```

### Fuentes:

La fuente principal es "Be Vietnam Pro" (Google Fonts).

## 📦 Dependencias principales

```json
{
  "next": "^16.0.10",
  "react": "^19.2.1",
  "@next/mdx": "^16.0.10",
  "@tailwindcss/forms": "^0.5.9",
  "@tailwindcss/typography": "^0.5.15",
  "aos": "^2.3.4",
  "swiper": "^12.0.0"
}
```

## 📄 Licencia

© 2025 Timetrack SpA. Todos los derechos reservados.

## 👥 Contacto

- **Web**: https://timetrack.cl
- **Email**: contacto@timetrack.cl
- **Teléfono**: +56 9 6237 9642
