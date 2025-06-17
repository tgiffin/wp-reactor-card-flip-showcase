
import { UseCase } from '../types';

export const consumerUseCases: UseCase[] = [
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
  }
];
