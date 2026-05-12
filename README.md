# Repasa Conocimiento: La energía

Aplicación web de práctica para 3.º de Primaria sobre materia, estados de la materia, materiales, calor, temperatura, cambios de estado, dilatación, formas de energía y ahorro de energía.

Está preparada para Vercel con Next.js App Router, React, TypeScript y Tailwind CSS. No usa backend ni base de datos; guarda el último intento y la mejor puntuación en `localStorage`.

## Instalar dependencias

```bash
npm install
```

## Ejecutar en local

```bash
npm run dev
```

Después abre `http://localhost:3000`.

## Compilar

```bash
npm run build
```

## Desplegar en Vercel

1. Sube el repositorio a GitHub, GitLab o Bitbucket.
2. En Vercel, crea un nuevo proyecto e importa el repositorio.
3. Vercel detectará Next.js automáticamente.
4. Usa estos valores por defecto:
   - Build command: `npm run build`
   - Output directory: `.next`
   - Install command: `npm install`
5. Pulsa Deploy.

## Estructura principal

- `app/page.tsx`: flujo de la aplicación y persistencia local.
- `components/ModeSelector.tsx`: pantalla inicial y selección de modos.
- `components/QuizCard.tsx`: tarjeta de pregunta y respuesta.
- `components/ResultSummary.tsx`: resumen final.
- `data/questions.ts`: banco de preguntas originales.
- `types/quiz.ts`: tipos de datos del quiz.
