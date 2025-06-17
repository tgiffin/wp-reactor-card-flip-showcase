
import { UseCase } from '../types';

export const automotiveUseCases: UseCase[] = [
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
  }
];
