import { UseCase } from './types';

export const industryUseCases: UseCase[] = [
  // Retail Use Cases
  {
    id: 'retail-1',
    industry: 'Retail',
    title: 'Personalized Product Recommendations',
    whyItMatters: 'Increase sales and customer loyalty by providing tailored product suggestions',
    dataSources: ['Web browsing history', 'purchase history', 'customer profiles'],
    entitiesTables: ['products', 'customers', 'recommendations'],
    sampleFields: ['product_id', 'customer_id', 'recommendation_score'],
    reactorRole: 'Analyze customer behavior and generate personalized recommendations',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-soundcommerce-yellow'
  },
  {
    id: 'retail-2',
    industry: 'Retail',
    title: 'Inventory Optimization',
    whyItMatters: 'Reduce stockouts and overstocking by predicting demand accurately',
    dataSources: ['Sales data', 'weather forecasts', 'promotional calendars'],
    entitiesTables: ['products', 'inventory', 'sales_forecasts'],
    sampleFields: ['product_id', 'location_id', 'predicted_demand'],
    reactorRole: 'Forecast demand and optimize inventory levels across locations',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-medium-blue'
  },
  {
    id: 'retail-3',
    industry: 'Retail',
    title: 'Customer Segmentation',
    whyItMatters: 'Improve marketing ROI by targeting specific customer groups with relevant campaigns',
    dataSources: ['Purchase history', 'demographics', 'survey responses'],
    entitiesTables: ['customers', 'segments', 'campaign_performance'],
    sampleFields: ['customer_id', 'segment_id', 'campaign_response_rate'],
    reactorRole: 'Segment customers based on behavior and demographics',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-reactor-dark-blue'
  },

  // Travel & Hospitality Use Cases
  {
    id: 'travel-1',
    industry: 'Travel & Hospitality',
    title: 'Dynamic Pricing',
    whyItMatters: 'Maximize revenue by adjusting prices based on demand and competitor pricing',
    dataSources: ['Booking data', 'competitor prices', 'event schedules'],
    entitiesTables: ['rooms', 'flights', 'pricing_rules'],
    sampleFields: ['room_id', 'flight_number', 'price'],
    reactorRole: 'Analyze market conditions and adjust prices in real-time',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-blue'
  },
  {
    id: 'travel-2',
    industry: 'Travel & Hospitality',
    title: 'Personalized Travel Packages',
    whyItMatters: 'Increase booking rates by offering customized travel packages to customers',
    dataSources: ['Customer preferences', 'travel history', 'destination data'],
    entitiesTables: ['customers', 'packages', 'recommendations'],
    sampleFields: ['customer_id', 'package_id', 'recommendation_score'],
    reactorRole: 'Create personalized travel packages based on customer data',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-medium-blue'
  },
  {
    id: 'travel-3',
    industry: 'Travel & Hospitality',
    title: 'Operational Efficiency',
    whyItMatters: 'Improve resource allocation and reduce costs by optimizing operations',
    dataSources: ['Staff schedules', 'room occupancy', 'supply chain data'],
    entitiesTables: ['staff', 'rooms', 'resource_allocation'],
    sampleFields: ['staff_id', 'room_id', 'resource_type'],
    reactorRole: 'Optimize resource allocation and improve operational efficiency',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-soundcommerce-yellow'
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

  // Healthcare Use Cases
  {
    id: 'healthcare-1',
    industry: 'Healthcare',
    title: 'Predictive Diagnostics',
    whyItMatters: 'Improve patient outcomes by predicting diseases early',
    dataSources: ['Medical records', 'genomic data', 'wearable sensor data'],
    entitiesTables: ['patients', 'diagnostics', 'disease_predictions'],
    sampleFields: ['patient_id', 'disease_id', 'prediction_probability'],
    reactorRole: 'Predict diseases early and improve patient outcomes',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-blue'
  },
  {
    id: 'healthcare-2',
    industry: 'Healthcare',
    title: 'Personalized Treatment Plans',
    whyItMatters: 'Improve treatment effectiveness by personalizing treatment plans',
    dataSources: ['Medical history', 'genomic data', 'treatment outcomes'],
    entitiesTables: ['patients', 'treatments', 'treatment_plans'],
    sampleFields: ['patient_id', 'treatment_id', 'treatment_effectiveness'],
    reactorRole: 'Personalize treatment plans and improve treatment effectiveness',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-medium-blue'
  },
  {
    id: 'healthcare-3',
    industry: 'Healthcare',
    title: 'Operational Efficiency',
    whyItMatters: 'Reduce costs and improve patient care by optimizing operations',
    dataSources: ['Patient flow data', 'resource utilization', 'staff schedules'],
    entitiesTables: ['patients', 'resources', 'operational_metrics'],
    sampleFields: ['patient_id', 'resource_id', 'utilization_rate'],
    reactorRole: 'Optimize operations and improve patient care',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-soundcommerce-yellow'
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
  },
  {
    id: 'hightech-5',
    industry: 'High Tech/B2B',
    title: 'Geo-specific Compliance Routing',
    whyItMatters: 'Ensure data residency requirements are met for global customers',
    dataSources: ['Customer geo data', 'compliance rules'],
    entitiesTables: ['data_residency', 'compliance_rules', 'routing_policies'],
    sampleFields: ['region', 'data_classification', 'storage_location'],
    reactorRole: 'Route data based on region',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-dark-blue'
  }
];
