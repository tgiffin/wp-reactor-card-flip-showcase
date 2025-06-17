
import { UseCase } from '../types';

export const financeUseCases: UseCase[] = [
  {
    id: 'finance-1',
    industry: 'Financial Services',
    title: 'Customer Touchpoint Timeline',
    whyItMatters: 'Build a full timeline of a user\'s app, call, and transaction activity',
    dataSources: ['Call center logs', 'App usage', 'CRM'],
    entitiesTables: ['interactions', 'app_sessions', 'transactions'],
    sampleFields: ['customer_id', 'timestamp', 'channel'],
    reactorRole: 'Unify event streams into chronological customer journeys',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-medium-blue'
  },
  {
    id: 'finance-2',
    industry: 'Financial Services',
    title: 'Product Upsell Funnel',
    whyItMatters: 'Track conversion from cross-sell campaigns to application started',
    dataSources: ['Campaign system', 'CRM', 'Application portal'],
    entitiesTables: ['upsell_offers', 'applications', 'campaigns'],
    sampleFields: ['offer_id', 'user_id', 'funnel_step'],
    reactorRole: 'Attribute each campaign to customer engagement steps',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-soundcommerce-yellow'
  },
  {
    id: 'finance-3',
    industry: 'Financial Services',
    title: '360° Financial Profile',
    whyItMatters: 'Unify customer data across loans, cards, and investments for service reps',
    dataSources: ['Loan systems', 'Banking core', 'CRM'],
    entitiesTables: ['customer_financials', 'products', 'balances'],
    sampleFields: ['customer_id', 'account_type', 'balance'],
    reactorRole: 'Normalize across systems and provide unified view to support tools',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-dark-blue'
  },
  {
    id: 'finance-4',
    industry: 'Financial Services',
    title: 'Transaction Behavior Analytics',
    whyItMatters: 'Detect anomalies and behavioral shifts to flag potential fraud',
    dataSources: ['Banking logs', 'Payment processors'],
    entitiesTables: ['transactions', 'risk_signals'],
    sampleFields: ['transaction_id', 'pattern_score', 'category'],
    reactorRole: 'Run transformations to flag thresholds, support ML models',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-blue'
  },
  {
    id: 'finance-5',
    industry: 'Financial Services',
    title: 'GDPR/CCPA Audit Layer',
    whyItMatters: 'Prove compliant handling of personal data for regulators',
    dataSources: ['Consent manager', 'CRM', 'ETL metadata'],
    entitiesTables: ['data_access_logs', 'deletion_requests'],
    sampleFields: ['user_id', 'table_accessed', 'timestamp'],
    reactorRole: 'Log every data touch and enable audit trails for compliance teams',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-soundcommerce-yellow'
  }
];
