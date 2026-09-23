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