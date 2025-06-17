import { UseCase } from './types';

export const industryUseCases: UseCase[] = [
  // Retail Use Cases
  {
    id: 'retail-1',
    industry: 'Retail',
    title: 'SKU Performance Snapshot',
    whyItMatters: 'Identify top/bottom sellers by store to improve merchandising decisions',
    dataSources: ['POS', 'eComm', 'WMS'],
    entitiesTables: ['sales_transactions', 'product_catalog', 'store_locations'],
    sampleFields: ['sku_id', 'revenue', 'quantity', 'store_id', 'timestamp'],
    reactorRole: 'Ingest and standardize SKU & sales data across systems; unify for SKU-level insights',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-soundcommerce-yellow'
  },
  {
    id: 'retail-2',
    industry: 'Retail',
    title: 'In-store vs Online Sales Comparison',
    whyItMatters: 'Evaluate contribution and margin by sales channel',
    dataSources: ['POS', 'eComm'],
    entitiesTables: ['sales_transactions'],
    sampleFields: ['channel', 'sku_id', 'revenue'],
    reactorRole: 'Join POS and online transactions with channel metadata',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-medium-blue'
  },
  {
    id: 'retail-3',
    industry: 'Retail',
    title: 'Inventory Sync Check',
    whyItMatters: 'Detect inventory mismatches to avoid fulfillment errors',
    dataSources: ['ERP', 'WMS'],
    entitiesTables: ['inventory_snapshots', 'stock_transfers'],
    sampleFields: ['sku_id', 'location_id', 'quantity_on_hand'],
    reactorRole: 'Detect deltas between systems for alerts/QA',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-reactor-dark-blue'
  },
  {
    id: 'retail-4',
    industry: 'Retail',
    title: 'Google Sheets as Control Source',
    whyItMatters: 'Allow non-tech users to override pricing/inventory logic',
    dataSources: ['Google Sheets'],
    entitiesTables: ['manager_overrides'],
    sampleFields: ['sku_id', 'override_price', 'notes'],
    reactorRole: 'Merge override sheet with pricing engine pipeline',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-soundcommerce-yellow'
  },
  {
    id: 'retail-5',
    industry: 'Retail',
    title: 'Loyalty Enrollment Funnel',
    whyItMatters: 'Understand drop-off in loyalty signups across platforms',
    dataSources: ['CRM', 'Website', 'ESP'],
    entitiesTables: ['signups', 'campaigns', 'customer_profiles'],
    sampleFields: ['customer_id', 'source', 'timestamp'],
    reactorRole: 'Join signup, campaign, and profile to track funnel stages',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-blue'
  },
  {
    id: 'retail-6',
    industry: 'Retail',
    title: 'Unified SKU Catalog for ML Models',
    whyItMatters: 'Power recommendations & dynamic pricing with clean product data',
    dataSources: ['PIM', 'ERP', 'eComm'],
    entitiesTables: ['product_catalog'],
    sampleFields: ['sku_id', 'attributes', 'availability'],
    reactorRole: 'Cleanse, unify, and validate catalog data for ML readiness',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-medium-blue'
  },
  {
    id: 'retail-7',
    industry: 'Retail',
    title: 'Near Real-Time Inventory Feeds',
    whyItMatters: 'Enable real-time stock visibility across channels',
    dataSources: ['WMS', 'RFID', 'POS'],
    entitiesTables: ['inventory_events'],
    sampleFields: ['sku_id', 'delta_qty', 'timestamp'],
    reactorRole: 'Stream deltas via Kafka, push to fulfillment APIs',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-soundcommerce-yellow'
  },
  {
    id: 'retail-8',
    industry: 'Retail',
    title: 'Campaign Attribution to SKU Sales',
    whyItMatters: 'Tie ad spend to sales outcomes by product',
    dataSources: ['Meta', 'Google', 'eComm'],
    entitiesTables: ['campaign_clicks', 'sessions', 'orders'],
    sampleFields: ['click_id', 'session_id', 'sku_id'],
    reactorRole: 'Link touchpoints to transactions through identity joins',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-dark-blue'
  },
  {
    id: 'retail-9',
    industry: 'Retail',
    title: 'Product Return Analysis',
    whyItMatters: 'Uncover costly return patterns to improve CX & margins',
    dataSources: ['Returns portal', 'OMS', 'CRM'],
    entitiesTables: ['returns', 'orders', 'support_tickets'],
    sampleFields: ['sku_id', 'return_reason', 'region'],
    reactorRole: 'Correlate returns to operational metadata',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-medium-blue'
  },

  // Travel & Hospitality Use Cases
  {
    id: 'travel-1',
    industry: 'Travel & Hospitality',
    title: 'Booking Funnel Analysis',
    whyItMatters: 'Reduce booking drop-off by analyzing funnel step exits',
    dataSources: ['Web events', 'Booking system'],
    entitiesTables: ['booking_events', 'user_sessions'],
    sampleFields: ['step_id', 'timestamp', 'user_id'],
    reactorRole: 'Join step and session logs to build a conversion funnel',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-blue'
  },
  {
    id: 'travel-2',
    industry: 'Travel & Hospitality',
    title: 'Property Performance Data',
    whyItMatters: 'Provide management with key daily KPIs across a sample of properties',
    dataSources: ['PMS', 'housekeeping', 'ops'],
    entitiesTables: ['property_kpis', 'room_status', 'revenue_data'],
    sampleFields: ['property_id', 'RevPAR', 'ADR'],
    reactorRole: 'Aggregate and align daily feeds for exec dashboards, reports, and insight data',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-medium-blue'
  },
  {
    id: 'travel-3',
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
    id: 'travel-4',
    industry: 'Travel & Hospitality',
    title: 'VIP Guest Flagging',
    whyItMatters: 'Identify high-value guests based on behavior for personalization pilots',
    dataSources: ['CDP', 'PMS', 'Booking'],
    entitiesTables: ['guest_scores', 'stay_history'],
    sampleFields: ['guest_id', 'stay_count', 'total_spend'],
    reactorRole: 'Tag and segment guests with enriched profile data',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-dark-blue'
  },
  {
    id: 'travel-5',
    industry: 'Travel & Hospitality',
    title: 'Property Benchmarking',
    whyItMatters: 'Compare performance KPIs regionally for exec dashboards',
    dataSources: ['PMS', 'Ops'],
    entitiesTables: ['property_metrics', 'benchmark_rules'],
    sampleFields: ['occupancy', 'net_margin', 'score'],
    reactorRole: 'Normalize KPIs and apply region/format segmentation',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-medium-blue'
  },
  {
    id: 'travel-6',
    industry: 'Travel & Hospitality',
    title: 'Offer Personalization Engine',
    whyItMatters: 'Deliver targeted offers based on guest behavior and preferences',
    dataSources: ['Booking', 'Email', 'Loyalty'],
    entitiesTables: ['guest_segments', 'offers', 'clickthroughs'],
    sampleFields: ['guest_id', 'segment_id', 'conversion'],
    reactorRole: 'Feed CDP or RT-CDP with behavior-enriched segments',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-soundcommerce-yellow'
  },
  {
    id: 'travel-7',
    industry: 'Travel & Hospitality',
    title: 'GDPR and Consent Routing',
    whyItMatters: 'Ensure compliance by only processing data users have opted into',
    dataSources: ['Consent platform', 'CRM'],
    entitiesTables: ['consent_flags', 'guest_data'],
    sampleFields: ['guest_id', 'consent_flag'],
    reactorRole: 'Route and mask PII based on consent and region',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-reactor-dark-blue'
  },

  // Consumer Products Use Cases
  {
    id: 'consumer-1',
    industry: 'Consumer Products',
    title: 'Demand Forecasting',
    whyItMatters: 'Optimize production and distribution by accurately predicting demand',
    dataSources: ['Sales data', 'market trends', 'promotional activities'],
    entitiesTables: ['products', 'sales', 'demand_forecasts'],
    sampleFields: ['product_id', 'location_id', 'predicted_demand'],
    reactorRole: 'Forecast demand and optimize production and distribution',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-dark-blue'
  },
  {
    id: 'consumer-2',
    industry: 'Consumer Products',
    title: 'Brand Sentiment Analysis',
    whyItMatters: 'Improve brand perception by understanding customer sentiment',
    dataSources: ['Social media', 'customer reviews', 'survey responses'],
    entitiesTables: ['brand_sentiment', 'customer_feedback', 'market_trends'],
    sampleFields: ['product_id', 'sentiment_score', 'feedback_text'],
    reactorRole: 'Analyze customer feedback and improve brand perception',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-blue'
  },
  {
    id: 'consumer-3',
    industry: 'Consumer Products',
    title: 'Supply Chain Optimization',
    whyItMatters: 'Reduce costs and improve efficiency by optimizing the supply chain',
    dataSources: ['Supplier data', 'logistics data', 'inventory levels'],
    entitiesTables: ['suppliers', 'shipments', 'inventory'],
    sampleFields: ['supplier_id', 'shipment_id', 'inventory_level'],
    reactorRole: 'Optimize the supply chain and reduce costs',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-medium-blue'
  },
  {
    id: 'consumer-4',
    industry: 'Consumer Products',
    title: 'Geo-specific Compliance Routing',
    whyItMatters: 'Ensure data residency requirements are met for global customers',
    dataSources: ['Customer geo data', 'compliance rules'],
    entitiesTables: ['data_residency', 'compliance_rules', 'routing_policies'],
    sampleFields: ['region', 'data_classification', 'storage_location'],
    reactorRole: 'Route data based on region',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-dark-blue'
  },
  {
    id: 'consumer-5',
    industry: 'Consumer Products',
    title: 'Product Lifecycle Management',
    whyItMatters: 'Optimize product development cycles and market timing',
    dataSources: ['R&D data', 'market research', 'competitor analysis'],
    entitiesTables: ['products', 'development_stages', 'market_readiness'],
    sampleFields: ['product_id', 'stage', 'readiness_score'],
    reactorRole: 'Track product development and optimize launch timing',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-soundcommerce-yellow'
  },
  {
    id: 'consumer-6',
    industry: 'Consumer Products',
    title: 'Customer Lifetime Value Prediction',
    whyItMatters: 'Focus marketing spend on high-value customers',
    dataSources: ['Purchase history', 'engagement data', 'demographic info'],
    entitiesTables: ['customers', 'transactions', 'ltv_predictions'],
    sampleFields: ['customer_id', 'predicted_ltv', 'confidence_score'],
    reactorRole: 'Calculate and predict customer lifetime value',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-blue'
  },

  // Media & Entertainment Use Cases
  {
    id: 'media-1',
    industry: 'Media & Entertainment',
    title: 'Content Engagement Stream',
    whyItMatters: 'Evaluate which shows are getting most views, completions, or skips',
    dataSources: ['Roku', 'FireTV', 'Web App', 'CDN logs'],
    entitiesTables: ['engagement_logs', 'media_assets'],
    sampleFields: ['asset_id', 'duration_watched', 'event_type'],
    reactorRole: 'Ingest JSON logs, normalize into engagement tables for view metrics',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-soundcommerce-yellow'
  },
  {
    id: 'media-2',
    industry: 'Media & Entertainment',
    title: 'Ad Impression Analysis',
    whyItMatters: 'Understand reach and CPM across partners and platforms',
    dataSources: ['Ad servers', 'DSPs', 'Partner logs'],
    entitiesTables: ['ad_impressions', 'platform_metrics'],
    sampleFields: ['campaign_id', 'impressions', 'revenue'],
    reactorRole: 'Unify and cleanse campaign metrics for performance tracking',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-dark-blue'
  },
  {
    id: 'media-3',
    industry: 'Media & Entertainment',
    title: 'Subscriber Churn Model',
    whyItMatters: 'Prepare churn signals for initial modeling of at-risk subscribers',
    dataSources: ['Billing', 'Usage', 'Support'],
    entitiesTables: ['account_usage', 'support_interactions', 'billing_status'],
    sampleFields: ['user_id', 'login_count', 'cancel_reason'],
    reactorRole: 'Extract features and timestamp changes to train churn prediction models',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-blue'
  },
  {
    id: 'media-4',
    industry: 'Media & Entertainment',
    title: 'Unified Content Analytics Hub',
    whyItMatters: 'Create central view of content engagement by region, platform, and demo',
    dataSources: ['App logs', 'Platform APIs', 'CMS'],
    entitiesTables: ['content_metrics', 'user_engagement', 'device_data'],
    sampleFields: ['asset_id', 'region', 'watch_time'],
    reactorRole: 'Aggregate content metrics for executive and programming teams',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-medium-blue'
  },
  {
    id: 'media-5',
    industry: 'Media & Entertainment',
    title: 'Advanced Recommendation Inputs',
    whyItMatters: 'Provide enriched behavioral data to recommendation engines',
    dataSources: ['Engagement logs', 'Demographics', 'Ratings'],
    entitiesTables: ['viewer_history', 'viewer_profile'],
    sampleFields: ['user_id', 'genres_watched', 'avg_rating'],
    reactorRole: 'Feed ML models with structured usage & profile data',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-soundcommerce-yellow'
  },
  {
    id: 'media-6',
    industry: 'Media & Entertainment',
    title: 'Complex Royalty Calculation',
    whyItMatters: 'Automate content creator payouts based on engagement and contracts',
    dataSources: ['Plays', 'Contracts', 'Revenue splits'],
    entitiesTables: ['royalty_contracts', 'content_views', 'revenue_shares'],
    sampleFields: ['creator_id', 'asset_id', 'revenue_amount'],
    reactorRole: 'Join revenue and view data to power financial contract engines',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-blue'
  },

  // Financial Services Use Cases
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
  },

  // Elder Care Use Cases
  {
    id: 'eldercare-1',
    industry: 'Elder Care',
    title: 'Fall Risk Indicator Feeds',
    whyItMatters: 'Track resident risk using movement patterns and incident logs',
    dataSources: ['IoT sensors', 'Nurse logs', 'EHR-lite'],
    entitiesTables: ['movement_events', 'incidents', 'resident_profiles'],
    sampleFields: ['resident_id', 'gait_speed', 'falls_last_30d'],
    reactorRole: 'Analyze patterns with streaming and batch feeds',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-dark-blue'
  },
  {
    id: 'eldercare-2',
    industry: 'Elder Care',
    title: 'Family Care Portal Data Feeds',
    whyItMatters: 'Power family-facing portals with structured updates and alerts',
    dataSources: ['Daily logs', 'Activities', 'Alerts'],
    entitiesTables: ['daily_notes', 'event_feeds', 'medical_alerts'],
    sampleFields: ['resident_id', 'mood_score', 'health_alert'],
    reactorRole: 'Aggregate and expose trusted, limited-access records',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-blue'
  },

  // Automotive Use Cases
  {
    id: 'automotive-1',
    industry: 'Automotive',
    title: 'Predictive Maintenance',
    whyItMatters: 'Reduce downtime and maintenance costs by predicting failures',
    dataSources: ['Vehicle sensor data', 'maintenance records', 'weather data'],
    entitiesTables: ['vehicles', 'sensors', 'maintenance_events'],
    sampleFields: ['vehicle_id', 'sensor_type', 'sensor_value'],
    reactorRole: 'Predict failures and reduce downtime',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-soundcommerce-yellow'
  },
  {
    id: 'automotive-2',
    industry: 'Automotive',
    title: 'Test Drive Lead Conversion Funnel',
    whyItMatters: 'Assess drop-off between test drives and dealer conversions',
    dataSources: ['Dealer CRM', 'Marketing platform'],
    entitiesTables: ['leads', 'test_drives', 'sales'],
    sampleFields: ['lead_id', 'dealer_id', 'status'],
    reactorRole: 'Build funnel analytics from multiple siloed systems',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-blue'
  },
  {
    id: 'automotive-4',
    industry: 'Automotive',
    title: 'Fleet Management Optimization',
    whyItMatters: 'Optimize fleet operations and reduce operational costs',
    dataSources: ['GPS tracking', 'fuel consumption', 'driver behavior'],
    entitiesTables: ['fleet_vehicles', 'routes', 'efficiency_metrics'],
    sampleFields: ['vehicle_id', 'route_efficiency', 'fuel_usage'],
    reactorRole: 'Optimize fleet routes and monitor vehicle performance',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-medium-blue'
  },
  {
    id: 'automotive-5',
    industry: 'Automotive',
    title: 'Connected Vehicle Telemetry Analysis',
    whyItMatters: 'Monitor fleet health, usage patterns, and over-the-air issues',
    dataSources: ['Telematics', 'Vehicle ECU', 'Dealer repair logs'],
    entitiesTables: ['telemetry_events', 'vehicle_registry', 'repair_visits'],
    sampleFields: ['vin', 'mileage', 'event_code', 'region'],
    reactorRole: 'Stream, enrich, and route vehicle data for analysis and OTA updates',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-dark-blue'
  },
  
  // High Tech/B2B Use Cases
  {
    id: 'hightech-1',
    industry: 'B2B / High Tech',
    title: 'Product Telemetry Ingestion',
    whyItMatters: 'Collect and normalize telemetry from SaaS or hardware usage to detect patterns or issues',
    dataSources: ['SaaS product logs', 'IoT device streams', 'mobile SDKs'],
    entitiesTables: ['telemetry_events', 'device_sessions', 'usage_logs'],
    sampleFields: ['session_id', 'device_id', 'event_type', 'timestamp'],
    reactorRole: 'Normalize telemetry events into structured formats for product and support analytics',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-medium-blue'
  },
  {
    id: 'hightech-2',
    industry: 'B2B / High Tech',
    title: 'Customer Success Signal Detection',
    whyItMatters: 'Detect churn or expansion signals based on feature usage and support tickets',
    dataSources: ['Product analytics', 'CRM', 'support systems'],
    entitiesTables: ['usage_metrics', 'support_cases', 'customer_profiles'],
    sampleFields: ['account_id', 'last_login', 'ticket_volume'],
    reactorRole: 'Unify product, support, and CRM data to build health score triggers',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-soundcommerce-yellow'
  },
  {
    id: 'hightech-3',
    industry: 'B2B / High Tech',
    title: 'Trial-to-Paid Conversion Funnel',
    whyItMatters: 'Improve free trial conversion by analyzing product usage patterns',
    dataSources: ['Product logs', 'CRM', 'billing system'],
    entitiesTables: ['trial_accounts', 'product_events', 'conversion_log'],
    sampleFields: ['account_id', 'trial_start', 'active_features'],
    reactorRole: 'Collect engagement data during trials and unify it with paid conversion rates',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-blue'
  },
  {
    id: 'hightech-4',
    industry: 'B2B / High Tech',
    title: 'Support Ticket Auto-Triage Insights',
    whyItMatters: 'Identify root causes and common escalations early',
    dataSources: ['Zendesk', 'Jira', 'Salesforce'],
    entitiesTables: ['support_cases', 'case_tags', 'time_to_resolution'],
    sampleFields: ['ticket_id', 'priority', 'tags'],
    reactorRole: 'Collect support ticket patterns to improve analysis for resolution playbooks and routing',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-medium-blue'
  },
  {
    id: 'hightech-5',
    industry: 'B2B / High Tech',
    title: 'Customer Environment Sync',
    whyItMatters: 'Map customer environments and deployment profiles for configuration intelligence and upgrades',
    dataSources: ['Cloud config', 'deployment agents', 'CRM'],
    entitiesTables: ['environment_profiles', 'instance_metadata', 'license_keys'],
    sampleFields: ['org_id', 'region', 'cloud_type', 'version'],
    reactorRole: 'Collect the data that supports creating materialized environment summaries for CS, TAMs, for upgrade planning',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-soundcommerce-yellow'
  },
  {
    id: 'hightech-6',
    industry: 'B2B / High Tech',
    title: 'Enterprise Contract & Usage Alignment',
    whyItMatters: 'Validate contracted license usage versus actual product consumption',
    dataSources: ['Billing systems', 'product usage logs', 'Salesforce'],
    entitiesTables: ['license_allocations', 'user_activity', 'billing_records'],
    sampleFields: ['contract_id', 'seats_allocated', 'seats_used'],
    reactorRole: 'Collect and join license entitlements to product logs to find under- or over-utilization',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-dark-blue'
  },
  {
    id: 'hightech-7',
    industry: 'B2B / High Tech',
    title: 'Multi-Tenant Health Dashboard',
    whyItMatters: 'Provide real-time insights into service uptime and tenant-specific SLAs',
    dataSources: ['Monitoring tools', 'OpsDB', 'Cloud logs'],
    entitiesTables: ['uptime_logs', 'tenant_configs', 'sla_events'],
    sampleFields: ['tenant_id', 'uptime_pct', 'alert_count'],
    reactorRole: 'Collect and pipeline the data to help aggregate per-tenant service metrics for customer-facing status pages and internal ops views',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-blue'
  },
  {
    id: 'hightech-8',
    industry: 'B2B / High Tech',
    title: 'Partner Channel Performance Tracker',
    whyItMatters: 'Track partner-driven sales, adoption, and expansion across B2B channels',
    dataSources: ['Salesforce', 'partner CRM', 'product telemetry'],
    entitiesTables: ['partner_accounts', 'referrals', 'feature_usage'],
    sampleFields: ['partner_id', 'revenue', 'adoption_curve'],
    reactorRole: 'Collect and combine CRM and telemetry data to help measure partner impact and incentive eligibility',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-reactor-dark-blue'
  }
];
