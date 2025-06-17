
import { UseCase } from '../types';

export const travelUseCases: UseCase[] = [
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
  }
];
