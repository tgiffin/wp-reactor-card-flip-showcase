
import { UseCase } from '../types';

export const mediaUseCases: UseCase[] = [
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
  }
];
