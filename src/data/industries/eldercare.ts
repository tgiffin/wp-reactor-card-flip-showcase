
import { UseCase } from '../types';

export const eldercareUseCases: UseCase[] = [
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
  }
];
