
import { UseCase } from './types';

export const roleBasedUseCases: UseCase[] = [
  // Role-based Use Cases (no industry assignment)
  {
    id: 'role-1',
    role: 'Data Engineer',
    title: 'Schema Drift Detection & Auto-Healing',
    whyItMatters: 'Prevent pipeline breaks and manual intervention from unexpected schema changes',
    dataSources: ['APIs', 'SaaS connectors', 'Kafka topics'],
    entitiesTables: ['raw_events', 'ingest_logs', 'schema_snapshots'],
    sampleFields: ['source_field', 'data_type', 'table_name'],
    reactorRole: 'Monitor schema evolution and auto-map fields or flag drift with AI suggestions',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-medium-blue'
  },
  {
    id: 'role-2',
    role: 'Data Engineer',
    title: 'Multi-Tenant Pipeline Configuration',
    whyItMatters: 'Simplify onboarding of new data sources or clients by enabling parameterized pipelines',
    dataSources: ['Multi-client APIs', 'tenant configs'],
    entitiesTables: ['pipeline_configs', 'tenant_metadata'],
    sampleFields: ['tenant_id', 'schedule', 'destinations'],
    reactorRole: 'Support dynamic pipelines with templated configs per client/environment',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-soundcommerce-yellow'
  },
  {
    id: 'role-3',
    role: 'Data Scientist',
    title: 'Vector Database Sync for Embedding Search',
    whyItMatters: 'Enable document and event retrieval for LLM-powered search and RAG applications',
    dataSources: ['Unstructured text', 'event logs'],
    entitiesTables: ['documents', 'embeddings', 'vector_store_metadata'],
    sampleFields: ['doc_id', 'embedding', 'timestamp'],
    reactorRole: 'Transform raw data into vector format and sync to Pinecone, Weaviate, or pgvector',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-red'
  },
  {
    id: 'role-4',
    role: 'Data Scientist',
    title: 'Feature Store Feed for AI/ML Models',
    whyItMatters: 'Maintain reliable, up-to-date feature data for training and real-time inference',
    dataSources: ['EDW', 'APIs', 'IoT feeds'],
    entitiesTables: ['features', 'model_inputs', 'training_data'],
    sampleFields: ['entity_id', 'feature_name', 'value'],
    reactorRole: 'Stream structured feature data to online/offline stores (Feast, Tecton, etc.)',
    gradientClass: 'bg-gradient-to-br from-reactor-red to-reactor-dark-blue'
  },
  {
    id: 'role-5',
    role: 'Data Scientist',
    title: 'MCP (Multi-Channel Prediction) Pipeline',
    whyItMatters: 'Feed clickstream and conversion data into models predicting behavior across channels',
    dataSources: ['Web/app analytics', 'CRM', 'Ad platforms'],
    entitiesTables: ['touchpoints', 'model_outputs', 'conversion_labels'],
    sampleFields: ['session_id', 'channel', 'conversion_flag'],
    reactorRole: 'Ingest and unify omnichannel behavior for AI targeting and LTV prediction',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-blue'
  },
  {
    id: 'role-6',
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
    id: 'role-7',
    role: 'Data Analyst',
    title: 'Change Data Capture Reporting',
    whyItMatters: 'Surface meaningful changes (vs. full reloads) in operations or customer data',
    dataSources: ['CRM', 'ERP', 'Billing'],
    entitiesTables: ['cdc_snapshot', 'changes_log', 'report_views'],
    sampleFields: ['entity_id', 'field_changed', 'before', 'after'],
    reactorRole: 'Track deltas and expose change reports to stakeholders',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-medium-blue'
  },
  {
    id: 'role-8',
    role: 'ML/Ops Engineer',
    title: 'Model Drift Monitoring Pipeline',
    whyItMatters: 'Detect when deployed ML models begin performing poorly over time',
    dataSources: ['Prediction APIs', 'Feature store'],
    entitiesTables: ['model_outputs', 'drift_scores', 'performance_metrics'],
    sampleFields: ['model_id', 'accuracy', 'drift_score'],
    reactorRole: 'Compare real-time predictions to ground truth to trigger retraining or alerting',
    gradientClass: 'bg-gradient-to-br from-reactor-red to-reactor-blue'
  },
  {
    id: 'role-9',
    role: 'Data Governance / Security',
    title: 'Field-Level Lineage and Access Audit',
    whyItMatters: 'Ensure data privacy, regulatory compliance, and traceability',
    dataSources: ['EDW logs', 'RBAC systems'],
    entitiesTables: ['lineage_map', 'audit_logs', 'field_access'],
    sampleFields: ['field_name', 'user_id', 'access_time'],
    reactorRole: 'Log access and enable visibility into data lineage down to the field level',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-reactor-dark-blue'
  }
];
