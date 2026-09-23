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