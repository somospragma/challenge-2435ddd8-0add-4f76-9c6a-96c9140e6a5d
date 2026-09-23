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