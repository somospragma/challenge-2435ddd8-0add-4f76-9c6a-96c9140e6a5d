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