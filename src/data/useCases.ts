
export interface UseCase {
  id: string;
  industry: string;
  title: string;
  whyItMatters: string;
  dataSources: string[];
  entitiesTables: string[];
  sampleFields: string[];
  reactorRole: string;
  gradientClass: string;
}

export const useCases: UseCase[] = [
  {
    id: '1',
    industry: 'Retail',
    title: 'Customer Journey Analytics',
    whyItMatters: 'Understanding customer behavior across touchpoints helps optimize marketing spend and improve conversion rates.',
    dataSources: ['POS Systems', 'E-commerce Platform', 'CRM', 'Marketing Tools'],
    entitiesTables: ['Customers', 'Transactions', 'Products', 'Sessions'],
    sampleFields: ['customer_id', 'purchase_amount', 'channel', 'timestamp'],
    reactorRole: 'Unifies customer data across all touchpoints to create comprehensive journey maps and predictive models.',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-medium-blue'
  },
  {
    id: '2',
    industry: 'Travel & Hospitality',
    title: 'Dynamic Pricing Optimization',
    whyItMatters: 'Real-time pricing adjustments based on demand patterns can increase revenue by 15-25%.',
    dataSources: ['Booking Systems', 'Weather APIs', 'Event Data', 'Competitor Pricing'],
    entitiesTables: ['Bookings', 'Inventory', 'Pricing', 'Events'],
    sampleFields: ['room_type', 'occupancy_rate', 'price', 'demand_score'],
    reactorRole: 'Processes real-time data streams to enable instant pricing decisions and demand forecasting.',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-red'
  },
  {
    id: '3',
    industry: 'Consumer Products',
    title: 'Supply Chain Visibility',
    whyItMatters: 'End-to-end supply chain transparency reduces costs and improves customer satisfaction.',
    dataSources: ['ERP Systems', 'IoT Sensors', 'Logistics APIs', 'Supplier Data'],
    entitiesTables: ['Products', 'Shipments', 'Suppliers', 'Inventory'],
    sampleFields: ['product_id', 'location', 'quantity', 'status'],
    reactorRole: 'Connects disparate supply chain systems to provide real-time visibility and predictive analytics.',
    gradientClass: 'bg-gradient-to-br from-reactor-medium-blue to-soundcommerce-yellow'
  },
  {
    id: '4',
    industry: 'Media & Entertainment',
    title: 'Content Performance Analytics',
    whyItMatters: 'Data-driven content decisions can improve engagement rates and reduce production costs.',
    dataSources: ['Streaming Platforms', 'Social Media', 'CMS', 'Analytics Tools'],
    entitiesTables: ['Content', 'Users', 'Views', 'Engagement'],
    sampleFields: ['content_id', 'view_duration', 'engagement_rate', 'demographics'],
    reactorRole: 'Aggregates multi-platform data to provide unified content performance insights and audience analysis.',
    gradientClass: 'bg-gradient-to-br from-reactor-red to-reactor-dark-blue'
  },
  {
    id: '5',
    industry: 'Retail Financial Services',
    title: 'Fraud Detection & Prevention',
    whyItMatters: 'Real-time fraud detection can prevent losses while maintaining customer experience.',
    dataSources: ['Transaction Systems', 'Device Data', 'Behavioral Analytics', 'External Threat Intel'],
    entitiesTables: ['Transactions', 'Customers', 'Devices', 'Risk_Scores'],
    sampleFields: ['transaction_id', 'amount', 'location', 'risk_score'],
    reactorRole: 'Processes high-volume transaction data in real-time to identify and prevent fraudulent activities.',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-blue'
  },
  {
    id: '6',
    industry: 'Healthcare',
    title: 'Patient Outcome Prediction',
    whyItMatters: 'Predictive analytics can improve patient care and reduce healthcare costs.',
    dataSources: ['EHR Systems', 'Medical Devices', 'Lab Results', 'Claims Data'],
    entitiesTables: ['Patients', 'Treatments', 'Outcomes', 'Medications'],
    sampleFields: ['patient_id', 'diagnosis', 'treatment_plan', 'outcome_score'],
    reactorRole: 'Integrates clinical data to enable predictive modeling and personalized treatment recommendations.',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-medium-blue'
  },
  {
    id: '7',
    industry: 'Elder Care',
    title: 'Health Monitoring & Alerts',
    whyItMatters: 'Continuous monitoring can prevent emergency situations and improve quality of life.',
    dataSources: ['Wearable Devices', 'Home Sensors', 'Medical Records', 'Emergency Systems'],
    entitiesTables: ['Residents', 'Vitals', 'Activities', 'Alerts'],
    sampleFields: ['resident_id', 'heart_rate', 'activity_level', 'alert_type'],
    reactorRole: 'Monitors multiple data streams to detect health anomalies and trigger appropriate interventions.',
    gradientClass: 'bg-gradient-to-br from-reactor-red to-soundcommerce-yellow'
  },
  {
    id: '8',
    industry: 'Automotive',
    title: 'Predictive Maintenance',
    whyItMatters: 'Preventing vehicle breakdowns improves safety and reduces maintenance costs.',
    dataSources: ['Vehicle Sensors', 'Service Records', 'Usage Data', 'Weather APIs'],
    entitiesTables: ['Vehicles', 'Components', 'Maintenance', 'Diagnostics'],
    sampleFields: ['vehicle_id', 'component_health', 'mileage', 'service_date'],
    reactorRole: 'Analyzes vehicle telemetry data to predict component failures and optimize maintenance schedules.',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-red'
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
