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