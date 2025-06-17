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
    title: 'Content Recommendation',
    whyItMatters: 'Increase user engagement by recommending relevant content',
    dataSources: ['Viewing history', 'user profiles', 'content metadata'],
    entitiesTables: ['users', 'content', 'recommendations'],
    sampleFields: ['user_id', 'content_id', 'recommendation_score'],
    reactorRole: 'Recommend relevant content to users',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-soundcommerce-yellow'
  },
  {
    id: 'media-2',
    industry: 'Media & Entertainment',
    title: 'Audience Segmentation',
    whyItMatters: 'Improve advertising ROI by targeting specific audience segments',
    dataSources: ['Demographics', 'viewing habits', 'engagement metrics'],
    entitiesTables: ['users', 'segments', 'advertising_performance'],
    sampleFields: ['user_id', 'segment_id', 'ad_response_rate'],
    reactorRole: 'Segment audiences and improve advertising ROI',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-dark-blue'
  },
  {
    id: 'media-3',
    industry: 'Media & Entertainment',
    title: 'Content Performance Analysis',
    whyItMatters: 'Optimize content strategy by analyzing performance metrics',
    dataSources: ['Viewing data', 'engagement metrics', 'feedback data'],
    entitiesTables: ['content', 'performance_metrics', 'user_feedback'],
    sampleFields: ['content_id', 'view_count', 'engagement_score'],
    reactorRole: 'Analyze content performance and optimize content strategy',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-blue'
  },
  {
    id: 'media-4',
    industry: 'Media & Entertainment',
    title: 'Real-time Streaming Analytics',
    whyItMatters: 'Optimize streaming quality and detect issues in real-time',
    dataSources: ['Streaming logs', 'network data', 'device metrics'],
    entitiesTables: ['streams', 'quality_metrics', 'performance_alerts'],
    sampleFields: ['stream_id', 'quality_score', 'buffering_events'],
    reactorRole: 'Monitor streaming performance and optimize delivery',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-medium-blue'
  },
  {
    id: 'media-5',
    industry: 'Media & Entertainment',
    title: 'Social Media Trend Analysis',
    whyItMatters: 'Create trending content by analyzing social media patterns',
    dataSources: ['Social platforms', 'hashtag data', 'viral content'],
    entitiesTables: ['trends', 'social_metrics', 'content_virality'],
    sampleFields: ['trend_id', 'engagement_rate', 'virality_score'],
    reactorRole: 'Identify trending topics and predict content success',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-soundcommerce-yellow'
  },

  // Retail Financial Services Use Cases
  {
    id: 'finance-1',
    industry: 'Retail Financial Services',
    title: 'Fraud Detection',
    whyItMatters: 'Reduce financial losses by detecting fraudulent transactions',
    dataSources: ['Transaction data', 'customer profiles', 'device information'],
    entitiesTables: ['transactions', 'customers', 'fraud_alerts'],
    sampleFields: ['transaction_id', 'customer_id', 'fraud_score'],
    reactorRole: 'Detect fraudulent transactions and reduce financial losses',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-medium-blue'
  },
  {
    id: 'finance-2',
    industry: 'Retail Financial Services',
    title: 'Credit Risk Assessment',
    whyItMatters: 'Improve lending decisions by assessing credit risk accurately',
    dataSources: ['Credit history', 'income data', 'employment history'],
    entitiesTables: ['customers', 'credit_scores', 'loan_applications'],
    sampleFields: ['customer_id', 'credit_score', 'loan_approval_probability'],
    reactorRole: 'Assess credit risk and improve lending decisions',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-soundcommerce-yellow'
  },
  {
    id: 'finance-3',
    industry: 'Retail Financial Services',
    title: 'Customer Churn Prediction',
    whyItMatters: 'Reduce customer attrition by predicting churn',
    dataSources: ['Transaction history', 'customer interactions', 'demographics'],
    entitiesTables: ['customers', 'churn_predictions', 'retention_offers'],
    sampleFields: ['customer_id', 'churn_probability', 'retention_offer_id'],
    reactorRole: 'Predict customer churn and reduce customer attrition',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-dark-blue'
  },
  {
    id: 'finance-4',
    industry: 'Retail Financial Services',
    title: 'Algorithmic Trading',
    whyItMatters: 'Optimize investment returns through data-driven trading strategies',
    dataSources: ['Market data', 'economic indicators', 'news feeds'],
    entitiesTables: ['trades', 'market_signals', 'portfolio_performance'],
    sampleFields: ['trade_id', 'signal_strength', 'expected_return'],
    reactorRole: 'Execute algorithmic trading strategies based on market signals',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-blue'
  },
  {
    id: 'finance-5',
    industry: 'Retail Financial Services',
    title: 'Regulatory Compliance Monitoring',
    whyItMatters: 'Ensure compliance with financial regulations and avoid penalties',
    dataSources: ['Transaction logs', 'regulatory rules', 'audit trails'],
    entitiesTables: ['compliance_checks', 'violations', 'audit_reports'],
    sampleFields: ['check_id', 'violation_type', 'severity_level'],
    reactorRole: 'Monitor transactions for regulatory compliance violations',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-soundcommerce-yellow'
  },

  // Elder Care Use Cases
  {
    id: 'eldercare-1',
    industry: 'Elder Care',
    title: 'Remote Patient Monitoring',
    whyItMatters: 'Improve patient safety and reduce hospital readmissions',
    dataSources: ['Wearable sensors', 'home monitoring devices', 'patient records'],
    entitiesTables: ['patients', 'sensor_data', 'alerts'],
    sampleFields: ['patient_id', 'sensor_type', 'sensor_value'],
    reactorRole: 'Monitor patients remotely and improve patient safety',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-dark-blue'
  },
  {
    id: 'eldercare-2',
    industry: 'Elder Care',
    title: 'Fall Detection',
    whyItMatters: 'Reduce fall-related injuries by detecting falls early',
    dataSources: ['Wearable sensors', 'video cameras', 'patient history'],
    entitiesTables: ['patients', 'fall_events', 'alerts'],
    sampleFields: ['patient_id', 'fall_timestamp', 'location'],
    reactorRole: 'Detect falls early and reduce fall-related injuries',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-blue'
  },
  {
    id: 'eldercare-3',
    industry: 'Elder Care',
    title: 'Medication Adherence',
    whyItMatters: 'Improve medication adherence and reduce adverse drug events',
    dataSources: ['Smart pill dispensers', 'patient records', 'pharmacy data'],
    entitiesTables: ['patients', 'medications', 'adherence_records'],
    sampleFields: ['patient_id', 'medication_id', 'adherence_rate'],
    reactorRole: 'Improve medication adherence and reduce adverse drug events',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-medium-blue'
  },
  {
    id: 'eldercare-4',
    industry: 'Elder Care',
    title: 'Cognitive Health Monitoring',
    whyItMatters: 'Early detection of cognitive decline to improve quality of life',
    dataSources: ['Cognitive assessments', 'daily activity logs', 'speech patterns'],
    entitiesTables: ['patients', 'cognitive_scores', 'decline_indicators'],
    sampleFields: ['patient_id', 'cognitive_score', 'decline_rate'],
    reactorRole: 'Monitor cognitive health and detect early signs of decline',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-soundcommerce-yellow'
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
    title: 'Autonomous Driving',
    whyItMatters: 'Improve safety and efficiency by enabling autonomous driving',
    dataSources: ['Sensor data', 'mapping data', 'traffic data'],
    entitiesTables: ['vehicles', 'sensors', 'driving_events'],
    sampleFields: ['vehicle_id', 'sensor_type', 'sensor_value'],
    reactorRole: 'Enable autonomous driving and improve safety',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-dark-blue'
  },
  {
    id: 'automotive-3',
    industry: 'Automotive',
    title: 'Personalized Driving Experience',
    whyItMatters: 'Improve customer satisfaction by personalizing the driving experience',
    dataSources: ['Driver preferences', 'vehicle data', 'location data'],
    entitiesTables: ['vehicles', 'drivers', 'driving_preferences'],
    sampleFields: ['vehicle_id', 'driver_id', 'preference_type'],
    reactorRole: 'Personalize the driving experience and improve customer satisfaction',
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
    title: 'Connected Car Services',
    whyItMatters: 'Enhance vehicle connectivity and provide value-added services',
    dataSources: ['Telematics data', 'mobile apps', 'service history'],
    entitiesTables: ['connected_vehicles', 'services', 'usage_patterns'],
    sampleFields: ['vehicle_id', 'service_type', 'usage_frequency'],
    reactorRole: 'Enable connected services and improve user experience',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-soundcommerce-yellow'
  },
  
  // High Tech/B2B Use Cases
  {
    id: 'hightech-1',
    industry: 'High Tech/B2B',
    title: 'Multi-Tenant SaaS Analytics',
    whyItMatters: 'Provide isolated analytics per customer while maintaining operational efficiency',
    dataSources: ['App usage logs', 'billing systems', 'support tickets'],
    entitiesTables: ['tenant_metrics', 'usage_stats', 'feature_adoption'],
    sampleFields: ['tenant_id', 'feature_used', 'session_duration'],
    reactorRole: 'Segment and process data per tenant with privacy boundaries',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-medium-blue'
  },
  {
    id: 'hightech-2',
    industry: 'High Tech/B2B',
    title: 'API Usage Monitoring & Billing',
    whyItMatters: 'Track API consumption for accurate billing and capacity planning',
    dataSources: ['API gateway logs', 'billing systems'],
    entitiesTables: ['api_calls', 'usage_tiers', 'billing_cycles'],
    sampleFields: ['endpoint', 'calls_count', 'response_time'],
    reactorRole: 'Aggregate API metrics and feed billing systems with usage data',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-soundcommerce-yellow'
  },
  {
    id: 'hightech-3',
    industry: 'High Tech/B2B',
    title: 'Product Usage Intelligence',
    whyItMatters: 'Understand feature adoption to guide product development and customer success',
    dataSources: ['Product telemetry', 'user sessions', 'support data'],
    entitiesTables: ['feature_usage', 'user_journeys', 'adoption_metrics'],
    sampleFields: ['user_id', 'feature_name', 'usage_frequency'],
    reactorRole: 'Process telemetry data to create actionable product insights',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-blue'
  },
  {
    id: 'hightech-4',
    industry: 'High Tech/B2B',
    title: 'Customer Health Scoring',
    whyItMatters: 'Predict churn and identify expansion opportunities through data-driven health scores',
    dataSources: ['Usage data', 'support tickets', 'billing history'],
    entitiesTables: ['health_scores', 'engagement_metrics', 'risk_indicators'],
    sampleFields: ['account_id', 'health_score', 'churn_risk'],
    reactorRole: 'Combine multiple signals to calculate and update customer health metrics',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-medium-blue'
  }
];
