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