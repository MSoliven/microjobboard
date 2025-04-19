export * from './collections.js';
export * from './environmentvalues.js';
export * from './locales.js';
export * from './redisclient.js';
export * from './service.js';

export type ConnectionRole = 'administrator' | 'employer' | 'worker';
export type UserRole = Exclude<ConnectionRole, 'worker'>;
export type ConnectionType = 'service' | 'user' | 'application'; // 'service' is for internal services, 'user' is for users, 'application' is for external applications

export type PaymentMethod = 'transfer' | 'credit-card' | 'cash' | 'check';
export type PaymentStatus = 'paid' | 'partially-paid' | 'unpaid';
export type ContractStatus = 'active' | 'ended' | 'terminated';
export type ContractTimeRange = 'days' | 'weeks' | 'months' | 'years';

export type JobType = 'fulltime' | 'parttime' | 'contract';
