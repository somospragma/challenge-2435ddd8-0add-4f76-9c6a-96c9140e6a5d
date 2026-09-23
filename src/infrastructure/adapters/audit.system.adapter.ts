import { Injectable } from '@nestjs/common';
import { AuditSystemPort } from '@domain/ports/audit.system.port';

@Injectable()
export class AuditSystemAdapter implements AuditSystemPort {
  constructor() {}

  async logAuditEvent(event: string): Promise<void> {
    console.log(`Audit event logged: ${event}`);
  }

  async getAuditLogs(): Promise<string[]> {
    // Placeholder for actual audit log retrieval logic
    return ['Log 1', 'Log 2', 'Log 3'];
  }
}