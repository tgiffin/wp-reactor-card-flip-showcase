
import { UseCase } from '../types';

export const b2bHightechUseCases: UseCase[] = [
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
