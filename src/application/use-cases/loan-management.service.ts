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