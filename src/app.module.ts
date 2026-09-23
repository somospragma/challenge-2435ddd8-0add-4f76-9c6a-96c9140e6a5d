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