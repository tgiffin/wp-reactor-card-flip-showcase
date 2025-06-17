
import { UseCase } from '../types';

export const consumerUseCases: UseCase[] = [
  {
    id: 'consumer-1',
    industry: 'Consumer Products',
    title: 'Appliance Sensor Event Streams converted to JSON or Batch',
    whyItMatters: 'Detect performance issues or safety risks by analyzing real-time telemetry',
    dataSources: ['IoT', 'Firmware logs'],
    entitiesTables: ['sensor_readings', 'device_registry'],
    sampleFields: ['device_id', 'temp', 'error_code'],
    reactorRole: 'Ingest telemetry and normalize into structured events in JSON or FLAT FILE format',
    gradientClass: 'bg-gradient-to-br from-soundcommerce-yellow to-reactor-dark-blue'
  },
  {
    id: 'consumer-2',
    industry: 'Consumer Products',
    title: 'Product Registration Funnel',
    whyItMatters: 'Analyze drop-off and channel mix in product registrations',
    dataSources: ['CRM', 'Web/App forms'],
    entitiesTables: ['registrations', 'device_metadata'],
    sampleFields: ['product_id', 'registration_channel'],
    reactorRole: 'Unify multiple registration channels',
    gradientClass: 'bg-gradient-to-br from-reactor-dark-blue to-reactor-blue'
  },
  {
    id: 'consumer-3',
    industry: 'Consumer Products',
    title: 'Field Issue Pattern Detection',
    whyItMatters: 'Predict common defects using warranty and repair data',
    dataSources: ['Warranty', 'Repair', 'Telemetry'],
    entitiesTables: ['repairs', 'warranty_claims'],
    sampleFields: ['device_model', 'issue_code'],
    reactorRole: 'Ingest data to correlate issues with usage data for QA & CX teams',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-medium-blue'
  },
  {
    id: 'consumer-4',
    industry: 'Consumer Products',
    title: 'Geo-Specific Compliance Routing',
    whyItMatters: 'Ensure data handling is compliant by region',
    dataSources: ['CRM', 'Usage logs'],
    entitiesTables: ['user_metadata', 'geo_compliance_flags'],
    sampleFields: ['region', 'data_type'],
    reactorRole: 'Route data based on region',
    gradientClass: 'bg-gradient-to-br from-reactor-blue to-reactor-dark-blue'
  }
];
