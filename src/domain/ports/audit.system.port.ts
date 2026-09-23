import { Injectable } from '@nestjs/common';
import { AuditEvent } from '@domain/entities/audit-event.entity';

export interface AuditSystemPort {
  recordEvent(event: AuditEvent): Promise<void>;
  getEventsByEntity(entityType: string, entityId: string): Promise<AuditEvent[]>;
}

@Injectable()
export class AuditSystemPortImpl implements AuditSystemPort {
  async recordEvent(event: AuditEvent): Promise<void> {
    // Simulate the recording of an audit event
    console.log(`Audit event recorded: ${JSON.stringify(event)}`);
  }

  async getEventsByEntity(entityType: string, entityId: string): Promise<AuditEvent[]> {
    // Simulate fetching audit events by entity
    return [
      new AuditEvent('1', entityType, entityId, 'CREATE', new Date(), 'User 1'),
      new AuditEvent('2', entityType, entityId, 'UPDATE', new Date(), 'User 2'),
    ];
  }
}

export class AuditEvent {
  constructor(
    public id: string,
    public entityType: string,
    public entityId: string,
    public action: string,
    public timestamp: Date,
    public user: string,
  ) {}
}