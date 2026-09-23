# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Refactorización de código para aplicar principios de código limpio**.

| | |
|---|---|
| Tema | aplicación de código limpio y eficiente |
| Nivel | senior-l1 |
| Chapter | Backend |
| Especialidad | Node |
| Stack | TypeScript / NestJS 11 |
| Patron arquitectonico | hexagonal/clean |
| Tiempo estimado | 8 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json y tsconfig.json en la raiz`
- `src/main.ts como bootstrap`
- `modulo raiz de Nest`
- `src/domain con entidades y puertos`
- `src/application con casos de uso`
- `src/infrastructure con repositorios y controller`

Trampas conocidas:

- No inventes versiones de npm. Usa rango con caret (`^5.7.0`) sobre una version que exista, o deja que el paquete la resuelva. Una version inexistente (ej. `@types/react-router-dom@6.19.0`) hace fallar `npm install` con ETARGET y el proyecto no instala.
- Los paquetes `@types/*` solo hacen falta para librerias que no traen sus propios tipos. React Router, NestJS y Prisma ya los traen: agregar `@types/` de esos rompe o sobra.
- El `tsconfig.json` es obligatorio: sin el, `tsc` no sabe que compilar.

Dependencias:

- @nestjs/common 11.2.0
- @nestjs/core 11.2.0
- @nestjs/platform-express 11.2.0
- typescript 5.7.0
- reflect-metadata 0.2.2
- class-validator 0.14.1
- class-transformer 0.5.1
- @nestjs/swagger 7.3.1
- eslint 9.5.0
- @typescript-eslint/eslint-plugin 7.12.0
- @typescript-eslint/parser 7.12.0
- jest 29.7.0
- @nestjs/testing 11.2.0
- supertest 6.3.4

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Análisis del código existente**: Documento con el análisis del código y propuestas de mejora.
- **Fase 2 — Refactorización del código**: Código refactorizado y documento de cambios.
- **Fase 3 — Verificación de la arquitectura limpia**: Documento de verificación de la arquitectura limpia y pruebas de funcionalidad.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Lo que falta y tenes que completar

### 1. Referencias colgando (8)

Salieron de un analisis estatico del codigo que SI esta en el repo. Cada una rompe la compilacion:

- [ ] `src/infrastructure/repositories/loan.repository.ts` — `Loan.push`
      Se invoca `push` sobre `Loan`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/infrastructure/repositories/loan.repository.ts` — `Loan.find`
      Se invoca `find` sobre `Loan`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/infrastructure/repositories/loan.repository.ts` — `Loan.filter`
      Se invoca `filter` sobre `Loan`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/application/use-cases/loan-management.service.ts` — `AuditSystemPort.logLoanCreation`
      Se invoca `logLoanCreation` sobre `AuditSystemPort`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/application/use-cases/loan-management.service.ts` — `AuditSystemPort.logLoanUpdate`
      Se invoca `logLoanUpdate` sobre `AuditSystemPort`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/application/use-cases/loan-management.service.ts` — `AuditSystemPort.logLoanDeletion`
      Se invoca `logLoanDeletion` sobre `AuditSystemPort`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `test/loan-management.service.spec.ts` — `LoanManagementService.updateLoanStatus`
      Se invoca `updateLoanStatus` sobre `LoanManagementService`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `package.json` — `typescript@5.7.0`
      typescript declara la version 5.7.0, pero el registry de npm respondio que esa version no existe. Es una version inventada: reemplazala por una version publicada real, o si no se conoce con certeza, usa el mecanismo centralizado del ecosistema (BOM/parent/platform/version catalog) y no declares una version individual.

### Presentes (18)

- `package.json`
- `tsconfig.json`
- `src/main.ts`
- `src/domain/entities/loan.entity.ts`
- `src/domain/ports/loan.repository.port.ts`
- `src/domain/ports/risk-evaluation.port.ts`
- `src/domain/ports/audit.system.port.ts`
- `src/infrastructure/repositories/loan.repository.ts`
- `src/infrastructure/adapters/risk-evaluation.adapter.ts`
- `src/infrastructure/adapters/audit.system.adapter.ts`
- `src/infrastructure/controllers/loan.controller.ts`
- `src/app.module.ts`
- `src/application/use-cases/loan-management.service.ts`
- `src/shared/exceptions/http-exception.filter.ts`
- `src/shared/validation/loan.validator.ts`
- `.eslintrc.js`
- `README.md`
- `test/loan-management.service.spec.ts`

### Capas del patron declarado

Cada una tiene que existir como directorio real con al menos un archivo. Codigo plano en la raiz no satisface el patron.

- `src/domain`
- `src/application`
- `src/infrastructure`
- `src/shared`
- `test`

## Verificacion

```bash
npm install && npm run build
```

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **hexagonal/clean**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Backend, Especialidad Desarrollador, Tecnología Node, Senior
- Brecha que el reto ataca: Aplica principios y herramientas de verificación para escribir código limpio (KISS, SOLID, YAGNI y DRY). El estudiante debe refactorizar código existente aplicando estos principios, usar herramientas de análisis estático y demostrar comprensión de arquitectura limpia en aplicaciones Node.js.
- Mision: Candidato con experiencia como desarrollador backend en Node.js, Senior L1

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
