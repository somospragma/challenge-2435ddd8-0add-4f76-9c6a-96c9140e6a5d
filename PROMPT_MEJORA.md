# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Referencias colgando en el codigo que si esta

Cada una rompe la compilacion:

- `src/infrastructure/repositories/loan.repository.ts` — `Loan.push`: Se invoca `push` sobre `Loan`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/infrastructure/repositories/loan.repository.ts` — `Loan.find`: Se invoca `find` sobre `Loan`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/infrastructure/repositories/loan.repository.ts` — `Loan.filter`: Se invoca `filter` sobre `Loan`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/application/use-cases/loan-management.service.ts` — `AuditSystemPort.logLoanCreation`: Se invoca `logLoanCreation` sobre `AuditSystemPort`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/application/use-cases/loan-management.service.ts` — `AuditSystemPort.logLoanUpdate`: Se invoca `logLoanUpdate` sobre `AuditSystemPort`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/application/use-cases/loan-management.service.ts` — `AuditSystemPort.logLoanDeletion`: Se invoca `logLoanDeletion` sobre `AuditSystemPort`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `test/loan-management.service.spec.ts` — `LoanManagementService.updateLoanStatus`: Se invoca `updateLoanStatus` sobre `LoanManagementService`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `package.json` — `typescript@5.7.0`: typescript declara la version 5.7.0, pero el registry de npm respondio que esa version no existe. Es una version inventada: reemplazala por una version publicada real, o si no se conoce con certeza, usa el mecanismo centralizado del ecosistema (BOM/parent/platform/version catalog) y no declares una version individual.

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Backend, Especialidad Desarrollador, Tecnología Node, Senior

### Brecha de conocimiento
Aplica principios y herramientas de verificación para escribir código limpio (KISS, SOLID, YAGNI y DRY). El estudiante debe refactorizar código existente aplicando estos principios, usar herramientas de análisis estático y demostrar comprensión de arquitectura limpia en aplicaciones Node.js.

### Misión / candidato
Candidato con experiencia como desarrollador backend en Node.js, Senior L1

### Reto
- Tema: aplicación de código limpio y eficiente
- Seniority: senior-l1
- Tipo: practical
- Título: Refactorización de código para aplicar principios de código limpio
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Análisis del código existente — objetivo: Identificar áreas de mejora en el código actual. — entregable (NO resolver): Documento con el análisis del código y propuestas de mejora.
- Fase 2: Refactorización del código — objetivo: Aplicar los principios de código limpio al código existente. — entregable (NO resolver): Código refactorizado y documento de cambios.
- Fase 3: Verificación de la arquitectura limpia — objetivo: Verificar que el código refactorizado sigue los principios de arquitectura limpia. — entregable (NO resolver): Documento de verificación de la arquitectura limpia y pruebas de funcionalidad.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "fin-pragmatica-loan-management",
  "version": "1.0.0",
  "description": "Servicio de gestión de préstamos con arquitectura hexagonal para FinPragmatica",
  "main": "dist/main.js",
  "scripts": {
    "prebuild": "rimraf dist",
    "build": "nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json"
  },
  "keywords": [],
  "author": "FinPragmatica",
  "license": "MIT",
  "dependencies": {
    "@nestjs/common": "11.2.0",
    "@nestjs/core": "11.2.0",
    "@nestjs/platform-express": "11.2.0",
    "reflect-metadata": "0.2.2",
    "class-validator": "0.14.1",
    "class-transformer": "0.5.1",
    "@nestjs/swagger": "7.3.1"
  },
  "devDependencies": {
    "@nestjs/testing": "11.2.0",
    "@types/jest": "29.5.12",
    "@types/node": "22.5.0",
    "@types/supertest": "2.0.16",
    "@typescript-eslint/eslint-plugin": "7.12.0",
    "@typescript-eslint/parser": "7.12.0",
    "eslint": "9.5.0",
    "eslint-config-prettier": "9.1.0",
    "eslint-plugin-prettier": "5.1.3",
    "jest": "29.7.0",
    "prettier": "3.3.2",
    "rimraf": "5.0.7",
    "supertest": "6.3.4",
    "ts-jest": "29.1.5",
    "ts-loader": "9.5.1",
    "ts-node": "10.9.2",
    "tsconfig-paths": "4.2.0",
    "typescript": "5.7.0"
  },
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "rootDir": "src",
    "testRegex": ".spec.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "collectCoverageFrom": [
      "**/*.(t|j)s"
    ],
    "coverageDirectory": "../coverage",
    "testEnvironment": "node"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "es2022",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true,
    "skipLibCheck": true,
    "strictNullChecks": true,
    "noImplicitAny": true,
    "strictBindCallApply": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "paths": {
      "@domain/*": ["src/domain/*"],
      "@application/*": ["src/application/*"],
      "@infrastructure/*": ["src/infrastructure/*"],
      "@shared/*": ["src/shared/*"]
    }
  },
  "exclude": ["node_modules", "dist", "test", "**/*.spec.ts"]
}

// === ARCHIVO: src/main.ts ===
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from '@shared/exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('FinPragmatica Loan Management API')
    .setDescription('API para gestión de préstamos con evaluación de riesgos y auditoría')
    .setVersion('1.0')
    .addTag('loans')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log('Application is running on: http://localhost:3000');
  console.log('API documentation available at: http://localhost:3000/api');
}
bootstrap();

// === ARCHIVO: src/domain/entities/loan.entity.ts ===
import { IsNumber, IsString, IsDate, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum LoanStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  DISBURSED = 'DISBURSED',
  PAID = 'PAID',
  DEFAULTED = 'DEFAULTED'
}

export class Loan {
  @ApiProperty({ description: 'Unique identifier for the loan', example: 'a1b2c3d4' })
  @IsString()
  id: string;

  @ApiProperty({ description: 'Customer identifier', example: 'cust123' })
  @IsString()
  customerId: string;

  @ApiProperty({ description: 'Requested loan amount', example: 5000 })
  @IsNumber()
  amount: number;

  @ApiProperty({ description: 'Loan term in months', example: 12 })
  @IsNumber()
  termMonths: number;

  @ApiProperty({ description: 'Annual interest rate', example: 7.5 })
  @IsNumber()
  interestRate: number;

  @ApiProperty({ description: 'Current status of the loan', enum: LoanStatus })
  @IsEnum(LoanStatus)
  status: LoanStatus;

  @ApiProperty({ description: 'Date when the loan was requested', example: '2023-10-01' })
  @IsDate()
  requestDate: Date;

  @ApiProperty({ description: 'Date when the loan was approved/rejected', example: '2023-10-02', required: false })
  @IsDate()
  @IsOptional()
  decisionDate?: Date;

  @ApiProperty({ description: 'Date when the loan was disbursed', example: '2023-10-03', required: false })
  @IsDate()
  @IsOptional()
  disbursementDate?: Date;

  @ApiProperty({ description: 'Date when the loan was fully paid', example: '2024-10-01', required: false })
  @IsDate()
  @IsOptional()
  paidDate?: Date;

  @ApiProperty({ description: 'Risk score from evaluation service', example: 75, required: false })
  @IsNumber()
  @IsOptional()
  riskScore?: number;

  @ApiProperty({ description: 'Flag indicating if loan requires manual review', example: false })
  @IsOptional()
  requiresManualReview?: boolean;

  constructor(
    id: string,
    customerId: string,
    amount: number,
    termMonths: number,
    interestRate: number,
    status: LoanStatus,
    requestDate: Date,
    decisionDate?: Date,
    disbursementDate?: Date,
    paidDate?: Date,
    riskScore?: number,
    requiresManualReview?: boolean
  ) {
    this.id = id;
    this.customerId = customerId;
    this.amount = amount;
    this.termMonths = termMonths;
    this.interestRate = interestRate;
    this.status = status;
    this.requestDate = requestDate;
    this.decisionDate = decisionDate;
    this.disbursementDate = disbursementDate;
    this.paidDate = paidDate;
    this.riskScore = riskScore;
    this.requiresManualReview = requiresManualReview || false;
  }

  calculateMonthlyPayment(): number {
    const monthlyRate = this.interestRate / 100 / 12;
    const numerator = this.amount * monthlyRate * Math.pow(1 + monthlyRate, this.termMonths);
    const denominator = Math.pow(1 + monthlyRate, this.termMonths) - 1;
    return parseFloat((numerator / denominator).toFixed(2));
  }

  updateStatus(newStatus: LoanStatus): void {
    if (!this.canTransitionTo(newStatus)) {
      throw new Error(`Invalid status transition from ${this.status} to ${newStatus}`);
    }
    this.status = newStatus;
    const now = new Date();
    switch (newStatus) {
      case LoanStatus.APPROVED:
      case LoanStatus.REJECTED:
        this.decisionDate = now;
        break;
      case LoanStatus.DISBURSED:
        this.disbursementDate = now;
        break;
      case LoanStatus.PAID:
        this.paidDate = now;
        break;
    }
  }

  private canTransitionTo(newStatus: LoanStatus): boolean {
    const validTransitions: Record<LoanStatus, LoanStatus[]> = {
      [LoanStatus.PENDING]: [LoanStatus.APPROVED, LoanStatus.REJECTED],
      [LoanStatus.APPROVED]: [LoanStatus.DISBURSED, LoanStatus.REJECTED],
      [LoanStatus.REJECTED]: [],
      [LoanStatus.DISBURSED]: [LoanStatus.PAID, LoanStatus.DEFAULTED],
      [LoanStatus.PAID]: [],
      [LoanStatus.DEFAULTED]: []
    };
    return validTransitions[this.status].includes(newStatus);
  }

  isHighRisk(): boolean {
    return this.riskScore !== undefined && this.riskScore < 50;
  }
}

// === ARCHIVO: src/domain/ports/loan.repository.port.ts ===
import { Loan } from '../entities/loan.entity';

export interface LoanRepositoryPort {
  /**
   * Saves a loan entity to the repository
   * @param loan The loan entity to save
   * @returns Promise resolving to the saved loan entity
   */
  save(loan: Loan): Promise<Loan>;

  /**
   * Finds a loan by its ID
   * @param id The loan ID
   * @returns Promise resolving to the loan if found, or undefined if not found
   */
  findById(id: string): Promise<Loan | undefined>;

  /**
   * Finds all loans for a specific customer
   * @param customerId The customer ID
   * @returns Promise resolving to an array of loans
   */
  findByCustomerId(customerId: string): Promise<Loan[]>;

  /**
   * Finds loans matching specific criteria
   * @param criteria Object containing search criteria
   * @returns Promise resolving to an array of matching loans
   */
  findByCriteria(criteria: {
    status?: string;
    minAmount?: number;
    maxAmount?: number;
    requestDateFrom?: Date;
    requestDateTo?: Date;
  }): Promise<Loan[]>;

  /**
   * Updates the status of a loan
   * @param id The loan ID
   * @param newStatus The new status to set
   * @returns Promise resolving to the updated loan
   */
  updateStatus(id: string, newStatus: string): Promise<Loan>;

  /**
   * Deletes a loan by its ID
   * @param id The loan ID
   * @returns Promise resolving when the loan is deleted
   */
  delete(id: string): Promise<void>;
}

// === ARCHIVO: src/domain/ports/risk-evaluation.port.ts ===
import { Loan } from '../entities/loan.entity';

export interface RiskEvaluationResult {
  riskScore: number;
  requiresManualReview: boolean;
  rejectionReasons: string[];
}

export interface RiskEvaluationPort {
  /**
   * Evaluates the risk of a loan application
   * @param loan The loan to evaluate
   * @returns Promise resolving to the risk evaluation result
   */
  evaluateLoanRisk(loan: Loan): Promise<RiskEvaluationResult>;

  /**
   * Checks if the risk evaluation service is available
   * @returns Promise resolving to true if available, false otherwise
   */
  isAvailable(): Promise<boolean>;
}

// === ARCHIVO: src/domain/ports/audit.system.port.ts ===
import { Injectable } from '@nestjs/common';
import { AuditEvent } from '@domain/entities/audit-event.entity';

export interface AuditSystemPort {
  recordEvent(event: AuditEvent): Promise<void>;
  getEventsByEntity(entityType: string, entityId: string): Promise<AuditEvent[]>;
}

@Injectable()
export class AuditSystemPortImpl implements AuditSystemPort {
  async recordEvent(event: AuditEvent): Promise<void> {
    // Simulate the recording of an audit event
    console.log(`Audit event recorded: ${JSON.stringify(event)}`);
  }

  async getEventsByEntity(entityType: string, entityId: string): Promise<AuditEvent[]> {
    // Simulate fetching audit events by entity
    return [
      new AuditEvent('1', entityType, entityId, 'CREATE', new Date(), 'User 1'),
      new AuditEvent('2', entityType, entityId, 'UPDATE', new Date(), 'User 2'),
    ];
  }
}

export class AuditEvent {
  constructor(
    public id: string,
    public entityType: string,
    public entityId: string,
    public action: string,
    public timestamp: Date,
    public user: string,
  ) {}
}

// === ARCHIVO: src/infrastructure/repositories/loan.repository.ts ===
import { Injectable } from '@nestjs/common';
import { Loan } from '@domain/entities/loan.entity';
import { LoanRepositoryPort } from '@domain/ports/loan.repository.port';

@Injectable()
export class LoanRepository implements LoanRepositoryPort {
  private loans: Loan[] = [];

  constructor() {}

  async save(loan: Loan): Promise<Loan> {
    this.loans.push(loan);
    return loan;
  }

  async findById(id: string): Promise<Loan | undefined> {
    return this.loans.find(loan => loan.id === id);
  }

  async findByCustomerId(customerId: string): Promise<Loan[]> {
    return this.loans.filter(loan => loan.customerId === customerId);
  }

  async findByCriteria(criteria: any): Promise<Loan[]> {
    return this.loans.filter(loan => {
      return Object.keys(criteria).every(key => {
        return loan[key] === criteria[key];
      });
    });
  }

  async updateStatus(id: string, newStatus: string): Promise<Loan> {
    const loan = this.loans.find(loan => loan.id === id);
    if (loan) {
      loan.updateStatus(newStatus as any);
      return loan;
    }
    throw new Error('Loan not found');
  }

  async delete(id: string): Promise<void> {
    this.loans = this.loans.filter(loan => loan.id!== id);
  }
}

// === ARCHIVO: src/infrastructure/adapters/risk-evaluation.adapter.ts ===
import { Injectable } from '@nestjs/common';
import { Loan } from '@domain/entities/loan.entity';
import { RiskEvaluationPort } from '@domain/ports/risk-evaluation.port';
import { RiskEvaluationResult } from '@domain/ports/risk-evaluation.port';

@Injectable()
export class RiskEvaluationAdapter implements RiskEvaluationPort {
  private isServiceAvailable: boolean = true;

  constructor() {}

  async evaluateLoanRisk(loan: Loan): Promise<RiskEvaluationResult> {
    if (!this.isServiceAvailable) {
      throw new Error('Risk evaluation service is unavailable');
    }

    const riskScore = this.calculateRiskScore(loan);
    const isHighRisk = riskScore > 70;

    return {
      riskScore,
      isHighRisk,
    } as RiskEvaluationResult;
  }

  async isAvailable(): Promise<boolean> {
    return this.isServiceAvailable;
  }

  private calculateRiskScore(loan: Loan): number {
    // Placeholder for actual risk calculation logic
    return Math.floor(Math.random() * 100);
  }
}

// === ARCHIVO: src/infrastructure/adapters/audit.system.adapter.ts ===
import { Injectable } from '@nestjs/common';
import { AuditSystemPort } from '@domain/ports/audit.system.port';

@Injectable()
export class AuditSystemAdapter implements AuditSystemPort {
  constructor() {}

  async logAuditEvent(event: string): Promise<void> {
    console.log(`Audit event logged: ${event}`);
  }

  async getAuditLogs(): Promise<string[]> {
    // Placeholder for actual audit log retrieval logic
    return ['Log 1', 'Log 2', 'Log 3'];
  }
}

// === ARCHIVO: src/infrastructure/controllers/loan.controller.ts ===
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LoanManagementService } from '@application/use-cases/loan-management.service';
import { CreateLoanDto } from '@domain/dtos/create-loan.dto';
import { UpdateLoanDto } from '@domain/dtos/update-loan.dto';
import { Loan } from '@domain/entities/loan.entity';

@Controller('loans')
export class LoanController {
  constructor(private readonly loanManagementService: LoanManagementService) {}

  @Post()
  async createLoan(@Body() createLoanDto: CreateLoanDto): Promise<Loan> {
    try {
      return await this.loanManagementService.createLoan(createLoanDto);
    } catch (error) {
      throw new Error(`Failed to create loan: ${error.message}`);
    }
  }

  @Get(':id')
  async getLoanById(@Param('id') id: string): Promise<Loan> {
    try {
      return await this.loanManagementService.getLoanById(id);
    } catch (error) {
      throw new Error(`Failed to get loan by ID: ${error.message}`);
    }
  }

  @Get('customer/:customerId')
  async getLoansByCustomerId(@Param('customerId') customerId: string): Promise<Loan[]> {
    try {
      return await this.loanManagementService.getLoansByCustomerId(customerId);
    } catch (error) {
      throw new Error(`Failed to get loans by customer ID: ${error.message}`);
    }
  }

  @Put(':id')
  async updateLoan(@Param('id') id: string, @Body() updateLoanDto: UpdateLoanDto): Promise<Loan> {
    try {
      return await this.loanManagementService.updateLoan(id, updateLoanDto);
    } catch (error) {
      throw new Error(`Failed to update loan: ${error.message}`);
    }
  }

  @Delete(':id')
  async deleteLoan(@Param('id') id: string): Promise<void> {
    try {
      await this.loanManagementService.deleteLoan(id);
    } catch (error) {
      throw new Error(`Failed to delete loan: ${error.message}`);
    }
  }
}

// === ARCHIVO: src/app.module.ts ===
import { Module } from '@nestjs/common';
import { LoanController } from '@infrastructure/controllers/loan.controller';
import { LoanManagementService } from '@application/use-cases/loan-management.service';
import { LoanRepository } from '@infrastructure/repositories/loan.repository';
import { RiskEvaluationAdapter } from '@infrastructure/adapters/risk-evaluation.adapter';
import { AuditSystemAdapter } from '@infrastructure/adapters/audit.system.adapter';

@Module({
  imports: [],
  controllers: [LoanController],
  providers: [
    LoanManagementService,
    LoanRepository,
    RiskEvaluationAdapter,
    AuditSystemAdapter,
  ],
})
export class AppModule {}

// === ARCHIVO: src/application/use-cases/loan-management.service.ts ===
import { Injectable } from '@nestjs/common';
import { Loan } from '@domain/entities/loan.entity';
import { LoanRepositoryPort } from '@domain/ports/loan.repository.port';
import { RiskEvaluationPort } from '@domain/ports/risk-evaluation.port';
import { AuditSystemPort } from '@domain/ports/audit.system.port';
import { CreateLoanDto } from '@domain/dtos/create-loan.dto';
import { UpdateLoanDto } from '@domain/dtos/update-loan.dto';

@Injectable()
export class LoanManagementService {
  constructor(
    private readonly loanRepository: LoanRepositoryPort,
    private readonly riskEvaluationService: RiskEvaluationPort,
    private readonly auditSystem: AuditSystemPort,
  ) {}

  async createLoan(createLoanDto: CreateLoanDto): Promise<Loan> {
    const loan = new Loan(
      createLoanDto.customerId,
      createLoanDto.amount,
      createLoanDto.term,
      createLoanDto.interestRate,
    );

    const riskResult = await this.riskEvaluationService.evaluateLoanRisk(loan);
    if (riskResult.isHighRisk) {
      throw new Error('Loan rejected due to high risk');
    }

    await this.auditSystem.logLoanCreation(loan);
    return await this.loanRepository.save(loan);
  }

  async getLoanById(id: string): Promise<Loan> {
    const loan = await this.loanRepository.findById(id);
    if (!loan) {
      throw new Error('Loan not found');
    }
    return loan;
  }

  async getLoansByCustomerId(customerId: string): Promise<Loan[]> {
    return await this.loanRepository.findByCustomerId(customerId);
  }

  async updateLoan(id: string, updateLoanDto: UpdateLoanDto): Promise<Loan> {
    const loan = await this.loanRepository.findById(id);
    if (!loan) {
      throw new Error('Loan not found');
    }

    loan.updateAmount(updateLoanDto.amount);
    loan.updateTerm(updateLoanDto.term);
    loan.updateInterestRate(updateLoanDto.interestRate);

    await this.auditSystem.logLoanUpdate(loan);
    return await this.loanRepository.save(loan);
  }

  async deleteLoan(id: string): Promise<void> {
    const loan = await this.loanRepository.findById(id);
    if (!loan) {
      throw new Error('Loan not found');
    }

    await this.auditSystem.logLoanDeletion(loan);
    await this.loanRepository.delete(id);
  }
}

// === ARCHIVO: src/shared/exceptions/http-exception.filter.ts ===
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    const responseBody = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.message,
    };

    response.status(status).json(responseBody);
  }
}

// === ARCHIVO: src/shared/validation/loan.validator.ts ===
import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { Loan } from '@domain/entities/loan.entity';

@ValidatorConstraint({ async: true })
export class LoanValidatorConstraint implements ValidatorConstraintInterface {
  async validate(loan: Loan) {
    if (!loan) return false;

    const monthlyPayment = loan.calculateMonthlyPayment();
    const isHighRisk = loan.isHighRisk();

    return monthlyPayment > 0 &&!isHighRisk;
  }

  defaultMessage() {
    return 'Invalid loan details';
  }
}

export function IsLoanValid(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: LoanValidatorConstraint,
    });
  };
}

// === ARCHIVO: .eslintrc.js ===
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    'prettier/prettier': ['error', { 'endOfLine': 'auto' }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};

// === ARCHIVO: README.md ===
# FinPragmatica Loan Management

## Descripción
Este es un servicio de gestión de préstamos con arquitectura hexagonal para FinPragmatica. El servicio interactúa con un motor de evaluación de riesgos y un sistema de auditoría.

## Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/finpragmatica/loan-management.git
   cd loan-management
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución
1. Ejecuta el servicio en modo desarrollo:
   ```bash
   npm run start:dev
   ```
2. Ejecuta los tests:
   ```bash
   npm test
   ```

## Estructura de carpetas
- `src/domain`: Entidades y puertos del dominio.
- `src/application`: Casos de uso y servicios de la aplicación.
- `src/infrastructure`: Adaptadores y repositorios de la infraestructura.

## Documentación
- [NestJS Documentation](https://docs.nestjs.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

// === ARCHIVO: test/loan-management.service.spec.ts ===
import { Test, TestingModule } from '@nestjs/testing';
import { LoanManagementService } from '@application/use-cases/loan-management.service';
import { LoanRepositoryPort } from '@domain/ports/loan.repository.port';
import { RiskEvaluationPort } from '@domain/ports/risk-evaluation.port';
import { Loan } from '@domain/entities/loan.entity';

describe('LoanManagementService', () => {
  let service: LoanManagementService;
  let loanRepository: LoanRepositoryPort;
  let riskEvaluationService: RiskEvaluationPort;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoanManagementService,
        {
          provide: LoanRepositoryPort,
          useValue: {
            save: jest.fn(),
            findById: jest.fn(),
            findByCustomerId: jest.fn(),
            findByCriteria: jest.fn(),
            updateStatus: jest.fn(),
            delete: jest.fn(),
          },
        },
        {
          provide: RiskEvaluationPort,
          useValue: {
            evaluateLoanRisk: jest.fn(),
            isAvailable: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<LoanManagementService>(LoanManagementService);
    loanRepository = module.get<LoanRepositoryPort>(LoanRepositoryPort);
    riskEvaluationService = module.get<RiskEvaluationPort>(RiskEvaluationPort);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createLoan', () => {
    it('should create a loan and return it', async () => {
      const createLoanDto = {
        customerId: '1',
        amount: 10000,
        term: 12,
        interestRate: 5,
      };
      const loan = new Loan({
        id: '1',
        customerId: '1',
        amount: 10000,
        term: 12,
        interestRate: 5,
        status: LoanStatus.PENDING,
      });
      jest.spyOn(loanRepository, 'save').mockResolvedValue(loan);
      jest.spyOn(riskEvaluationService, 'evaluateLoanRisk').mockResolvedValue({
        isHighRisk: false,
        riskScore: 70,
      });
      const result = await service.createLoan(createLoanDto);
      expect(result).toEqual(loan);
      expect(loanRepository.save).toHaveBeenCalledWith(loan);
      expect(riskEvaluationService.evaluateLoanRisk).toHaveBeenCalledWith(loan);
    });
  });

  describe('updateLoanStatus', () => {
    it('should update the loan status and return the updated loan', async () => {
      const loanId = '1';
      const newStatus = LoanStatus.APPROVED;
      const loan = new Loan({
        id: '1',
        customerId: '1',
        amount: 10000,
        term: 12,
        interestRate: 5,
        status: LoanStatus.PENDING,
      });
      jest.spyOn(loanRepository, 'findById').mockResolvedValue(loan);
      jest.spyOn(loanRepository, 'updateStatus').mockResolvedValue(loan);
      const result = await service.updateLoanStatus(loanId, newStatus);
      expect(result).toEqual(loan);
      expect(loanRepository.findById).toHaveBeenCalledWith(loanId);
      expect(loanRepository.updateStatus).toHaveBeenCalledWith(loanId, newStatus);
    });
  });
});
```
