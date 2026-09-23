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