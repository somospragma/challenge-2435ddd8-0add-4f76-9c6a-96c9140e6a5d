# Refactorización de código para aplicar principios de código limpio

La empresa Fintech 'FinPragmatica' necesita refactorizar un servicio existente de gestión de préstamos para aplicar principios de código limpio. El servicio actual tiene problemas de legibilidad, mantenibilidad y escalabilidad. El candidato debe identificar y corregir estos problemas aplicando los principios KISS, SOLID, YAGNI y DRY, y usando herramientas de análisis estático. El servicio interactúa con un motor de evaluación de riesgos y un sistema de auditoría. El objetivo es mejorar la calidad del código y su adhesión a la arquitectura limpia.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | aplicación de código limpio y eficiente |
| **Nivel** | senior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Análisis del código existente

**Objetivo:** Identificar áreas de mejora en el código actual.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Revisa el código existente del servicio de gestión de préstamos.
- Identifica violaciones a los principios de código limpio (KISS, SOLID, YAGNI, DRY).
- Documenta tus hallazgos y propone mejoras.

**Entregable:** Documento con el análisis del código y propuestas de mejora.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda los principios de código limpio y cómo se aplican.
- Considera el impacto de los cambios propuestos en la funcionalidad del servicio.

</details>

### Fase 2: Refactorización del código

**Objetivo:** Aplicar los principios de código limpio al código existente.

**Tiempo estimado:** 4 horas

**Instrucciones:**

- Refactoriza el código del servicio de gestión de préstamos para aplicar los principios KISS, SOLID, YAGNI y DRY.
- Usa herramientas de análisis estático para verificar la calidad del código refactorizado.
- Documenta los cambios realizados y las razones detrás de ellos.

**Entregable:** Código refactorizado y documento de cambios.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda las herramientas de análisis estático disponibles para Node.js.
- Considera el impacto de los cambios en la funcionalidad y rendimiento del servicio.

</details>

### Fase 3: Verificación de la arquitectura limpia

**Objetivo:** Verificar que el código refactorizado sigue los principios de arquitectura limpia.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Verifica que el código refactorizado sigue los principios de arquitectura limpia.
- Documenta cualquier desviación de los principios y propone soluciones.
- Verifica que el servicio continúa funcionando correctamente después de la refactorización.

**Entregable:** Documento de verificación de la arquitectura limpia y pruebas de funcionalidad.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda los principios de arquitectura limpia y cómo se aplican en aplicaciones Node.js.
- Considera el impacto de las desviaciones en la funcionalidad y mantenibilidad del servicio.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los principios de código limpio y arquitectura limpia?
- **paraQueSirve**: ¿Para qué sirven los principios de código limpio y arquitectura limpia en el desarrollo de aplicaciones Node.js?
- **comoSeUsa**: ¿Cómo se aplican los principios de código limpio y arquitectura limpia en la refactorización de un servicio de gestión de préstamos?
- **erroresComunes**: ¿Cuáles son los errores comunes al aplicar los principios de código limpio y arquitectura limpia?
- **queDecisionesImplica**: ¿Qué decisiones implica la aplicación de los principios de código limpio y arquitectura limpia en la refactorización de un servicio?

## Criterios de Evaluacion

- Identificación correcta de violaciones a los principios de código limpio.
- Aplicación efectiva de los principios de código limpio en la refactorización del código.
- Uso de herramientas de análisis estático para verificar la calidad del código refactorizado.
- Verificación de la adhesión a los principios de arquitectura limpia.
- Documentación clara y completa de los hallazgos, propuestas de mejora, cambios realizados y verificación de la arquitectura limpia.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
