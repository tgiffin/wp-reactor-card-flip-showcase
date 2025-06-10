export interface UseCase {
  id: string;
  industry?: string;
  role?: string;
  title: string;
  whyItMatters: string;
  dataSources: string[];
  entitiesTables: string[];
  sampleFields: string[];
  reactorRole: string;
  gradientClass: string;
}

export const useCases: UseCase[] = [
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
  },

  // Retail
  {
    id: '1',
    industry: 'Retail',
    title: 'SKU Performance Snapshot',
    whyItMatters: 'Identify top/bottom sellers by store to improve merchandising decisions',
    dataSources: ['POS', 'eComm', 'WMS'],
    entitiesTables: ['sales_transactions', 'product_catalog', 'store_locations'],
    sampleFields: ['sku_id', 'revenue', 'quantity', 'store_id', 'timestamp'],
    reactorRole: 'Ingest and standardize SKU & sales data across systems; unify for SKU-level insights',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-medium-blue'
  },
  {
    id: '2',
    industry: 'Retail',
    title: 'In-store vs Online Sales Comparison',
    whyItMatters: 'Evaluate contribution and margin by sales channel',
    dataSources: ['POS', 'eComm'],
    entitiesTables: ['sales_transactions'],
    sampleFields: ['channel', 'sku_id', 'revenue'],
    reactorRole: 'Join POS and online transactions with channel metadata',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-soundcommerce-yellow'
  },
  {
    id: '3',
    industry: 'Retail',
    title: 'Inventory Sync Check',
    whyItMatters: 'Detect inventory mismatches to avoid fulfillment errors',
    dataSources: ['ERP', 'WMS'],
    entitiesTables: ['inventory_snapshots', 'stock_transfers'],
    sampleFields: ['sku_id', 'location_id', 'quantity_on_hand'],
    reactorRole: 'Detect deltas between systems for alerts/QA',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-red'
  },
  {
    id: '4',
    industry: 'Retail',
    title: 'Google Sheets as Control Source',
    whyItMatters: 'Allow non-tech users to override pricing/inventory logic',
    dataSources: ['Google Sheets'],
    entitiesTables: ['manager_overrides'],
    sampleFields: ['sku_id', 'override_price', 'notes'],
    reactorRole: 'Merge override sheet with pricing engine pipeline',
    gradientClass: 'bg-gradient-to-br from-reactor-red to-reactor-dark-blue'
  },
  {
    id: '5',
    industry: 'Retail',
    title: 'Loyalty Enrollment Funnel',
    whyItMatters: 'Understand drop-off in loyalty signups across platforms',
    dataSources: ['CRM', 'Website', 'ESP'],
    entitiesTables: ['signups', 'campaigns', 'customer_profiles'],
    sampleFields: ['customer_id', 'source', 'timestamp'],
    reactorRole: 'Join signup, campaign, and profile to track funnel stages',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-blue'
  },
  {
    id: '6',
    industry: 'Retail',
    title: 'Unified SKU Catalog for ML Models',
    whyItMatters: 'Power recommendations & dynamic pricing with clean product data',
    dataSources: ['PIM', 'ERP', 'eComm'],
    entitiesTables: ['product_catalog'],
    sampleFields: ['sku_id', 'attributes', 'availability'],
    reactorRole: 'Cleanse, unify, and validate catalog data for ML readiness',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-soundcommerce-yellow'
  },
  {
    id: '7',
    industry: 'Retail',
    title: 'Real-Time Inventory Feeds',
    whyItMatters: 'Enable real-time stock visibility across channels',
    dataSources: ['WMS', 'RFID', 'POS'],
    entitiesTables: ['inventory_events'],
    sampleFields: ['sku_id', 'delta_qty', 'timestamp'],
    reactorRole: 'Stream deltas via Kafka, push to fulfillment APIs',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-medium-blue'
  },
  {
    id: '8',
    industry: 'Retail',
    title: 'Campaign Attribution to SKU Sales',
    whyItMatters: 'Tie ad spend to sales outcomes by product',
    dataSources: ['Meta', 'Google', 'eComm'],
    entitiesTables: ['campaign_clicks', 'sessions', 'orders'],
    sampleFields: ['click_id', 'session_id', 'sku_id'],
    reactorRole: 'Link touchpoints to transactions through identity joins',
    gradientClass: 'bg-gradient-to-br from-reactor-red to-reactor-blue'
  },
  {
    id: '9',
    industry: 'Retail',
    title: 'Geo-privacy Enforcement',
    whyItMatters: 'Comply with GDPR/CCPA by routing or masking PII',
    dataSources: ['CRM', 'Orders', 'Support'],
    entitiesTables: ['customer_profiles', 'support_cases'],
    sampleFields: ['region', 'consent_flag', 'pii_fields'],
    reactorRole: 'Apply region-aware transformations or redactions',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-reactor-dark-blue'
  },
  {
    id: '10',
    industry: 'Retail',
    title: 'Product Return Analysis',
    whyItMatters: 'Uncover costly return patterns to improve CX & margins',
    dataSources: ['Returns portal', 'OMS', 'CRM'],
    entitiesTables: ['returns', 'orders', 'support_tickets'],
    sampleFields: ['sku_id', 'return_reason', 'region'],
    reactorRole: 'Correlate returns to operational metadata',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-soundcommerce-yellow'
  },

  // Travel & Hospitality
  {
    id: '11',
    industry: 'Travel & Hospitality',
    title: 'Booking Funnel Analysis',
    whyItMatters: 'Reduce booking drop-off by analyzing funnel step exits',
    dataSources: ['Web events', 'Booking system'],
    entitiesTables: ['booking_events', 'user_sessions'],
    sampleFields: ['step_id', 'timestamp', 'user_id'],
    reactorRole: 'Join step and session logs to build conversion funnel',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-red'
  },
  {
    id: '12',
    industry: 'Travel & Hospitality',
    title: 'Multi-brand Guest Identity Merge',
    whyItMatters: 'Resolve guest identities across brand portfolios for unified CRM insights',
    dataSources: ['Booking', 'Loyalty', 'CDP'],
    entitiesTables: ['guest_profiles', 'loyalty_accounts', 'booking_history'],
    sampleFields: ['guest_id', 'loyalty_id', 'email'],
    reactorRole: 'Stitch identities using deterministic and fuzzy logic',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-medium-blue'
  },
  {
    id: '13',
    industry: 'Travel & Hospitality',
    title: 'Property Performance Dashboard',
    whyItMatters: 'Provide management with key daily KPIs across a sample of properties',
    dataSources: ['PMS', 'housekeeping', 'ops'],
    entitiesTables: ['property_kpis', 'room_status', 'revenue_data'],
    sampleFields: ['property_id', 'RevPAR', 'ADR'],
    reactorRole: 'Aggregate and align daily feeds for exec dashboards',
    gradientClass: 'bg-gradient-to-br from-reactor-red to-reactor-dark-blue'
  },
  {
    id: '14',
    industry: 'Travel & Hospitality',
    title: 'Email Campaign Engagement',
    whyItMatters: 'Evaluate email effectiveness in driving bookings or upgrades',
    dataSources: ['ESP', 'CRM', 'Booking'],
    entitiesTables: ['campaign_stats', 'email_opens', 'bookings'],
    sampleFields: ['campaign_id', 'open_rate', 'conversion'],
    reactorRole: 'Join email metadata with bookings for performance',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-soundcommerce-yellow'
  },
  {
    id: '15',
    industry: 'Travel & Hospitality',
    title: 'VIP Guest Flagging',
    whyItMatters: 'Identify high-value guests based on behavior for personalization pilots',
    dataSources: ['CDP', 'PMS', 'Booking'],
    entitiesTables: ['guest_scores', 'stay_history'],
    sampleFields: ['guest_id', 'stay_count', 'total_spend'],
    reactorRole: 'Tag and segment guests with enriched profile data',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-red'
  },
  {
    id: '16',
    industry: 'Travel & Hospitality',
    title: 'Unified Guest Profile',
    whyItMatters: 'Enable 1:1 personalization by combining touchpoints into a single profile',
    dataSources: ['CDP', 'CRM', 'PMS', 'Loyalty'],
    entitiesTables: ['unified_guest', 'touchpoints', 'preferences'],
    sampleFields: ['guest_id', 'preferences', 'total_spend'],
    reactorRole: 'Merge guest IDs across systems to central profile',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-blue'
  },
  {
    id: '17',
    industry: 'Travel & Hospitality',
    title: 'Property Benchmarking',
    whyItMatters: 'Compare performance KPIs regionally for exec dashboards',
    dataSources: ['PMS', 'Ops'],
    entitiesTables: ['property_metrics', 'benchmark_rules'],
    sampleFields: ['occupancy', 'net_margin', 'score'],
    reactorRole: 'Normalize KPIs and apply region/format segmentation',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-red'
  },
  {
    id: '18',
    industry: 'Travel & Hospitality',
    title: 'Offer Personalization Engine',
    whyItMatters: 'Deliver targeted offers based on guest behavior and preferences',
    dataSources: ['Booking', 'Email', 'Loyalty'],
    entitiesTables: ['guest_segments', 'offers', 'clickthroughs'],
    sampleFields: ['guest_id', 'segment_id', 'conversion'],
    reactorRole: 'Feed CDP or RT-CDP with behavior-enriched segments',
    gradientClass: 'bg-gradient-to-br from-reactor-red to-soundcommerce-yellow'
  },
  {
    id: '19',
    industry: 'Travel & Hospitality',
    title: 'GDPR and Consent Routing',
    whyItMatters: 'Ensure compliance by only processing data users have opted into',
    dataSources: ['Consent platform', 'CRM'],
    entitiesTables: ['consent_flags', 'guest_data'],
    sampleFields: ['guest_id', 'consent_flag'],
    reactorRole: 'Route and mask PII based on consent and region',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-reactor-dark-blue'
  },

  // Consumer Products
  {
    id: '20',
    industry: 'Consumer Products',
    title: 'Appliance Sensor Event Stream',
    whyItMatters: 'Detect performance issues or safety risks by analyzing real-time telemetry',
    dataSources: ['IoT', 'Firmware logs'],
    entitiesTables: ['sensor_readings', 'device_registry'],
    sampleFields: ['device_id', 'temp', 'error_code'],
    reactorRole: 'Ingest telemetry and normalize into structured events',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-soundcommerce-yellow'
  },
  {
    id: '21',
    industry: 'Consumer Products',
    title: 'Product Registration Funnel',
    whyItMatters: 'Analyze drop-off and channel mix in product registrations',
    dataSources: ['CRM', 'Web/App forms'],
    entitiesTables: ['registrations', 'device_metadata'],
    sampleFields: ['product_id', 'registration_channel'],
    reactorRole: 'Unify multiple registration channels',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-red'
  },
  {
    id: '22',
    industry: 'Consumer Products',
    title: 'Field Issue Pattern Detection',
    whyItMatters: 'Predict common defects using warranty and repair data',
    dataSources: ['Warranty', 'Repair', 'Telemetry'],
    entitiesTables: ['repairs', 'warranty_claims'],
    sampleFields: ['device_model', 'issue_code'],
    reactorRole: 'Correlate issues with usage data for QA & CX teams',
    gradientClass: 'bg-gradient-to-br from-reactor-red to-reactor-blue'
  },
  {
    id: '23',
    industry: 'Consumer Products',
    title: 'Geo-Specific Compliance Routing',
    whyItMatters: 'Ensure data handling is compliant by region (e.g., GDPR, RoHS)',
    dataSources: ['CRM', 'Usage logs'],
    entitiesTables: ['user_metadata', 'geo_compliance_flags'],
    sampleFields: ['region', 'data_type'],
    reactorRole: 'Route & mask data based on region',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-dark-blue'
  },

  // Healthcare
  {
    id: '24',
    industry: 'Healthcare',
    title: 'Patient Appointment No-show Prediction',
    whyItMatters: 'Improve scheduling efficiency and reduce revenue loss from missed visits',
    dataSources: ['EHR', 'Scheduling', 'CRM'],
    entitiesTables: ['appointments', 'patients', 'history'],
    sampleFields: ['patient_id', 'appointment_time', 'past_no_shows'],
    reactorRole: 'Aggregate and feature engineer inputs for ML models',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-medium-blue'
  },
  {
    id: '25',
    industry: 'Healthcare',
    title: 'Clinical Trial Eligibility Matcher',
    whyItMatters: 'Speed up patient recruitment by matching records to trial criteria',
    dataSources: ['EHR', 'Trial eligibility DB'],
    entitiesTables: ['patient_conditions', 'medications', 'trial_rules'],
    sampleFields: ['patient_id', 'ICD_code', 'criteria_met'],
    reactorRole: 'Join and filter records based on multi-variable rulesets',
    gradientClass: 'bg-gradient-to-br from-reactor-red to-soundcommerce-yellow'
  },
  {
    id: '26',
    industry: 'Healthcare',
    title: 'Longitudinal Patient Record Consolidation',
    whyItMatters: 'Create a full history for patients across visits, systems, and labs',
    dataSources: ['EHR', 'Labs', 'Imaging systems'],
    entitiesTables: ['encounters', 'lab_results', 'conditions'],
    sampleFields: ['patient_id', 'encounter_id', 'diagnosis'],
    reactorRole: 'Consolidate timeline into a unified patient view for clinical ops',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-medium-blue'
  },
  {
    id: '27',
    industry: 'Healthcare',
    title: 'HIPAA-Compliant Data Sharing Layer',
    whyItMatters: 'Enable downstream use of health data for research or analytics with full auditability',
    dataSources: ['EHR', 'Access logs', 'Masking tools'],
    entitiesTables: ['shared_views', 'access_audit', 'deid_mappings'],
    sampleFields: ['user_id', 'access_time', 'table_accessed'],
    reactorRole: 'Apply masking, logging, and routing for safe data usage',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-red'
  },

  // Elder Care
  {
    id: '28',
    industry: 'Elder Care',
    title: 'Fall Risk Indicator Dashboard',
    whyItMatters: 'Track resident risk using movement patterns and incident logs',
    dataSources: ['IoT sensors', 'Nurse logs', 'EHR-lite'],
    entitiesTables: ['movement_events', 'incidents', 'resident_profiles'],
    sampleFields: ['resident_id', 'gait_speed', 'falls_last_30d'],
    reactorRole: 'Analyze patterns with streaming and batch feeds',
    gradientClass: 'bg-gradient-to-br from-reactor-red to-soundcommerce-yellow'
  },
  {
    id: '29',
    industry: 'Elder Care',
    title: 'Family Care Portal Data Feeds',
    whyItMatters: 'Power family-facing portals with structured updates and alerts',
    dataSources: ['Daily logs', 'Activities', 'Alerts'],
    entitiesTables: ['daily_notes', 'event_feeds', 'medical_alerts'],
    sampleFields: ['resident_id', 'mood_score', 'health_alert'],
    reactorRole: 'Aggregate and expose trusted, limited-access records',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-blue'
  },

  // Automotive
  {
    id: '30',
    industry: 'Automotive',
    title: 'Test Drive Lead Conversion Funnel',
    whyItMatters: 'Assess drop-off between test drives and dealer conversions',
    dataSources: ['Dealer CRM', 'Marketing platform'],
    entitiesTables: ['leads', 'test_drives', 'sales'],
    sampleFields: ['lead_id', 'dealer_id', 'status'],
    reactorRole: 'Build funnel analytics from multiple siloed systems',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-red'
  },
  {
    id: '31',
    industry: 'Automotive',
    title: 'Connected Vehicle Telemetry Analysis',
    whyItMatters: 'Monitor fleet health, usage patterns, and over-the-air issues',
    dataSources: ['Telematics', 'Vehicle ECU', 'Dealer repair logs'],
    entitiesTables: ['telemetry_events', 'vehicle_registry', 'repair_visits'],
    sampleFields: ['vin', 'mileage', 'event_code', 'region'],
    reactorRole: 'Stream, enrich, and route vehicle data for analysis and OTA updates',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-reactor-dark-blue'
  },

  // Media & Entertainment
  {
    id: '32',
    industry: 'Media & Entertainment',
    title: 'Content Engagement Stream',
    whyItMatters: 'Evaluate which shows are getting most views, completions, or skips',
    dataSources: ['Roku', 'FireTV', 'Web App', 'CDN logs'],
    entitiesTables: ['engagement_logs', 'media_assets'],
    sampleFields: ['asset_id', 'duration_watched', 'event_type'],
    reactorRole: 'Ingest JSON logs, normalize into engagement tables for view metrics',
    gradientClass: 'bg-gradient-to-br from-reactor-red to-reactor-dark-blue'
  },
  {
    id: '33',
    industry: 'Media & Entertainment',
    title: 'Ad Impression Analysis',
    whyItMatters: 'Understand reach and CPM across partners and platforms',
    dataSources: ['Ad servers', 'DSPs', 'Partner logs'],
    entitiesTables: ['ad_impressions', 'platform_metrics'],
    sampleFields: ['campaign_id', 'impressions', 'revenue'],
    reactorRole: 'Unify and cleanse campaign metrics for performance tracking',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-medium-blue'
  },
  {
    id: '34',
    industry: 'Media & Entertainment',
    title: 'Subscriber Churn Model',
    whyItMatters: 'Prepare churn signals for initial modeling of at-risk subscribers',
    dataSources: ['Billing', 'Usage', 'Support'],
    entitiesTables: ['account_usage', 'support_interactions', 'billing_status'],
    sampleFields: ['user_id', 'login_count', 'cancel_reason'],
    reactorRole: 'Extract features and timestamp changes to train churn prediction models',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-soundcommerce-yellow'
  },
  {
    id: '35',
    industry: 'Media & Entertainment',
    title: 'Unified Content Analytics Hub',
    whyItMatters: 'Create central view of content engagement by region, platform, and demo',
    dataSources: ['App logs', 'Platform APIs', 'CMS'],
    entitiesTables: ['content_metrics', 'user_engagement', 'device_data'],
    sampleFields: ['asset_id', 'region', 'watch_time'],
    reactorRole: 'Aggregate content metrics for executive and programming teams',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-reactor-red'
  },
  {
    id: '36',
    industry: 'Media & Entertainment',
    title: 'Advanced Recommendation Inputs',
    whyItMatters: 'Provide enriched behavioral data to recommendation engines',
    dataSources: ['Engagement logs', 'Demographics', 'Ratings'],
    entitiesTables: ['viewer_history', 'viewer_profile'],
    sampleFields: ['user_id', 'genres_watched', 'avg_rating'],
    reactorRole: 'Feed ML models with structured usage & profile data',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-soundcommerce-yellow'
  },
  {
    id: '37',
    industry: 'Media & Entertainment',
    title: 'Complex Royalty Calculation',
    whyItMatters: 'Automate content creator payouts based on engagement and contracts',
    dataSources: ['Plays', 'Contracts', 'Revenue splits'],
    entitiesTables: ['royalty_contracts', 'content_views', 'revenue_shares'],
    sampleFields: ['creator_id', 'asset_id', 'revenue_amount'],
    reactorRole: 'Join revenue and view data to power financial contract engines',
    gradientClass: 'bg-gradient-to-br from-reactor-red to-reactor-blue'
  },

  // Retail Financial Services
  {
    id: '38',
    industry: 'Retail Financial Services',
    title: 'Customer Touchpoint Timeline',
    whyItMatters: 'Build a full timeline of a user\'s app, call, and transaction activity',
    dataSources: ['Call center logs', 'App usage', 'CRM'],
    entitiesTables: ['interactions', 'app_sessions', 'transactions'],
    sampleFields: ['customer_id', 'timestamp', 'channel'],
    reactorRole: 'Unify event streams into chronological customer journeys',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-blue'
  },
  {
    id: '39',
    industry: 'Retail Financial Services',
    title: 'Product Upsell Funnel',
    whyItMatters: 'Track conversion from cross-sell campaigns to application started',
    dataSources: ['Campaign system', 'CRM', 'Application portal'],
    entitiesTables: ['upsell_offers', 'applications', 'campaigns'],
    sampleFields: ['offer_id', 'user_id', 'funnel_step'],
    reactorRole: 'Attribute each campaign to customer engagement steps',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-red'
  },
  {
    id: '40',
    industry: 'Retail Financial Services',
    title: '360° Financial Profile',
    whyItMatters: 'Unify customer data across loans, cards, and investments for service reps',
    dataSources: ['Loan systems', 'Banking core', 'CRM'],
    entitiesTables: ['customer_financials', 'products', 'balances'],
    sampleFields: ['customer_id', 'account_type', 'balance'],
    reactorRole: 'Normalize across systems and provide unified view to support tools',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-medium-blue'
  },
  {
    id: '41',
    industry: 'Retail Financial Services',
    title: 'Transaction Behavior Analytics',
    whyItMatters: 'Detect anomalies and behavioral shifts to flag potential fraud',
    dataSources: ['Banking logs', 'Payment processors'],
    entitiesTables: ['transactions', 'risk_signals'],
    sampleFields: ['transaction_id', 'pattern_score', 'category'],
    reactorRole: 'Run transformations to flag thresholds, support ML models',
    gradientClass: 'bg-gradient-to-br from-reactor-red to-reactor-dark-blue'
  },
  {
    id: '42',
    industry: 'Retail Financial Services',
    title: 'GDPR/CCPA Audit Layer',
    whyItMatters: 'Prove compliant handling of personal data for regulators',
    dataSources: ['Consent manager', 'CRM', 'ETL metadata'],
    entitiesTables: ['data_access_logs', 'deletion_requests'],
    sampleFields: ['user_id', 'table_accessed', 'timestamp'],
    reactorRole: 'Log every data touch and enable audit trails for compliance teams',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-soundcommerce-yellow'
  }
];

export const industries = [
  'Retail',
  'Travel & Hospitality', 
  'Consumer Products',
  'Media & Entertainment',
  'Retail Financial Services',
  'Healthcare',
  'Elder Care',
  'Automotive'
];

export const roles = [
  'Data Engineer',
  'Data Scientist', 
  'Data Analyst',
  'ML/Ops Engineer',
  'Data Governance / Security'
];
