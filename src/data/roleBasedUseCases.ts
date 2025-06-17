
import { UseCase } from './types';

export const roleBasedUseCases: UseCase[] = [
  // Role-based Use Cases (no industry assignment)
  {
    id: 'role-1',
    role: 'Data Engineer',
    title: 'Multi-Tenant Pipeline Configuration',
    whyItMatters: 'Simplify onboarding of new data sources or clients by enabling parameterized pipelines',
    dataSources: ['Multi-client APIs', 'tenant configs'],
    entitiesTables: ['pipeline_configs', 'tenant_metadata'],
    sampleFields: ['tenant_id', 'schedule', 'destinations'],
    reactorRole: 'Support observability of pipeline configs per client/environment',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-soundcommerce-yellow'
  },
  {
    id: 'role-2',
    role: 'Data Scientist',
    title: 'Multi-Channel Prediction Pipeline',
    whyItMatters: 'Feed Marketing and conversion data warehouse that then feeds into models predicting behavior across channels',
    dataSources: ['Web/app analytics', 'CRM', 'Ad platforms'],
    entitiesTables: ['touchpoints', 'model_outputs', 'conversion_labels'],
    sampleFields: ['session_id', 'channel', 'conversion_flag'],
    reactorRole: 'Ingest and unify omnichannel marketing behavior, conversion success flags to update models for predictive targeting and LTV.',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-blue'
  },
  {
    id: 'role-3',
    role: 'Data Analyst',
    title: 'Business KPI Layer for Self-Service BI',
    whyItMatters: 'Create unified reporting models for analysts to build dashboards quickly',
    dataSources: ['EDW', 'Excel/Sheets', 'CRM'],
    entitiesTables: ['kpi_model', 'metric_definitions'],
    sampleFields: ['kpi_id', 'business_unit', 'current_value'],
    reactorRole: 'Curate clean tables for Looker, Tableau, or Power BI access',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-soundcommerce-yellow'
  },
  {
    id: 'role-4',
    role: 'Data Analyst',
    title: 'Change Data Capture Reporting',
    whyItMatters: 'Surface meaningful changes (vs. full reloads) in operations or customer data',
    dataSources: ['CRM', 'ERP', 'Billing'],
    entitiesTables: ['cdc_snapshot', 'changes_log', 'report_views'],
    sampleFields: ['entity_id', 'field_changed', 'before', 'after'],
    reactorRole: 'Ingest update deltas and update tables that support change reports to stakeholders',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-medium-blue'
  },
  {
    id: 'role-5',
    role: 'Data Governance / Security',
    title: 'Field-Level Lineage and Access Audit',
    whyItMatters: 'Ensure data privacy, regulatory compliance, and traceability',
    dataSources: ['EDW logs', 'RBAC systems'],
    entitiesTables: ['lineage_map', 'audit_logs', 'field_access'],
    sampleFields: ['field_name', 'user_id', 'access_time'],
    reactorRole: 'Ingest log access and enable visibility into data lineage down to the field level',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-reactor-dark-blue'
  }
];
