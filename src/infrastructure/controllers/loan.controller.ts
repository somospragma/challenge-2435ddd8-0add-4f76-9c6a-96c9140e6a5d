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