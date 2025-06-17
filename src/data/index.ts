
import { roleBasedUseCases } from './roleBasedUseCases';
import { industryUseCases } from './industryUseCases';

export type { UseCase } from './types';

export const useCases = [...roleBasedUseCases, ...industryUseCases];

export const industries = [
  'Retail',
  'Travel & Hospitality', 
  'Consumer Products',
  'Media & Entertainment',
  'Financial Services',
  'Elder Care',
  'Automotive',
  'B2B / High Tech'
];

export const roles = [
  'Data Engineer',
  'Data Scientist', 
  'Data Analyst',
  'Data Governance / Security'
];
