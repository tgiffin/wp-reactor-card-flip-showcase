
import { roleBasedUseCases } from './roleBasedUseCases';
import { industryUseCases } from './industryUseCases';

export type { UseCase } from './types';

export const useCases = [...roleBasedUseCases, ...industryUseCases];

export const industries = [
  'Retail',
  'Travel & Hospitality', 
  'Consumer Products',
  'Media & Entertainment',
  'Retail Financial Services',
  'Healthcare',
  'Elder Care',
  'Automotive',
  'High Tech/B2B'
];

export const roles = [
  'Data Engineer',
  'Data Scientist', 
  'Data Analyst',
  'Data Governance / Security'
];
