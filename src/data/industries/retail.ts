import { UseCase } from '../types';

export const retailUseCases: UseCase[] = [
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
    reactorRole: 'Stream inventory deltas from eComm, POS, product, and fulfillment APIs and update the Data Warehouse.',
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
  }
];
